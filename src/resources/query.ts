// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Query extends APIResource {
  /**
   * Retrieves documents matching the query.
   */
  retrieve(body: QueryRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/query', { body, ...options });
  }
}

export type QueryRetrieveResponse = unknown;

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
     * Only query chunks of these types.
     */
    chunk_type?: Array<'text' | 'markdown' | 'table' | 'image' | 'messages' | 'message'>;

    /**
     * Only query documents before this date.
     */
    end_date?: string | null;

    /**
     * Only query documents of these types.
     */
    source?: Array<
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
