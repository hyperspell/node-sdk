// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GoogleCalendarAPI from './google-calendar';
import { Calendar, GoogleCalendar } from './google-calendar';
import * as SlackAPI from './slack';
import { Slack, SlackListParams, SlackListResponse } from './slack';
import * as WebCrawlerAPI from './web-crawler';
import { WebCrawler, WebCrawlerIndexParams, WebCrawlerIndexResponse } from './web-crawler';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Integrations extends APIResource {
  googleCalendar: GoogleCalendarAPI.GoogleCalendar = new GoogleCalendarAPI.GoogleCalendar(this._client);
  webCrawler: WebCrawlerAPI.WebCrawler = new WebCrawlerAPI.WebCrawler(this._client);
  slack: SlackAPI.Slack = new SlackAPI.Slack(this._client);

  /**
   * List all integrations for the user.
   *
   * @example
   * ```ts
   * const integrations = await client.integrations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get('/integrations/list', options);
  }

  /**
   * Redirects to the connect URL to link an integration.
   *
   * @example
   * ```ts
   * const response = await client.integrations.connect(
   *   'integration_id',
   * );
   * ```
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
     * The integration's provider
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

export interface IntegrationConnectResponse {
  expires_at: string;

  url: string;
}

export interface IntegrationConnectParams {
  redirect_url?: string | null;
}

Integrations.GoogleCalendar = GoogleCalendar;
Integrations.WebCrawler = WebCrawler;
Integrations.Slack = Slack;

export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationConnectResponse as IntegrationConnectResponse,
    type IntegrationConnectParams as IntegrationConnectParams,
  };

  export { GoogleCalendar as GoogleCalendar, type Calendar as Calendar };

  export {
    WebCrawler as WebCrawler,
    type WebCrawlerIndexResponse as WebCrawlerIndexResponse,
    type WebCrawlerIndexParams as WebCrawlerIndexParams,
  };

  export {
    Slack as Slack,
    type SlackListResponse as SlackListResponse,
    type SlackListParams as SlackListParams,
  };
}
