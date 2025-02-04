// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

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
  list(query?: CollectionListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: CollectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/collections/list', { query, ...options });
  }

  /**
   * Retrieves a collection by name.
   */
  get(name: string, options?: Core.RequestOptions): Core.APIPromise<Collection> {
    return this._client.get(`/collections/get/${name}`, options);
  }
}

export interface Collection {
  created_at: string;

  name: string;

  owner: string | null;
}

export type CollectionListResponse = unknown;

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

export interface CollectionListParams {
  cursor?: string | null;

  size?: number;
}

export declare namespace Collections {
  export {
    type Collection as Collection,
    type CollectionListResponse as CollectionListResponse,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionListParams as CollectionListParams,
  };
}
