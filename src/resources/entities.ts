// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EntityCursorPage, type EntityCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Entities extends APIResource {
  /**
   * List entities available to the current app.
   *
   * Results can be filtered by type, status, name, and supporting-document count.
   * Use the returned cursor to retrieve the next page.
   */
  list(
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntityListResponsesEntityCursorPage, EntityListResponse> {
    return this._client.getAPIList('/entities', EntityCursorPage<EntityListResponse>, { query, ...options });
  }

  /**
   * Fetch a single entity belonging to the current app.
   *
   * Returns 404 when the entity does not exist or is not visible to the app.
   */
  get(entityID: string, options?: RequestOptions): APIPromise<EntityGetResponse> {
    return this._client.get(path`/entities/${entityID}`, options);
  }

  /**
   * Search the current app's entities by meaning.
   */
  search(body: EntitySearchParams, options?: RequestOptions): APIPromise<EntitySearchResponse> {
    return this._client.post('/entities/search', { body, ...options });
  }
}

export type EntityListResponsesEntityCursorPage = EntityCursorPage<EntityListResponse>;

export interface EntityListResponse {
  id: string;

  created_at: string;

  name: string;

  /**
   * How strongly the entity's current identity has been established.
   */
  status: 'provisional' | 'confirmed';

  type: string;

  updated_at: string;

  attributes?: { [key: string]: unknown };

  description?: string | null;

  hard_linked_mention_count?: number | null;

  prominence_calculated_at?: string | null;

  prominence_version?: string | null;

  record_count?: number | null;

  supporting_document_count?: number | null;

  supporting_scope_count?: number | null;
}

export interface EntityGetResponse {
  id: string;

  created_at: string;

  name: string;

  /**
   * How strongly the entity's current identity has been established.
   */
  status: 'provisional' | 'confirmed';

  type: string;

  updated_at: string;

  attributes?: { [key: string]: unknown };

  description?: string | null;

  hard_linked_mention_count?: number | null;

  prominence_calculated_at?: string | null;

  prominence_version?: string | null;

  record_count?: number | null;

  supporting_document_count?: number | null;

  supporting_scope_count?: number | null;
}

export interface EntitySearchResponse {
  items: Array<EntitySearchResponse.Item>;
}

export namespace EntitySearchResponse {
  export interface Item {
    id: string;

    created_at: string;

    name: string;

    similarity: number;

    /**
     * How strongly the entity's current identity has been established.
     */
    status: 'provisional' | 'confirmed';

    type: string;

    updated_at: string;

    attributes?: { [key: string]: unknown };

    description?: string | null;

    hard_linked_mention_count?: number | null;

    prominence_calculated_at?: string | null;

    prominence_version?: string | null;

    record_count?: number | null;

    supporting_document_count?: number | null;

    supporting_scope_count?: number | null;
  }
}

export interface EntityListParams extends EntityCursorPageParams {
  min_supporting_documents?: number | null;

  name_prefix?: string | null;

  search?: string | null;

  sort_by?: 'id' | 'name' | 'type' | 'prominence';

  sort_dir?: 'asc' | 'desc';

  /**
   * How strongly the entity's current identity has been established.
   */
  status?: 'provisional' | 'confirmed' | null;

  type?: string | null;
}

export interface EntitySearchParams {
  query: string;

  limit?: number;

  type?: string | null;
}

export declare namespace Entities {
  export {
    type EntityListResponse as EntityListResponse,
    type EntityGetResponse as EntityGetResponse,
    type EntitySearchResponse as EntitySearchResponse,
    type EntityListResponsesEntityCursorPage as EntityListResponsesEntityCursorPage,
    type EntityListParams as EntityListParams,
    type EntitySearchParams as EntitySearchParams,
  };
}
