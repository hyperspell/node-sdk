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

  id?: number | null;

  created_at?: string | null;

  ingested_at?: string | null;

  metadata?: unknown;

  /**
   * Along with service, uniquely identifies the source document
   */
  resource_id?: string;

  sections?: Array<Document.Section>;

  sections_count?: number | null;

  source?:
    | 'generic'
    | 'markdown'
    | 'chat'
    | 'email'
    | 'transcript'
    | 'legal'
    | 'website'
    | 'image'
    | 'pdf'
    | 'audio'
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
    document_id: number;

    id?: number | null;

    elements?: Array<Section.Element>;

    embedding_e5_large?: Array<number> | null;

    fts?: Array<number> | null;

    metadata?: unknown;

    text?: string;
  }

  export namespace Section {
    export interface Element {
      text: string;

      type: 'text' | 'markdown' | 'image' | 'table' | 'title';

      id?: string;

      metadata?: Element.Metadata;

      summary?: string | null;
    }

    export namespace Element {
      export interface Metadata {
        author?: string | null;

        /**
         * The id of the element that this element is continued from if it had to be split
         * during chunking
         */
        continued_from?: string | null;

        filename?: string | null;

        languages?: Array<string>;

        links?: Array<string>;

        page_number?: number | null;

        title_level?: number | null;
      }
    }
  }
}

export declare namespace Documents {
  export { type Document as Document };
}
