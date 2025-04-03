// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Query extends APIResource {
  /**
   * Retrieves documents matching the query.
   */
  search(body: QuerySearchParams, options?: Core.RequestOptions): Core.APIPromise<QuerySearchResponse> {
    return this._client.post('/query', { body, ...options });
  }
}

export interface QuerySearchResponse {
  documents: Array<QuerySearchResponse.Document>;
}

export namespace QuerySearchResponse {
  export interface Document {
    resource_id: string;

    source:
      | 'generic'
      | 'mcp'
      | 'slack'
      | 's3'
      | 'gmail'
      | 'notion'
      | 'google_docs'
      | 'hubspot'
      | 'reddit'
      | 'google-calendar';

    extra?: unknown;
  }
}

export interface QuerySearchParams {
  /**
   * Query to run.
   */
  query: string;

  /**
   * Only query documents in these collections. If not given, will query the user's
   * default collection
   */
  collections?: string | Array<string> | null;

  /**
   * Filter the query results.
   */
  filter?: QuerySearchParams.Filter;

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
     * Only query documents from these sources.
     */
    source?: Array<
      | 'generic'
      | 'mcp'
      | 'slack'
      | 's3'
      | 'gmail'
      | 'notion'
      | 'google_docs'
      | 'hubspot'
      | 'reddit'
      | 'google-calendar'
    >;

    /**
     * Only query documents on or after this date.
     */
    start_date?: string | null;

    /**
     * Only query documents of these types.
     */
    types?: Array<
      | 'generic'
      | 'memory'
      | 'markdown'
      | 'chat'
      | 'email'
      | 'transcript'
      | 'legal'
      | 'website'
      | 'image'
      | 'pdf'
      | 'audio'
      | 'spreadsheet'
      | 'archive'
      | 'book'
      | 'video'
      | 'code'
      | 'calendar'
      | 'json'
      | 'presentation'
      | 'unsupported'
      | 'person'
      | 'company'
      | 'crm_contact'
      | 'event'
    >;
  }
}

export declare namespace Query {
  export { type QuerySearchResponse as QuerySearchResponse, type QuerySearchParams as QuerySearchParams };
}
