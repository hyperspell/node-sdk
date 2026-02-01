/**
 * Hyperspell memory hook for OpenClaw.
 *
 * Listens to `agent:bootstrap` events to:
 * 1. Save the previous session's conversation to Hyperspell memory
 * 2. Recall relevant memories and inject them as a bootstrap context file
 *
 * Requires HYPERSPELL_API_KEY and HYPERSPELL_USER_ID environment variables.
 */

import * as fs from 'fs';
import * as path from 'path';

const HYPERSPELL_API_BASE = 'https://api.hyperspell.com';
const MARKER_FILE = '.hyperspell-last-saved-session';
const MAX_CONTENT_LENGTH = 50000;
const RECALL_LIMIT = 10;

// OpenClaw hook event types (inlined to avoid runtime dependency)
interface WorkspaceBootstrapFile {
  path: string;
  content: string;
}

interface SessionMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface SessionEntry {
  id: string;
  messages?: SessionMessage[];
}

interface HookContext {
  sessionEntry?: SessionEntry;
  sessionId?: string;
  workspaceDir?: string;
  bootstrapFiles?: WorkspaceBootstrapFile[];
}

interface HookEvent {
  type: string;
  action: string;
  messages: string[];
  context: HookContext;
}

type HookHandler = (event: HookEvent) => Promise<void>;

async function hyperspellFetch(
  endpoint: string,
  body: Record<string, unknown>,
  apiKey: string,
  userId: string,
): Promise<unknown> {
  const response = await fetch(`${HYPERSPELL_API_BASE}${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'X-As-User': userId,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => 'unknown error');
    throw new Error(`Hyperspell API error ${response.status}: ${text}`);
  }

  return response.json();
}

function getMarkerPath(workspaceDir: string): string {
  return path.join(workspaceDir, MARKER_FILE);
}

function getLastSavedSessionId(workspaceDir: string): string | null {
  const markerPath = getMarkerPath(workspaceDir);
  try {
    return fs.readFileSync(markerPath, 'utf-8').trim();
  } catch {
    return null;
  }
}

function setLastSavedSessionId(workspaceDir: string, sessionId: string): void {
  const markerPath = getMarkerPath(workspaceDir);
  fs.writeFileSync(markerPath, sessionId, 'utf-8');
}

/**
 * Extract a summary of the session transcript suitable for saving as a memory.
 * Takes the last N messages and formats them as a conversation.
 */
function extractSessionContent(session: SessionEntry): string | null {
  const messages = session.messages;
  if (!messages || messages.length === 0) return null;

  // Take up to the last 20 messages to stay within size limits
  const recent = messages.slice(-20);

  const formatted = recent
    .map((msg) => {
      const role = msg.role === 'user' ? 'User' : msg.role === 'assistant' ? 'Assistant' : 'System';
      return `${role}: ${msg.content}`;
    })
    .join('\n\n');

  if (formatted.length < 20) return null;

  return formatted.slice(0, MAX_CONTENT_LENGTH);
}

/**
 * Derive a recall query from the current context.
 * Uses the most recent user message or bootstrap file content.
 */
function deriveRecallQuery(event: HookEvent): string | null {
  // Check for recent user messages in the event
  if (event.messages.length > 0) {
    const lastMessage = event.messages[event.messages.length - 1];
    if (lastMessage && lastMessage.trim().length > 0) {
      return lastMessage.trim().slice(0, 500);
    }
  }

  // Fall back to reading the most recent bootstrap file content
  const bootstrapFiles = event.context.bootstrapFiles;
  if (bootstrapFiles && bootstrapFiles.length > 0) {
    // Look for USER.md or SOUL.md for personality/context hints
    const userFile = bootstrapFiles.find(
      (f) => f.path === 'USER.md' || f.path === 'IDENTITY.md',
    );
    if (userFile && userFile.content.trim().length > 0) {
      return userFile.content.trim().slice(0, 500);
    }
  }

  return null;
}

interface RecallResult {
  title?: string;
  source?: string;
  chunks?: Array<{ content?: string }>;
}

interface RecallResponse {
  results?: RecallResult[];
}

/**
 * Format recall results as Markdown for injection into the system prompt.
 */
function formatRecallResults(response: RecallResponse): string | null {
  const results = response.results;
  if (!results || results.length === 0) return null;

  const sections = results.map((result, i) => {
    const title = result.title || `Result ${i + 1}`;
    const source = result.source || 'memory';
    const content =
      result.chunks?.map((c) => c.content).join('\n') || '(no content)';
    return `### ${title}\n*Source: ${source}*\n\n${content}`;
  });

  return [
    '# Relevant Memories & Context',
    '',
    'The following memories and connected content were recalled from Hyperspell.',
    'Use this context to inform your responses.',
    '',
    ...sections,
  ].join('\n');
}

/**
 * Save the previous session's conversation to Hyperspell memory.
 */
async function savePreviousSession(
  context: HookContext,
  apiKey: string,
  userId: string,
): Promise<void> {
  const session = context.sessionEntry;
  const workspaceDir = context.workspaceDir;
  if (!session || !workspaceDir) return;

  // Check if we already saved this session
  const lastSaved = getLastSavedSessionId(workspaceDir);
  if (lastSaved === session.id) return;

  const content = extractSessionContent(session);
  if (!content) return;

  try {
    await hyperspellFetch(
      '/memories/remember',
      {
        content,
        session_id: session.id,
        title: `Session ${new Date().toISOString().split('T')[0]}`,
        tags: ['openclaw', 'session'],
      },
      apiKey,
      userId,
    );

    setLastSavedSessionId(workspaceDir, session.id);
  } catch (err) {
    // Don't block the agent if saving fails — just log it
    console.error('[hyperspell] Failed to save session:', err);
  }
}

/**
 * Recall relevant memories and return formatted Markdown for injection.
 */
async function recallMemories(
  event: HookEvent,
  apiKey: string,
  userId: string,
): Promise<string | null> {
  const query = deriveRecallQuery(event);
  if (!query) return null;

  try {
    const response = (await hyperspellFetch(
      '/memories/recall',
      {
        query,
        include_documents: true,
        limit: RECALL_LIMIT,
      },
      apiKey,
      userId,
    )) as RecallResponse;

    return formatRecallResults(response);
  } catch (err) {
    console.error('[hyperspell] Failed to recall memories:', err);
    return null;
  }
}

/**
 * Main hook handler for OpenClaw's agent:bootstrap event.
 */
const handler: HookHandler = async (event: HookEvent): Promise<void> => {
  if (event.type !== 'agent' || event.action !== 'bootstrap') return;

  const apiKey = process.env['HYPERSPELL_API_KEY'];
  const userId = process.env['HYPERSPELL_USER_ID'];
  if (!apiKey || !userId) {
    console.error(
      '[hyperspell] Missing HYPERSPELL_API_KEY or HYPERSPELL_USER_ID environment variables',
    );
    return;
  }

  // 1. Save previous session context (if any)
  await savePreviousSession(event.context, apiKey, userId);

  // 2. Recall relevant memories and inject as bootstrap file
  const context = await recallMemories(event, apiKey, userId);
  if (context) {
    event.context.bootstrapFiles?.push({
      path: 'HYPERSPELL_CONTEXT.md',
      content: context,
    });
  }
};

export default handler;
export { handler, savePreviousSession, recallMemories, formatRecallResults };
