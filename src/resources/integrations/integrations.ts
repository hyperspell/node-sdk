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
   * Revokes Hyperspell's access the given provider and deletes all stored
   * credentials and indexed data.
   *
   * @example
   * ```ts
   * const response = await client.integrations.revoke(
   *   'provider',
   * );
   * ```
   */
  revoke(provider: string, options?: RequestOptions): APIPromise<IntegrationRevokeResponse> {
    return this._client.get(path`/integrations/${provider}/revoke`, options);
  }
}

export interface IntegrationRevokeResponse {
  message: string;

  success: boolean;
}

Integrations.GoogleCalendar = GoogleCalendar;
Integrations.WebCrawler = WebCrawler;
Integrations.Slack = Slack;

export declare namespace Integrations {
  export { type IntegrationRevokeResponse as IntegrationRevokeResponse };

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
