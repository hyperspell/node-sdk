// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SlackAPI from './slack';
import { Slack } from './slack';
import * as WebCrawlerAPI from './web-crawler';
import { WebCrawler, WebCrawlerIndexParams, WebCrawlerIndexResponse } from './web-crawler';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Integrations extends APIResource {
  webCrawler: WebCrawlerAPI.WebCrawler = new WebCrawlerAPI.WebCrawler(this._client);
  slack: SlackAPI.Slack = new SlackAPI.Slack(this._client);

  /**
   * List all integrations for the user.
   */
  list(options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get('/integrations/list', options);
  }

  /**
   * Redirects to the connect URL to link an integration.
   */
  connect(
    integrationID: string,
    query: IntegrationConnectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationConnectResponse> {
    return this._client.get(path`/integrations/${integrationID}/connect`, { query, ...options });
  }
}

export interface IntegrationListResponse {
  integrations: Array<IntegrationListResponse.Integration>;
}

export namespace IntegrationListResponse {
  export interface Integration {
    /**
     * The integration's id
     */
    id: string;

    /**
     * Whether the integration allows multiple connections
     */
    allow_multiple_connections: boolean;

    /**
     * The integration's auth provider
     */
    auth_provider: 'nango' | 'unified' | 'whitelabel';

    /**
     * URL to the integration's icon
     */
    icon: string | null;

    /**
     * The integration's display name
     */
    name: string;

    /**
     * The integration's provider
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
     * Whether this integration only supports write actions (no sync)
     */
    actions_only?: boolean;

    /**
     * Effective per-app requirement: True when an empty selection indexes NOTHING (the
     * user must pick channels). Combines the integration's requires_channel_selection
     * with the app's index_all_by_default config.
     */
    channel_selection_required?: boolean;

    /**
     * Effective per-app requirement: True when the integration's
     * require_folder_selection index option is on, i.e. new connections sync NOTHING
     * until the user picks folders.
     */
    folder_selection_required?: boolean;

    /**
     * Whether the user must select channels before indexing starts
     */
    requires_channel_selection?: boolean;

    /**
     * Whether the integration offers an optional channel picker to narrow indexing.
     * Empty selection indexes everything (opt-in narrowing).
     */
    supports_channel_selection?: boolean;

    /**
     * Whether the integration supports listing folders and per-folder sync policies
     * (GET /connections/{id}/folders + folder-policies). Drives the folder picker in
     * the connect flow.
     */
    supports_folder_selection?: boolean;
  }
}

export interface IntegrationConnectResponse {
  expires_at: string;

  url: string;
}

export interface IntegrationConnectParams {
  redirect_url?: string | null;
}

Integrations.WebCrawler = WebCrawler;
Integrations.Slack = Slack;

export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationConnectResponse as IntegrationConnectResponse,
    type IntegrationConnectParams as IntegrationConnectParams,
  };

  export {
    WebCrawler as WebCrawler,
    type WebCrawlerIndexResponse as WebCrawlerIndexResponse,
    type WebCrawlerIndexParams as WebCrawlerIndexParams,
  };

  export { Slack as Slack };
}
