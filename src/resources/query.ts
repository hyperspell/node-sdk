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

  /**
   * The answer to the query, if the request was set to answer.
   */
  answer?: string | null;

  /**
   * Errors that occurred during the query. These are meant to help the developer
   * debug the query, and are not meant to be shown to the user.
   */
  errors?: Array<QuerySearchResponse.Error> | null;
}

export namespace QuerySearchResponse {
  export interface Document {
    resource_id: string;

    source: 'collections' | 'notion' | 'slack' | 'hubspot' | 'google-calendar';

    metadata?: Document.Metadata;

    /**
     * The relevance of the resource to the query
     */
    score?: number | null;
  }

  export namespace Document {
    export interface Metadata {
      created_at?: string | null;

      last_modified?: string | null;

      url?: string | null;

      [k: string]: unknown;
    }
  }

  export interface Error {
    error: string;

    message: string;
  }
}

export interface QuerySearchParams {
  /**
   * Query to run.
   */
  query: string;

  /**
   * If true, the query will be answered along with matching source documents.
   */
  answer?: boolean;

  /**
   * Filter the query results.
   */
  filter?: QuerySearchParams.Filter;

  /**
   * Maximum number of results to return.
   */
  max_results?: number;

  /**
   * Only query documents from these sources.
   */
  sources?: Array<'collections' | 'notion' | 'slack' | 'hubspot' | 'google-calendar'>;
}

export namespace QuerySearchParams {
  /**
   * Filter the query results.
   */
  export interface Filter {
    /**
     * Only query documents on or after this date.
     */
    after?: string | null;

    /**
     * Only query documents before this date.
     */
    before?: string | null;

    /**
     * If querying collections: Only query documents in these collections. If not
     * given, will query the user's default collection
     */
    collections?: string | Array<string> | null;
  }
}

export declare namespace Query {
  export { type QuerySearchResponse as QuerySearchResponse, type QuerySearchParams as QuerySearchParams };
}
