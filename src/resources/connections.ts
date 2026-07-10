// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Connections extends APIResource {
  /**
   * Revoke Hyperspell's access to a provider and delete this user's stored data.
   *
   * The external OAuth/Unified revoke and the (potentially large) data purge run in
   * a background Temporal workflow; this returns `202 Accepted` immediately. A heavy
   * provider — a Gmail account can carry hundreds of thousands of chunks — plus a
   * slow third-party revoke would otherwise outrun the request timeout: the old
   * synchronous path "timed out" for the caller while still finishing server-side,
   * making the outcome invisible. Idempotent per (app, user, provider).
   */
  revoke(connectionID: string, options?: RequestOptions): APIPromise<ConnectionRevokeResponse> {
    return this._client.delete(path`/connections/${connectionID}/revoke`, options);
  }

  /**
   * List all connections for the user.
   */
  list(options?: RequestOptions): APIPromise<ConnectionListResponse> {
    return this._client.get('/connections/list', options);
  }
}

export interface ConnectionListResponse {
  connections: Array<ConnectionListResponse.Connection>;
}

export namespace ConnectionListResponse {
  export interface Connection {
    /**
     * The connection's id
     */
    id: string;

    /**
     * The connection's integration id
     */
    integration_id: string;

    /**
     * The connection's label
     */
    label: string | null;

    /**
     * The connection's provider
     */
    provider:
      | 'reddit'
      | 'notion'
      | 'slack'
      | 'google_calendar'
      | 'google_mail'
      | 'box'
      | 'dropbox'
      | 'github'
      | 'google_drive'
      | 'vault'
      | 'web_crawler'
      | 'trace'
      | 'microsoft_teams'
      | 'gmail_actions'
      | 'granola'
      | 'fathom'
      | 'fireflies'
      | 'linear'
      | 'hubspot'
      | 'salesforce'
      | 'coda'
      | 'lightfield'
      | 'gong'
      | 'pylon'
      | 'clickup';

    /**
     * Count of items in user_options.channels (Teams: workspaces selected; 0 means
     * nothing is being indexed for integrations that require selection).
     */
    selected_count?: number;
  }
}

export interface ConnectionRevokeResponse {
  message: string;

  success: boolean;
}

export declare namespace Connections {
  export {
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionRevokeResponse as ConnectionRevokeResponse,
  };
}
