// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import {
  Config,
  ConfigGetResponse,
  ConfigResetResponse,
  ConfigUpdateParams,
  ConfigUpdateResponse,
} from './config';
import * as DigestsAPI from './digests';
import {
  DigestGenerateParams,
  DigestGenerateResponse,
  DigestListParams,
  DigestListResponse,
  Digests,
} from './digests';
import * as TreesAPI from './trees';
import {
  TreeGenerateParams,
  TreeGenerateResponse,
  TreeGetLatestParams,
  TreeGetLatestResponse,
  TreeGetResponse,
  TreeProgressResponse,
  Trees,
} from './trees';
import { APIPromise } from '../../core/api-promise';
import {
  ContextDocumentsCursorPage,
  type ContextDocumentsCursorPageParams,
  PagePromise,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ContextDocuments extends APIResource {
  trees: TreesAPI.Trees = new TreesAPI.Trees(this._client);
  digests: DigestsAPI.Digests = new DigestsAPI.Digests(this._client);
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);

  /**
   * Generate an LLM-synthesized context document from the app's synced data.
   *
   * Generation runs asynchronously. The endpoint returns immediately with status
   * `PROCESSING`; synthesis time depends on the amount of source data.
   */
  generate(
    body: ContextDocumentGenerateParams,
    options?: RequestOptions,
  ): APIPromise<ContextDocumentGenerateResponse> {
    return this._client.post('/context-documents/generate', { body, ...options });
  }

  /**
   * List context documents for the authenticated app, most recent first.
   */
  list(
    query: ContextDocumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContextDocumentListResponsesContextDocumentsCursorPage, ContextDocumentListResponse> {
    return this._client.getAPIList(
      '/context-documents',
      ContextDocumentsCursorPage<ContextDocumentListResponse>,
      { query, ...options },
    );
  }

  /**
   * Get a specific context document by ID.
   */
  get(documentID: string, options?: RequestOptions): APIPromise<ContextDocumentGetResponse> {
    return this._client.get(path`/context-documents/${documentID}`, options);
  }
}

export type ContextDocumentListResponsesContextDocumentsCursorPage =
  ContextDocumentsCursorPage<ContextDocumentListResponse>;

export interface ContextDocumentListResponse {
  completed_at: string | null;

  created_at: string;

  document_id: string;

  model: string;

  sources: Array<string>;

  status: string;

  token_count: number | null;

  error?: string | null;
}

export interface ContextDocumentGenerateResponse {
  created_at: string;

  document_id: string;

  status: string;
}

export interface ContextDocumentGetResponse {
  completed_at: string | null;

  content: string | null;

  created_at: string;

  document_id: string;

  error: string | null;

  metadata: { [key: string]: unknown };

  model: string;

  prompt: string | null;

  sources: Array<string>;

  status: string;

  token_usage: { [key: string]: unknown } | null;

  user_id: string | null;
}

export interface ContextDocumentGenerateParams {
  /**
   * Model used for final synthesis.
   */
  model?: string;

  /**
   * Custom prompt template. Replaces the standard summary prompt.
   */
  prompt?: string | null;

  /**
   * Integration sources to include (e.g., ['gmail', 'slack']). Defaults to all
   * connected integrations.
   */
  sources?: Array<string> | null;

  /**
   * Scope generation to a specific user's data.
   */
  user_id?: string | null;
}

export interface ContextDocumentListParams extends ContextDocumentsCursorPageParams {
  status?: 'processing' | 'completed' | 'failed' | null;
}

ContextDocuments.Trees = Trees;
ContextDocuments.Digests = Digests;
ContextDocuments.Config = Config;

export declare namespace ContextDocuments {
  export {
    type ContextDocumentListResponse as ContextDocumentListResponse,
    type ContextDocumentGenerateResponse as ContextDocumentGenerateResponse,
    type ContextDocumentGetResponse as ContextDocumentGetResponse,
    type ContextDocumentListResponsesContextDocumentsCursorPage as ContextDocumentListResponsesContextDocumentsCursorPage,
    type ContextDocumentGenerateParams as ContextDocumentGenerateParams,
    type ContextDocumentListParams as ContextDocumentListParams,
  };

  export {
    Trees as Trees,
    type TreeGenerateResponse as TreeGenerateResponse,
    type TreeGetResponse as TreeGetResponse,
    type TreeGetLatestResponse as TreeGetLatestResponse,
    type TreeProgressResponse as TreeProgressResponse,
    type TreeGenerateParams as TreeGenerateParams,
    type TreeGetLatestParams as TreeGetLatestParams,
  };

  export {
    Digests as Digests,
    type DigestListResponse as DigestListResponse,
    type DigestGenerateResponse as DigestGenerateResponse,
    type DigestGenerateParams as DigestGenerateParams,
    type DigestListParams as DigestListParams,
  };

  export {
    Config as Config,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigResetResponse as ConfigResetResponse,
    type ConfigUpdateParams as ConfigUpdateParams,
  };
}
