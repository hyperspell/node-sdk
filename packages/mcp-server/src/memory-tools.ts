/**
 * Memory tools for AI assistants.
 *
 * Thin wrappers around existing Hyperspell API endpoints:
 * - /memories/query  → hyperspell_recall
 * - /memories/add    → hyperspell_remember
 * - /memories/delete → hyperspell_forget
 * - /memories/list   → hyperspell_profile
 */

import Hyperspell from 'hyperspell';
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { Metadata, McpTool, asTextContentResult, asErrorResult, ToolCallResult } from './types';

// ============================================================================
// hyperspell_recall - Search memories and connected sources
// ============================================================================

const recallMetadata: Metadata = {
  resource: 'memories',
  operation: 'read',
  tags: ['memory', 'search', 'recall'],
  httpMethod: 'post',
  httpPath: '/memories/query',
};

const recallTool: Tool = {
  name: 'hyperspell_recall',
  description: `Search your memories and connected sources for relevant context.

Use this tool BEFORE starting complex tasks to find relevant context from:
- Previous conversations and decisions
- Connected sources (Notion, Google Drive, Slack, Gmail)
- Stored insights and learnings

This enables "unified search" - searching everything at once, not just memories.`,
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Natural language query to search for relevant context.',
      },
      sources: {
        type: 'array',
        items: { type: 'string' },
        description:
          'Sources to search (e.g. ["vault", "notion", "slack", "google_drive", "google_mail"]). Defaults to all connected sources.',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of results to return (default 10).',
        default: 10,
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
  if (!args?.['query']) {
    return asErrorResult('Query is required');
  }

  const query = String(args['query']);
  const limit = Math.min(Math.max(Number(args['limit']) || 10, 1), 50);

  // Build sources list — default to vault + common integrations
  let sources: string[] | undefined;
  if (Array.isArray(args['sources']) && args['sources'].length > 0) {
    sources = args['sources'].map(String);
  } else {
    sources = ['vault', 'notion', 'google_drive', 'slack', 'google_mail'];
  }

  try {
    const response = await client.post('/memories/query', {
      body: {
        query,
        sources,
        options: {
          max_results: limit,
        },
      },
    });

    const result = response as any;
    const documents = result.documents || [];

    const formatted = {
      query_id: result.query_id,
      result_count: documents.length,
      answer: result.answer || undefined,
      results: documents.map((r: any) => ({
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
// hyperspell_remember - Store a memory
// ============================================================================

const rememberMetadata: Metadata = {
  resource: 'memories',
  operation: 'write',
  tags: ['memory', 'store', 'remember'],
  httpMethod: 'post',
  httpPath: '/memories/add',
};

const rememberTool: Tool = {
  name: 'hyperspell_remember',
  description: `Store a conversation or insight for future recall.

Use this tool AFTER completing significant work to preserve:
- Important decisions and their reasoning
- Debugging insights and solutions
- Project-specific patterns and conventions
- User preferences and context

The stored memory will be searchable via hyperspell_recall alongside connected sources.`,
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
      collection: {
        type: 'string',
        description: 'Optional collection name to group related memories.',
      },
      metadata: {
        type: 'object',
        description: 'Optional custom metadata for filtering (string/number/boolean values).',
      },
    },
    required: ['content'],
  },
};

const rememberHandler = async (
  client: Hyperspell,
  args: Record<string, unknown> | undefined,
): Promise<ToolCallResult> => {
  if (!args?.['content']) {
    return asErrorResult('Content is required');
  }

  const content = String(args['content']);
  if (content.length < 10) {
    return asErrorResult('Content must be at least 10 characters');
  }

  try {
    const response = await client.post('/memories/add', {
      body: {
        text: content,
        title: args['title'] ? String(args['title']) : undefined,
        collection: args['collection'] ? String(args['collection']) : undefined,
        metadata: args['metadata'] && typeof args['metadata'] === 'object' ? args['metadata'] : undefined,
      },
    });

    const result = response as any;

    return asTextContentResult({
      success: true,
      resource_id: result.resource_id,
      source: result.source,
      status: result.status,
      message: 'Memory stored successfully and will be available for recall once indexed',
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
// hyperspell_forget - Delete a memory
// ============================================================================

const forgetMetadata: Metadata = {
  resource: 'memories',
  operation: 'write',
  tags: ['memory', 'delete', 'forget'],
  httpMethod: 'delete',
  httpPath: '/memories/delete/{source}/{resource_id}',
};

const forgetTool: Tool = {
  name: 'hyperspell_forget',
  description: `Delete a memory by its resource ID.

Use this tool to remove outdated or incorrect memories.
The resource_id can be found in results from hyperspell_recall or hyperspell_profile.`,
  inputSchema: {
    type: 'object',
    properties: {
      resource_id: {
        type: 'string',
        description: 'The resource_id of the memory to delete.',
      },
      source: {
        type: 'string',
        description: 'The source of the memory (default: "vault").',
        default: 'vault',
      },
    },
    required: ['resource_id'],
  },
};

const forgetHandler = async (
  client: Hyperspell,
  args: Record<string, unknown> | undefined,
): Promise<ToolCallResult> => {
  if (!args?.['resource_id']) {
    return asErrorResult('resource_id is required');
  }

  const resourceId = String(args['resource_id']);
  const source = String(args['source'] || 'vault');

  try {
    const response = await client.delete(`/memories/delete/${source}/${resourceId}`, {});

    const result = response as any;

    return asTextContentResult({
      success: result.success,
      resource_id: result.resource_id,
      chunks_deleted: result.chunks_deleted,
      message: result.message,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return asErrorResult(`Failed to forget: ${message}`);
  }
};

export const forgetMcpTool: McpTool = {
  metadata: forgetMetadata,
  tool: forgetTool,
  handler: forgetHandler,
};

// ============================================================================
// hyperspell_profile - Get recent memories
// ============================================================================

const profileMetadata: Metadata = {
  resource: 'memories',
  operation: 'read',
  tags: ['memory', 'profile', 'context'],
  httpMethod: 'get',
  httpPath: '/memories/list',
};

const profileTool: Tool = {
  name: 'hyperspell_profile',
  description: `List recent memories to understand what context is available.

Use this tool to see what memories have been stored, including their
resource IDs (useful for hyperspell_forget).`,
  inputSchema: {
    type: 'object',
    properties: {
      source: {
        type: 'string',
        description: 'Filter by source (e.g. "vault", "procedure"). Defaults to all sources.',
      },
      collection: {
        type: 'string',
        description: 'Filter by collection name.',
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

const profileHandler = async (
  client: Hyperspell,
  args: Record<string, unknown> | undefined,
): Promise<ToolCallResult> => {
  try {
    const queryParams: Record<string, string> = {};
    if (args?.['source']) {
      queryParams['source'] = String(args['source']);
    }
    if (args?.['collection']) {
      queryParams['collection'] = String(args['collection']);
    }

    const qs = new URLSearchParams(queryParams).toString();
    const url = qs ? `/memories/list?${qs}` : '/memories/list';

    const response = await client.get(url, {});

    const result = response as any;
    const items = result.items || result.data || [];

    const formatted = {
      count: items.length,
      memories: items.map((r: any) => ({
        title: r.title || r.data?.title || r.resource_id,
        source: r.source,
        resource_id: r.resource_id,
        status: r.status,
        collection: r.collection,
      })),
    };

    return asTextContentResult(formatted);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return asErrorResult(`Failed to list memories: ${message}`);
  }
};

export const profileMcpTool: McpTool = {
  metadata: profileMetadata,
  tool: profileTool,
  handler: profileHandler,
};

// ============================================================================
// Export all tools
// ============================================================================

export default [recallMcpTool, rememberMcpTool, forgetMcpTool, profileMcpTool];
