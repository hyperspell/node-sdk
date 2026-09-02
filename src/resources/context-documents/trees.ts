// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trees extends APIResource {
  /**
   * Generate a three-tier context document tree for local push delivery.
   *
   * Creates company, workstream, and personal context documents from the app's
   * synced data. Returns immediately with a tree ID; use
   * `GET /context-documents/tree/latest` to retrieve the result.
   */
  generate(
    body: TreeGenerateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreeGenerateResponse> {
    return this._client.post('/context-documents/tree', { body, ...options });
  }

  /**
   * Get the most recent context document tree for the authenticated app.
   *
   * By default, the endpoint returns the latest ready tree. Readiness depends on
   * whether the app has `require_review` enabled:
   *
   * - `require_review=False` (default): return the latest completed tree.
   * - `require_review=True`: return the latest published tree.
   *
   * `status` filters to a specific status (case-insensitive). When no ready tree
   * exists yet, the endpoint returns the newest available generation state.
   */
  getLatest(
    query: TreeGetLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TreeGetLatestResponse> {
    return this._client.get('/context-documents/tree/latest', { query, ...options });
  }

  /**
   * Fetch a specific tree by its tree ID instead of selecting the latest one.
   */
  get(treeID: string, options?: RequestOptions): APIPromise<TreeGetResponse> {
    return this._client.get(path`/context-documents/tree/by-id/${treeID}`, options);
  }

  /**
   * Return the generation progress for a single tree.
   *
   * Active generations include phase and counter data. Completed generations, and
   * generations without detailed progress data, return status only.
   */
  progress(treeID: string, options?: RequestOptions): APIPromise<TreeProgressResponse> {
    return this._client.get(path`/context-documents/tree/${treeID}/progress`, options);
  }
}

export interface TreeGenerateResponse {
  created_at: string;

  status: string;

  tree_id: string;
}

export interface TreeGetResponse {
  completed_at: string | null;

  created_at: string;

  error: string | null;

  files: Array<TreeGetResponse.File> | null;

  meta: { [key: string]: unknown };

  status: string;

  tree_id: string;

  version: number;

  /**
   * Status of a newer generation that is processing or recently failed.
   *
   * This can accompany the last ready tree so clients can report progress while
   * continuing to use ready content.
   */
  generating?: TreeGetResponse.Generating | null;
}

export namespace TreeGetResponse {
  export interface File {
    content: string;

    path: string;

    team: string | null;

    tier: string;

    updated_at: string;

    error?: string | null;

    provenance?: { [key: string]: unknown } | null;

    status?: string | null;
  }

  /**
   * Status of a newer generation that is processing or recently failed.
   *
   * This can accompany the last ready tree so clients can report progress while
   * continuing to use ready content.
   */
  export interface Generating {
    created_at: string;

    status: 'processing' | 'failed';

    tree_id: string;

    error?: string | null;

    progress?: { [key: string]: unknown } | null;
  }
}

export interface TreeGetLatestResponse {
  completed_at: string | null;

  created_at: string;

  error: string | null;

  files: Array<TreeGetLatestResponse.File> | null;

  meta: { [key: string]: unknown };

  status: string;

  tree_id: string;

  version: number;

  /**
   * Status of a newer generation that is processing or recently failed.
   *
   * This can accompany the last ready tree so clients can report progress while
   * continuing to use ready content.
   */
  generating?: TreeGetLatestResponse.Generating | null;
}

export namespace TreeGetLatestResponse {
  export interface File {
    content: string;

    path: string;

    team: string | null;

    tier: string;

    updated_at: string;

    error?: string | null;

    provenance?: { [key: string]: unknown } | null;

    status?: string | null;
  }

  /**
   * Status of a newer generation that is processing or recently failed.
   *
   * This can accompany the last ready tree so clients can report progress while
   * continuing to use ready content.
   */
  export interface Generating {
    created_at: string;

    status: 'processing' | 'failed';

    tree_id: string;

    error?: string | null;

    progress?: { [key: string]: unknown } | null;
  }
}

/**
 * Response shape for GET /context-documents/tree/{tree_id}/progress.
 */
export interface TreeProgressResponse {
  status: string;

  tree_id: string;

  completed_docs?: number | null;

  failed_docs?: number | null;

  failed_keys?: Array<string> | null;

  /**
   * Generation phase. Values: discover, search, select, synthesize, finalize,
   * personal, done. Null when detailed progress is unavailable.
   */
  phase?: string | null;

  total_docs?: number | null;
}

export interface TreeGenerateParams {
  /**
   * Integration sources to include (e.g., ['gmail', 'slack']). Defaults to all.
   */
  sources?: Array<string> | null;

  /**
   * User ID for personal tier scoping. When set, personal/context.md is generated
   * from this user's data only. Company and workstream tiers still use all data.
   */
  user_id?: string | null;

  /**
   * Generate docs for this workstream only (skip auto-detection).
   */
  workstream_name?: string | null;
}

export interface TreeGetLatestParams {
  status?: string | null;
}

export declare namespace Trees {
  export {
    type TreeGenerateResponse as TreeGenerateResponse,
    type TreeGetResponse as TreeGetResponse,
    type TreeGetLatestResponse as TreeGetLatestResponse,
    type TreeProgressResponse as TreeProgressResponse,
    type TreeGenerateParams as TreeGenerateParams,
    type TreeGetLatestParams as TreeGetLatestParams,
  };
}
