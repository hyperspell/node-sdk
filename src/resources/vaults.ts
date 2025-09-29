// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Vaults extends APIResource {
  /**
   * This endpoint lists all collections, and how many documents are in each
   * collection. All documents that do not have a collection assigned are in the
   * `null` collection.
   */
  list(
    query: VaultListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VaultListResponsesCursorPage, VaultListResponse> {
    return this._client.getAPIList('/vault/list', CursorPage<VaultListResponse>, { query, ...options });
  }
}

export type VaultListResponsesCursorPage = CursorPage<VaultListResponse>;

export interface VaultListResponse {
  collection: string | null;

  document_count: number;
}

export interface VaultListParams extends CursorPageParams {}

export declare namespace Vaults {
  export {
    type VaultListResponse as VaultListResponse,
    type VaultListResponsesCursorPage as VaultListResponsesCursorPage,
    type VaultListParams as VaultListParams,
  };
}
