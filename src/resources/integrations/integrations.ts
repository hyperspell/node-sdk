// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebCrawlerAPI from './web-crawler';
import { WebCrawler, WebCrawlerIndexParams, WebCrawlerIndexResponse } from './web-crawler';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Integrations extends APIResource {
  webCrawler: WebCrawlerAPI.WebCrawler = new WebCrawlerAPI.WebCrawler(this._client);

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
     * Whether this integration only supports write actions (no sync)
     */
    actions_only?: boolean;

    /**
     * Whether indexing waits until the user selects at least one channel.
     */
    channel_selection_required?: boolean;

    /**
     * Whether this app already has a scope='app' (service-account/bot) connection for
     * this integration. Informational only: a shared connection no longer blocks
     * personal OAuth — shared and personal connections can coexist.
     */
    connected_via_service_account?: boolean;

    /**
     * Whether a new personal connection waits for the user to select at least one
     * folder before indexing begins. Shared service-account connections are exempt.
     */
    folder_selection_required?: boolean;

    /**
     * Whether private channels are included by default when no explicit channel
     * selection is provided.
     */
    private_channels_included?: boolean;

    /**
     * Whether public channels are included by default when no explicit channel
     * selection is provided.
     */
    public_channels_included?: boolean;

    /**
     * Whether the user must select channels before indexing starts
     */
    requires_channel_selection?: boolean;

    /**
     * Whether the integration allows users to choose specific channels to index.
     * Unless selection is required, an empty selection indexes all channels.
     */
    supports_channel_selection?: boolean;

    /**
     * Whether the integration supports listing folders and configuring per-folder sync
     * policies.
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
}
