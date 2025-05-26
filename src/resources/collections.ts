// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { CursorPage, type CursorPageParams } from '../pagination';

export class Collections extends APIResource {
  /**
   * This endpoint lists all collections, and how many documents are in each
   * collection. All documents that do not have a collection assigned are in the
   * `null` collection.
   */
  list(
    query?: CollectionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CollectionListResponsesCursorPage, CollectionListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CollectionListResponsesCursorPage, CollectionListResponse>;
  list(
    query: CollectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CollectionListResponsesCursorPage, CollectionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/collections/list', CollectionListResponsesCursorPage, {
      query,
      ...options,
    });
  }
}

export class CollectionListResponsesCursorPage extends CursorPage<CollectionListResponse> {}

export interface CollectionListResponse {
  collection: string | null;

  document_count: number;
}

export interface CollectionListParams extends CursorPageParams {}

Collections.CollectionListResponsesCursorPage = CollectionListResponsesCursorPage;

export declare namespace Collections {
  export {
    type CollectionListResponse as CollectionListResponse,
    CollectionListResponsesCursorPage as CollectionListResponsesCursorPage,
    type CollectionListParams as CollectionListParams,
  };
}
