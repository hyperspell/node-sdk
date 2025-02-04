// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { CursorPage, type CursorPageParams } from '../pagination';

export class Collections extends APIResource {
  /**
   * This endpoint allows you to paginate through all documents in the index. You can
   * filter the documents by title, date, metadata, etc.
   */
  create(body: CollectionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Collection> {
    return this._client.post('/collections/add', { body, ...options });
  }

  /**
   * Lists all collections the user has access to.
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

  /**
   * Retrieves a collection by name.
   */
  get(name: string, options?: Core.RequestOptions): Core.APIPromise<Collection> {
    return this._client.get(`/collections/get/${name}`, options);
  }
}

export class CollectionListResponsesCursorPage extends CursorPage<CollectionListResponse> {}

export interface Collection {
  created_at: string;

  name: string;

  owner: string | null;
}

export interface CollectionListResponse {
  name: string;

  id?: number | null;

  created_at?: string;

  documents_count?: number | null;

  owner?: string | null;
}

export interface CollectionCreateParams {
  /**
   * The name of the collection.
   */
  name: string;

  /**
   * The owner of the collection. If the request is made using a user token, this
   * will be set to the user ID.
   */
  owner?: string | null;
}

export interface CollectionListParams extends CursorPageParams {}

Collections.CollectionListResponsesCursorPage = CollectionListResponsesCursorPage;

export declare namespace Collections {
  export {
    type Collection as Collection,
    type CollectionListResponse as CollectionListResponse,
    CollectionListResponsesCursorPage as CollectionListResponsesCursorPage,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionListParams as CollectionListParams,
  };
}
