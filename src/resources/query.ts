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
   * Maximum number of results to return.
   */
  max_results?: number;

  /**
   * Type of query to run.
   */
  query_type?: 'auto' | 'semantic' | 'keyword';
}

export declare namespace Query {
  export {
    type QueryRetrieveResponse as QueryRetrieveResponse,
    type QueryRetrieveParams as QueryRetrieveParams,
  };
}
