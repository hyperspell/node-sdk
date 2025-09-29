// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as MemoriesAPI from './memories';

export class Evaluate extends APIResource {
  /**
   * Retrieve an existing query
   */
  getQuery(queryId: string, options?: Core.RequestOptions): Core.APIPromise<Query> {
    return this._client.get(`/memories/query/${queryId}`, options);
  }

  /**
   * Provide feedback on a query result.
   */
  scoreQuery(
    body: EvaluateScoreQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateScoreQueryResponse> {
    return this._client.post('/memories/query/feedback', { body, ...options });
  }
}

export interface Query {
  documents: Array<MemoriesAPI.Memory>;

  /**
   * The answer to the query, if the request was set to answer.
   */
  answer?: string | null;

  /**
   * Errors that occurred during the query. These are meant to help the developer
   * debug the query, and are not meant to be shown to the user.
   */
  errors?: Array<{ [key: string]: string }> | null;

  /**
   * The ID of the query. This can be used to retrieve the query later, or add
   * feedback to it. If the query failed, this will be None.
   */
  query_id?: string | null;

  /**
   * The average score of the query feedback, if any.
   */
  score?: number | null;
}

export interface EvaluateScoreQueryResponse {
  /**
   * A message describing the result.
   */
  message: string;

  /**
   * Whether the feedback was successfully saved.
   */
  success: boolean;
}

export interface EvaluateScoreQueryParams {
  /**
   * The ID of the query to provide feedback on.
   */
  query_id: string;

  /**
   * Rating of the query result from -1 (bad) to +1 (good).
   */
  score?: number;
}

export declare namespace Evaluate {
  export {
    type Query as Query,
    type EvaluateScoreQueryResponse as EvaluateScoreQueryResponse,
    type EvaluateScoreQueryParams as EvaluateScoreQueryParams,
  };
}
