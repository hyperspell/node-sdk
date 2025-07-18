// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { CursorPage, type CursorPageParams } from '../pagination';

export class Vaults extends APIResource {
  /**
   * This endpoint lists all collections, and how many documents are in each
   * collection. All documents that do not have a collection assigned are in the
   * `null` collection.
   */
  list(
    query?: VaultListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VaultListResponsesCursorPage, VaultListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<VaultListResponsesCursorPage, VaultListResponse>;
  list(
    query: VaultListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<VaultListResponsesCursorPage, VaultListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/vault/list', VaultListResponsesCursorPage, { query, ...options });
  }
}

export class VaultListResponsesCursorPage extends CursorPage<VaultListResponse> {}

export interface VaultListResponse {
  collection: string | null;

  document_count: number;
}

export interface VaultListParams extends CursorPageParams {}

Vaults.VaultListResponsesCursorPage = VaultListResponsesCursorPage;

export declare namespace Vaults {
  export {
    type VaultListResponse as VaultListResponse,
    VaultListResponsesCursorPage as VaultListResponsesCursorPage,
    type VaultListParams as VaultListParams,
  };
}
