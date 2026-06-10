// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Evaluate extends APIResource {
  /**
   * Retrieve the result of a previous query.
   */
  getQuery(queryID: string, options?: RequestOptions): APIPromise<Shared.QueryResult> {
    return this._client.get(path`/evaluate/query/${queryID}`, options);
  }

  /**
   * Paginate through all prior queries for the app, newest first.
   *
   * User tokens only see their own queries; admin tokens see every query in the app
   * and can narrow to a single user with the `user_id` filter.
   */
  queries(
    query: EvaluateQueriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvaluateQueriesResponse> {
    return this._client.get('/evaluate/queries', { query, ...options });
  }

  /**
   * Score an individual highlight.
   */
  scoreHighlight(
    highlightID: string,
    body: EvaluateScoreHighlightParams,
    options?: RequestOptions,
  ): APIPromise<EvaluateScoreHighlightResponse> {
    return this._client.post(path`/evaluate/highlight/${highlightID}`, { body, ...options });
  }

  /**
   * Score the result of a query.
   */
  scoreQuery(
    queryID: string,
    body: EvaluateScoreQueryParams,
    options?: RequestOptions,
  ): APIPromise<EvaluateScoreQueryResponse> {
    return this._client.post(path`/evaluate/query/${queryID}`, { body, ...options });
  }
}

export interface EvaluateQueriesResponse {
  items: Array<EvaluateQueriesResponse.Item>;

  next_cursor: string | null;
}

export namespace EvaluateQueriesResponse {
  export interface Item {
    /**
     * The query string that was issued.
     */
    query: string;

    /**
     * The ID of the query.
     */
    query_id: string;

    /**
     * When the query was issued.
     */
    time: string;

    /**
     * The ID of the user that issued the query, if any.
     */
    user_id?: string | null;
  }
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

export interface EvaluateQueriesParams {
  cursor?: string | null;

  size?: number;

  /**
   * Filter queries by the user that issued them.
   */
  user_id?: string | null;
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
    type EvaluateQueriesResponse as EvaluateQueriesResponse,
    type EvaluateScoreHighlightResponse as EvaluateScoreHighlightResponse,
    type EvaluateScoreQueryResponse as EvaluateScoreQueryResponse,
    type EvaluateQueriesParams as EvaluateQueriesParams,
    type EvaluateScoreHighlightParams as EvaluateScoreHighlightParams,
    type EvaluateScoreQueryParams as EvaluateScoreQueryParams,
  };
}
