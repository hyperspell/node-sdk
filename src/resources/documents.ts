// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Documents extends APIResource {
  /**
   * Retrieves a document by ID.
   */
  retrieve(documentId: number, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get(`/documents/get/${documentId}`, options);
  }

  /**
   * This endpoint allows you to paginate through all documents in the index. You can
   * filter the documents by title, date, metadata, etc.
   */
  list(params: DocumentListParams, options?: Core.RequestOptions): Core.APIPromise<DocumentListResponse> {
    const { collection, cursor, size } = params;
    return this._client.post('/documents/list', { query: { collection, cursor, size }, ...options });
  }
}

export interface Document {
  collection_id: number;

  /**
   * Along with service, uniquely identifies the source document
   */
  resource_id: string;

  id?: number | null;

  created_at?: string | null;

  ingested_at?: string | null;

  metadata?: unknown;

  sections?: Array<Document.Section>;

  sections_count?: number | null;

  source?:
    | 'generic'
    | 'generic_chat'
    | 'generic_email'
    | 'generic_transcript'
    | 'generic_legal'
    | 'website'
    | 'slack'
    | 's3'
    | 'gmail'
    | 'notion'
    | 'google_docs';

  status?: 'pending' | 'processing' | 'completed' | 'failed';

  title?: string | null;
}

export namespace Document {
  export interface Section {
    content: string;

    document_id: number;

    id?: number | null;

    embedding_e5_large?: Array<number> | null;

    fts?: Array<number> | null;

    metadata?: unknown;

    /**
     * Type of the section
     */
    type?: 'text' | 'markdown' | 'table' | 'image' | 'messages' | 'message';
  }
}

export interface DocumentListResponse {
  items: Array<DocumentListResponse.Item>;

  next_cursor: string | null;
}

export namespace DocumentListResponse {
  export interface Item {
    id: number | null;

    created_at: string | null;

    ingested_at: string | null;

    metadata: unknown;

    resource_id: string;

    sections_count: number | null;

    title: string | null;

    source?:
      | 'generic'
      | 'generic_chat'
      | 'generic_email'
      | 'generic_transcript'
      | 'generic_legal'
      | 'website'
      | 'slack'
      | 's3'
      | 'gmail'
      | 'notion'
      | 'google_docs';

    status?: 'pending' | 'processing' | 'completed' | 'failed';
  }
}

export interface DocumentListParams {
  collection: string;

  cursor?: string | null;

  size?: number;
}

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentListResponse as DocumentListResponse,
    type DocumentListParams as DocumentListParams,
  };
}
