// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Connections extends APIResource {
  /**
   * List all connections for the user.
   */
  list(options?: RequestOptions): APIPromise<ConnectionListResponse> {
    return this._client.get('/connections/list', options);
  }

  /**
   * Revokes Hyperspell's access the given provider and deletes all stored
   * credentials and indexed data.
   */
  revoke(connectionID: string, options?: RequestOptions): APIPromise<ConnectionRevokeResponse> {
    return this._client.delete(path`/connections/${connectionID}/revoke`, options);
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
      | 'google_drive'
      | 'vault'
      | 'web_crawler'
      | 'trace';
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
