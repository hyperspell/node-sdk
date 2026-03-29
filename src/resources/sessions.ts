// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MemoriesAPI from './memories';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Sessions extends APIResource {
  /**
   * Add an agent trace/transcript to the index.
   *
   * Accepts traces as a string in Hyperdoc format (native), Vercel AI SDK format, or
   * OpenClaw JSONL format. The format is auto-detected if not specified.
   *
   * **Hyperdoc format** (JSON array, snake_case with type discriminators):
   *
   * ```json
   * {
   *   "history": "[{\"type\": \"trace_message\", \"role\": \"user\", \"text\": \"Hello\"}]"
   * }
   * ```
   *
   * **Vercel AI SDK format** (JSON array, camelCase):
   *
   * ```json
   * { "history": "[{\"role\": \"user\", \"content\": \"Hello\"}]" }
   * ```
   *
   * **OpenClaw JSONL format** (newline-delimited JSON):
   *
   * ```json
   * {
   *   "history": "{\"type\":\"session\",\"id\":\"abc\"}\n{\"type\":\"message\",\"message\":{\"role\":\"user\",...}}"
   * }
   * ```
   */
  add(body: SessionAddParams, options?: RequestOptions): APIPromise<MemoriesAPI.MemoryStatus> {
    return this._client.post('/trace/add', { body, ...options });
  }
}

export interface SessionAddParams {
  /**
   * The trace history as a string. Can be a JSON array of Hyperdoc steps, a JSON
   * array of Vercel AI SDK steps, or OpenClaw JSONL.
   */
  history: string;

  /**
   * Date of the trace
   */
  date?: string;

  /**
   * What kind of memories to extract from the trace
   */
  extract?: Array<'procedure' | 'memory'>;

  /**
   * Trace format: 'vercel', 'hyperdoc', or 'openclaw'. Auto-detected if not set.
   */
  format?: 'vercel' | 'hyperdoc' | 'openclaw' | null;

  /**
   * Custom metadata for filtering. Keys must be alphanumeric with underscores, max
   * 64 chars.
   */
  metadata?: { [key: string]: string | number | boolean } | null;

  /**
   * Resource identifier for the trace.
   */
  session_id?: string;

  /**
   * Title of the trace
   */
  title?: string | null;
}

export declare namespace Sessions {
  export { type SessionAddParams as SessionAddParams };
}
