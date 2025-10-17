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
     * The connection's label
     */
    label: string | null;

    /**
     * The connection's provider
     */
    provider:
      | 'collections'
      | 'vault'
      | 'web_crawler'
      | 'notion'
      | 'slack'
      | 'google_calendar'
      | 'reddit'
      | 'box'
      | 'google_drive'
      | 'airtable'
      | 'algolia'
      | 'amplitude'
      | 'asana'
      | 'ashby'
      | 'bamboohr'
      | 'basecamp'
      | 'bubbles'
      | 'calendly'
      | 'confluence'
      | 'clickup'
      | 'datadog'
      | 'deel'
      | 'discord'
      | 'dropbox'
      | 'exa'
      | 'facebook'
      | 'front'
      | 'github'
      | 'gitlab'
      | 'google_docs'
      | 'google_mail'
      | 'google_sheet'
      | 'hubspot'
      | 'jira'
      | 'linear'
      | 'microsoft_teams'
      | 'mixpanel'
      | 'monday'
      | 'outlook'
      | 'perplexity'
      | 'rippling'
      | 'salesforce'
      | 'segment'
      | 'todoist'
      | 'twitter'
      | 'zoom';
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
