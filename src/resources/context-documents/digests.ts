// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Digests extends APIResource {
  /**
   * Generate a date-windowed "what the company did today" digest.
   *
   * Returns immediately with a tree ID. Poll
   * `GET /context-documents/tree/{tree_id}/progress` for completion or fetch the
   * result with `GET /context-documents/tree/by-id/{tree_id}`.
   */
  generate(body: DigestGenerateParams, options?: RequestOptions): APIPromise<DigestGenerateResponse> {
    return this._client.post('/context-documents/digest', { body, ...options });
  }

  /**
   * List recent digest summaries, newest first.
   *
   * Filter by cadence with `period=daily` or `period=weekly`. Fetch full content
   * with `GET /context-documents/tree/by-id/{tree_id}`.
   */
  list(
    query: DigestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DigestListResponse> {
    return this._client.get('/context-documents/digest/list', { query, ...options });
  }
}

export interface DigestListResponse {
  digests: Array<DigestListResponse.Digest>;
}

export namespace DigestListResponse {
  /**
   * A digest summary. Fetch the full content through the tree-by-ID endpoint.
   */
  export interface Digest {
    completed_at: string | null;

    created_at: string;

    period: string | null;

    status: string;

    tree_id: string;

    window_end: string | null;

    window_start: string | null;
  }
}

export interface DigestGenerateResponse {
  created_at: string;

  status: string;

  tree_id: string;
}

export interface DigestGenerateParams {
  /**
   * Digest cadence: 'daily' or 'weekly'. Sets the default window when none is given.
   */
  period?: string;

  /**
   * Integration sources to include (e.g., ['slack', 'github']). Defaults to all.
   */
  sources?: Array<string> | null;

  /**
   * Exclusive upper bound of the digest window. Defaults to now.
   */
  window_end?: string | null;

  /**
   * Inclusive lower bound of the digest window. Defaults to midnight UTC today
   * (paired with window_end=now) when omitted. Both bounds must be supplied
   * together.
   */
  window_start?: string | null;
}

export interface DigestListParams {
  limit?: number;

  period?: string | null;
}

export declare namespace Digests {
  export {
    type DigestListResponse as DigestListResponse,
    type DigestGenerateResponse as DigestGenerateResponse,
    type DigestGenerateParams as DigestGenerateParams,
    type DigestListParams as DigestListParams,
  };
}
