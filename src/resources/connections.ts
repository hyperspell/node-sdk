// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Connections extends APIResource {
  /**
   * Revoke Hyperspell's access to a provider and delete this user's stored data.
   *
   * Revocation and deletion are processed asynchronously, so the endpoint returns
   * `202 Accepted` immediately. Repeated requests for the same app, user, and
   * provider are safe.
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
      | 'imap'
      | 'google_meet'
      | 'box'
      | 'dropbox'
      | 'github'
      | 'gitlab'
      | 'google_drive'
      | 'vault'
      | 'web_crawler'
      | 'trace'
      | 'microsoft_outlook'
      | 'microsoft_teams'
      | 'granola'
      | 'fathom'
      | 'fireflies'
      | 'figma'
      | 'linear'
      | 'hubspot'
      | 'salesforce'
      | 'coda'
      | 'confluence'
      | 'jira'
      | 'metabase'
      | 'gong'
      | 'clickup'
      | 'lightfield'
      | 'pylon'
      | 'fellow'
      | 'odoo'
      | 'external_mcp';

    /**
     * State of the historical backfill for providers that deliver history
     * asynchronously: 'backfilling' while history is still streaming in, 'quiesced'
     * once no backfill batch has arrived for a while (drained or stalled), 'completed'
     * if the provider confirmed completion, and 'unknown' when the provider has not
     * reported a backfill state.
     */
    backfill_state?: 'backfilling' | 'quiesced' | 'completed' | 'unknown';

    /**
     * 'user' for a personal connection; 'app' for an org-wide (app-level) connection
     * installed once by an app admin and shared with every user of the app.
     */
    scope?: 'user' | 'app';

    /**
     * Number of items selected for this connection. For integrations that require
     * selection, 0 means nothing is being indexed.
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
