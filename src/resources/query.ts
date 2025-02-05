// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DocumentsAPI from './documents';

export class Query extends APIResource {
  /**
   * Retrieves documents matching the query.
   */
  search(body: QuerySearchParams, options?: Core.RequestOptions): Core.APIPromise<QuerySearchResponse> {
    return this._client.post('/query', { body, ...options });
  }
}

export interface QuerySearchResponse {
  documents: Array<DocumentsAPI.Document>;

  total_sections: number;
}

export interface QuerySearchParams {
  /**
   * Only query documents in these collections.
   */
  collections: string | Array<string>;

  /**
   * Query to run.
   */
  query: string;

  /**
   * Filter the query results.
   */
  filter?: QuerySearchParams.Filter;

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

export namespace QuerySearchParams {
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
  export { type QuerySearchResponse as QuerySearchResponse, type QuerySearchParams as QuerySearchParams };
}
