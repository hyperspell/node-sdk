/**
 * Memory tools for AI coding assistants.
 *
 * These tools provide long-term memory capabilities optimized for coding workflows,
 * enabling unified search across stored memories AND connected documents (Notion,
 * Google Drive, Slack, etc.).
 */

import Hyperspell from 'hyperspell';
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { Metadata, McpTool, asTextContentResult, asErrorResult, ToolCallResult } from './types';

// ============================================================================
// hyperspell_recall - Search memories and documents
// ============================================================================

const recallMetadata: Metadata = {
  resource: 'memories',
  operation: 'read',
  tags: ['memory', 'search', 'recall'],
  httpMethod: 'post',
  httpPath: '/memories/recall',
};

const recallTool: Tool = {
  name: 'hyperspell_recall',
  description: `Search your memories and connected documents for relevant context.

Use this tool BEFORE starting complex tasks to find relevant context from:
- Previous conversations and decisions
- Connected documents (Notion, Google Drive, Slack, Gmail)
- Stored insights and learnings

This enables "unified search" - searching everything at once, not just memories.`,
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Natural language query to search for relevant context.',
      },
      include_documents: {
        type: 'boolean',
        description:
          'If true (default), search connected documents (Notion, Drive, etc.) in addition to memories.',
        default: true,
      },
      limit: {
        type: 'number',
        description: 'Maximum number of results to return (1-50, default 10).',
        default: 10,
      },
      session_id: {
        type: 'string',
        description: 'Optional session ID to boost results from the current session.',
      },
    },
    required: ['query'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

const recallHandler = async (
  client: Hyperspell,
  args: Record<string, unknown> | undefined,
): Promise<ToolCallResult> => {
  if (!args?.query) {
    return asErrorResult('Query is required');
  }

  const query = String(args.query);
  const includeDocuments = args.include_documents !== false;
  const limit = Math.min(Math.max(Number(args.limit) || 10, 1), 50);

  try {
    // Use the new /memories/recall endpoint
    const response = await client.post('/memories/recall', {
      body: {
        query,
        include_documents: includeDocuments,
        limit,
        session_id: args.session_id ? String(args.session_id) : undefined,
      },
    });

    // Format results for readability
    const results = (response as any).results || [];
    const sourcesSearched = (response as any).sources_searched || [];

    const formatted = {
      query_id: (response as any).query_id,
      sources_searched: sourcesSearched,
      result_count: results.length,
      results: results.map((r: any) => ({
        title: r.title || r.resource_id,
        source: r.source,
        score: r.score,
        summary: r.summary || r.text?.substring(0, 200),
        resource_id: r.resource_id,
      })),
    };

    return asTextContentResult(formatted);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return asErrorResult(`Failed to recall: ${message}`);
  }
};

export const recallMcpTool: McpTool = {
  metadata: recallMetadata,
  tool: recallTool,
  handler: recallHandler,
};

// ============================================================================
// hyperspell_remember - Store a memory for future recall
// ============================================================================

const rememberMetadata: Metadata = {
  resource: 'memories',
  operation: 'write',
  tags: ['memory', 'store', 'remember'],
  httpMethod: 'post',
  httpPath: '/memories/remember',
};

const rememberTool: Tool = {
  name: 'hyperspell_remember',
  description: `Store a conversation or insight for future recall.

Use this tool AFTER completing significant work to preserve:
- Important decisions and their reasoning
- Debugging insights and solutions
- Project-specific patterns and conventions
- User preferences and context

The stored memory will be searchable via hyperspell_recall alongside connected documents.`,
  inputSchema: {
    type: 'object',
    properties: {
      content: {
        type: 'string',
        description:
          'The content to remember. Can be a conversation, insight, decision, or any text worth preserving.',
      },
      title: {
        type: 'string',
        description: 'Optional title for the memory.',
      },
      tags: {
        type: 'array',
        items: { type: 'string' },
        description: 'Optional tags for categorization (max 10).',
      },
      session_id: {
        type: 'string',
        description:
          'Optional session ID for deduplication. Same content in same session will not be stored twice.',
      },
    },
    required: ['content'],
  },
};

const rememberHandler = async (
  client: Hyperspell,
  args: Record<string, unknown> | undefined,
): Promise<ToolCallResult> => {
  if (!args?.content) {
    return asErrorResult('Content is required');
  }

  const content = String(args.content);
  if (content.length < 10) {
    return asErrorResult('Content must be at least 10 characters');
  }

  try {
    // Use the new /memories/remember endpoint
    const response = await client.post('/memories/remember', {
      body: {
        content,
        title: args.title ? String(args.title) : undefined,
        tags: Array.isArray(args.tags) ? args.tags.map(String).slice(0, 10) : undefined,
        session_id: args.session_id ? String(args.session_id) : undefined,
      },
    });

    const result = response as any;

    return asTextContentResult({
      success: true,
      resource_id: result.resource_id,
      status: result.status,
      deduplicated: result.deduplicated || false,
      message:
        result.deduplicated ?
          'Content was already stored in this session (deduplicated)'
        : 'Memory stored successfully and will be available for recall once indexed',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return asErrorResult(`Failed to remember: ${message}`);
  }
};

export const rememberMcpTool: McpTool = {
  metadata: rememberMetadata,
  tool: rememberTool,
  handler: rememberHandler,
};

// ============================================================================
// Export both tools
// ============================================================================

export default [recallMcpTool, rememberMcpTool];
