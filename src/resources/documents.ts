// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Documents extends APIResource {
  /**
   * Retrieves a document by ID, including its collection name and sections.
   */
  retrieve(documentId: number, options?: Core.RequestOptions): Core.APIPromise<DocumentRetrieveResponse> {
    return this._client.get(`/documents/get/${documentId}`, options);
  }
}

export interface DocumentRetrieveResponse {
  id: number | null;

  collection: string;

  created_at: string | null;

  ingested_at: string | null;

  metadata: unknown;

  resource_id: string;

  title: string | null;

  sections?: Array<
    DocumentRetrieveResponse.SectionResult | DocumentRetrieveResponse.SectionResultWithElements
  >;

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
}

export namespace DocumentRetrieveResponse {
  export interface SectionResult {
    id?: number | null;

    scores?: SectionResult.Scores;

    text?: string;
  }

  export namespace SectionResult {
    export interface Scores {
      /**
       * How relevant the section is based on full text search
       */
      full_text_search?: number | null;

      /**
       * How relevant the section is based on vector search
       */
      semantic_search?: number | null;

      /**
       * The final weighted score of the section
       */
      weighted?: number | null;
    }
  }

  export interface SectionResultWithElements {
    id?: number | null;

    elements?: Array<SectionResultWithElements.Element>;

    scores?: SectionResultWithElements.Scores;

    text?: string;
  }

  export namespace SectionResultWithElements {
    export interface Element {
      text: string;

      type: 'text' | 'markdown' | 'image' | 'table' | 'title' | 'query';

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

    export interface Scores {
      /**
       * How relevant the section is based on full text search
       */
      full_text_search?: number | null;

      /**
       * How relevant the section is based on vector search
       */
      semantic_search?: number | null;

      /**
       * The final weighted score of the section
       */
      weighted?: number | null;
    }
  }
}

export declare namespace Documents {
  export { type DocumentRetrieveResponse as DocumentRetrieveResponse };
}
