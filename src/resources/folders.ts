// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Folders extends APIResource {
  /**
   * List one level of folders from the user's connected source.
   *
   * Returns folders decorated with their explicit folder policy (if any). Use
   * parent_id to drill into subfolders.
   */
  list(
    connectionID: string,
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListResponse> {
    return this._client.get(path`/connections/${connectionID}/folders`, { query, ...options });
  }

  /**
   * List all folder policies for a specific connection.
   */
  listPolicies(connectionID: string, options?: RequestOptions): APIPromise<FolderListPoliciesResponse> {
    return this._client.get(path`/connections/${connectionID}/folder-policies`, options);
  }

  /**
   * Create or update a folder policy for a specific connection.
   */
  setPolicies(
    connectionID: string,
    body: FolderSetPoliciesParams,
    options?: RequestOptions,
  ): APIPromise<FolderSetPoliciesResponse> {
    return this._client.post(path`/connections/${connectionID}/folder-policies`, { body, ...options });
  }

  /**
   * Delete a folder policy for a specific connection.
   */
  deletePolicy(
    policyID: string,
    params: FolderDeletePolicyParams,
    options?: RequestOptions,
  ): APIPromise<FolderDeletePolicyResponse> {
    const { connection_id } = params;
    return this._client.delete(path`/connections/${connection_id}/folder-policies/${policyID}`, options);
  }
}

export interface FolderListResponse {
  /**
   * Folders at this level
   */
  folders: Array<FolderListResponse.Folder>;
}

export namespace FolderListResponse {
  export interface Folder {
    /**
     * Whether this folder may have subfolders
     */
    has_children: boolean;

    /**
     * Display name of the folder
     */
    name: string;

    /**
     * Folder ID from the source provider
     */
    provider_folder_id: string;

    /**
     * Parent folder's provider ID
     */
    parent_folder_id?: string | null;

    /**
     * Explicit policy on this folder, or null if inheriting/default
     */
    policy?: Folder.Policy | null;
  }

  export namespace Folder {
    /**
     * Explicit policy on this folder, or null if inheriting/default
     */
    export interface Policy {
      /**
       * Policy UUID
       */
      id: string;

      /**
       * Sync mode set on this folder
       */
      sync_mode: 'sync' | 'skip' | 'manual';
    }
  }
}

export interface FolderDeletePolicyResponse {
  /**
   * Whether the deletion was successful
   */
  success: boolean;
}

export interface FolderListPoliciesResponse {
  /**
   * List of folder policies
   */
  policies: Array<FolderListPoliciesResponse.Policy>;
}

export namespace FolderListPoliciesResponse {
  export interface Policy {
    /**
     * Unique policy ID
     */
    id: string;

    /**
     * Folder ID from the source provider
     */
    provider_folder_id: string;

    /**
     * Sync mode for this folder
     */
    sync_mode: 'sync' | 'skip' | 'manual';

    /**
     * Connection ID (null for integration defaults)
     */
    connection_id?: string | null;

    /**
     * Display name of the folder
     */
    folder_name?: string | null;

    /**
     * Display path of the folder
     */
    folder_path?: string | null;

    /**
     * Parent folder's provider ID
     */
    parent_folder_id?: string | null;
  }
}

export interface FolderSetPoliciesResponse {
  /**
   * Unique policy ID
   */
  id: string;

  /**
   * Folder ID from the source provider
   */
  provider_folder_id: string;

  /**
   * Sync mode for this folder
   */
  sync_mode: 'sync' | 'skip' | 'manual';

  /**
   * Connection ID (null for integration defaults)
   */
  connection_id?: string | null;

  /**
   * Display name of the folder
   */
  folder_name?: string | null;

  /**
   * Display path of the folder
   */
  folder_path?: string | null;

  /**
   * Parent folder's provider ID
   */
  parent_folder_id?: string | null;
}

export interface FolderListParams {
  /**
   * Parent folder ID. Omit for root-level folders.
   */
  parent_id?: string | null;
}

export interface FolderSetPoliciesParams {
  /**
   * Folder ID from the source provider
   */
  provider_folder_id: string;

  /**
   * Sync mode for this folder
   */
  sync_mode: 'sync' | 'skip' | 'manual';

  /**
   * Display name of the folder
   */
  folder_name?: string | null;

  /**
   * Display path of the folder
   */
  folder_path?: string | null;

  /**
   * Parent folder's provider ID for inheritance resolution
   */
  parent_folder_id?: string | null;
}

export interface FolderDeletePolicyParams {
  connection_id: string;
}

export declare namespace Folders {
  export {
    type FolderListResponse as FolderListResponse,
    type FolderDeletePolicyResponse as FolderDeletePolicyResponse,
    type FolderListPoliciesResponse as FolderListPoliciesResponse,
    type FolderSetPoliciesResponse as FolderSetPoliciesResponse,
    type FolderListParams as FolderListParams,
    type FolderSetPoliciesParams as FolderSetPoliciesParams,
    type FolderDeletePolicyParams as FolderDeletePolicyParams,
  };
}
