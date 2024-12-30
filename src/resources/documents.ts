// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Documents extends APIResource {
  /**
   * Retrieves a document by ID.
   */
  retrieve(documentId: string, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get(`/documents/get/${documentId}`, options);
  }

  /**
   * This endpoint allows you to paginate through all documents in the index. You can
   * filter the documents by title, date, metadata, etc.
   */
  list(body: DocumentListParams, options?: Core.RequestOptions): Core.APIPromise<DocumentListResponse> {
    return this._client.post('/documents/list', { body, ...options });
  }
}

export interface Document {
  id: string;

  chunk_count: number;

  ingested_at: string;

  chunk_ids?: Array<string> | null;

  chunks?: Array<Document.Chunk>;

  date?: string | null;

  metadata?: Record<string, string>;

  org_id?: string | null;

  title?: string | null;

  url?: string | null;

  user_id?: string | null;

  visibility?: 'user' | 'org' | 'app' | 'system';
}

export namespace Document {
  export interface Chunk {
    score: number;

    text: string;

    type: 'text' | 'markdown' | 'table' | 'image' | 'messages' | 'message';

    metadata?: Record<string, string>;
  }
}

export interface DocumentListResponse {
  count: number;

  documents: Array<Document>;

  has_more: boolean;

  page: number;
}

export interface DocumentListParams {
  /**
   * Filter the query results.
   */
  filter?: DocumentListParams.Filter;

  /**
   * Number of documents to return per page.
   */
  limit?: number;

  /**
   * Page number to return.
   */
  page?: number;
}

export namespace DocumentListParams {
  /**
   * Filter the query results.
   */
  export interface Filter {
    /**
     * Only query chunks of these types.
     */
    chunk_type?: Array<'text' | 'markdown' | 'table' | 'image' | 'messages' | 'message'>;

    /**
     * Only query documents of these types.
     */
    document_type?: Array<'chat' | 'email' | 'generic' | 'transcript' | 'legal'>;

    /**
     * Only query documents before this date.
     */
    end_date?: string | null;

    /**
     * Only query documents in this namespace.
     */
    namespace?: string | null;

    /**
     * Only query documents this organization has access to.
     */
    org_id?: string | null;

    /**
     * Only query documents from these providers.
     */
    provider?: Array<'slack' | 's3' | 'gmail' | 'notion' | 'google_docs' | 'api'>;

    /**
     * Only query documents on or after this date.
     */
    start_date?: string | null;

    /**
     * Only query documents that this user has access to.
     */
    user_id?: string | null;
  }
}

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentListResponse as DocumentListResponse,
    type DocumentListParams as DocumentListParams,
  };
}
