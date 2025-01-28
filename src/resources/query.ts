// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Query extends APIResource {
  /**
   * Retrieves documents matching the query.
   */
  retrieve(body: QueryRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<QueryRetrieveResponse> {
    return this._client.post('/query', { body, ...options });
  }
}

export interface QueryRetrieveResponse {
  documents: Array<QueryRetrieveResponse.Document>;

  total_sections: number;
}

export namespace QueryRetrieveResponse {
  export interface Document {
    id: number | null;

    collection: string;

    created_at: string | null;

    ingested_at: string | null;

    metadata: unknown;

    resource_id: string;

    title: string | null;

    sections?: Array<Document.Section>;

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
}

export interface QueryRetrieveParams {
  /**
   * Query to run.
   */
  query: string;

  /**
   * Only query documents in these collections.
   */
  collections?: Array<string>;

  /**
   * Filter the query results.
   */
  filter?: QueryRetrieveParams.Filter;

  /**
   * Include the elements of a section in the results.
   */
  include_elements?: boolean;

  /**
   * Maximum number of results to return.
   */
  max_results?: number;

  /**
   * Type of query to run.
   */
  query_type?: 'auto' | 'semantic' | 'keyword';
}

export namespace QueryRetrieveParams {
  /**
   * Filter the query results.
   */
  export interface Filter {
    /**
     * Only query documents before this date.
     */
    end_date?: string | null;

    /**
     * Only query documents of these types.
     */
    source?: Array<
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
      | 'google_docs'
    >;

    /**
     * Only query documents on or after this date.
     */
    start_date?: string | null;
  }
}

export declare namespace Query {
  export {
    type QueryRetrieveResponse as QueryRetrieveResponse,
    type QueryRetrieveParams as QueryRetrieveParams,
  };
}
