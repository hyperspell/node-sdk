// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MemoriesAPI from './memories';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Evaluate extends APIResource {
  /**
   * Retrieve an existing query
   */
  getQuery(queryID: string, options?: RequestOptions): APIPromise<Query> {
    return this._client.get(path`/evaluate/query/${queryID}`, options);
  }

  /**
   * Provide feedback on a query result.
   */
  scoreHighlight(
    highlightID: string,
    body: EvaluateScoreHighlightParams,
    options?: RequestOptions,
  ): APIPromise<EvaluateScoreHighlightResponse> {
    return this._client.post(path`/evaluate/highlight/${highlightID}`, { body, ...options });
  }

  /**
   * Provide feedback on a query result.
   */
  scoreQuery(
    queryID: string,
    body: EvaluateScoreQueryParams,
    options?: RequestOptions,
  ): APIPromise<EvaluateScoreQueryResponse> {
    return this._client.post(path`/evaluate/query/${queryID}`, { body, ...options });
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

export interface EvaluateScoreHighlightResponse {
  /**
   * A message describing the result.
   */
  message: string;

  /**
   * Whether the feedback was successfully saved.
   */
  success: boolean;
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

export interface EvaluateScoreHighlightParams {
  /**
   * Comment on the chunk
   */
  comment?: string | null;

  /**
   * Rating of the chunk from -1 (bad) to +1 (good).
   */
  score?: number;
}

export interface EvaluateScoreQueryParams {
  /**
   * Rating of the query result from -1 (bad) to +1 (good).
   */
  score?: number;
}

export declare namespace Evaluate {
  export {
    type Query as Query,
    type EvaluateScoreHighlightResponse as EvaluateScoreHighlightResponse,
    type EvaluateScoreQueryResponse as EvaluateScoreQueryResponse,
    type EvaluateScoreHighlightParams as EvaluateScoreHighlightParams,
    type EvaluateScoreQueryParams as EvaluateScoreQueryParams,
  };
}
