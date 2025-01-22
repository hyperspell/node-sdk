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

export declare namespace Documents {
  export { type Document as Document };
}
