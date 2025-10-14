// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GoogleCalendarAPI from './google-calendar';
import { Calendar, GoogleCalendar } from './google-calendar';
import * as SlackAPI from './slack';
import { Slack, SlackListParams, SlackListResponse } from './slack';
import * as WebCrawlerAPI from './web-crawler';
import { WebCrawler, WebCrawlerIndexParams, WebCrawlerIndexResponse } from './web-crawler';

export class Integrations extends APIResource {
  googleCalendar: GoogleCalendarAPI.GoogleCalendar = new GoogleCalendarAPI.GoogleCalendar(this._client);
  webCrawler: WebCrawlerAPI.WebCrawler = new WebCrawlerAPI.WebCrawler(this._client);
  slack: SlackAPI.Slack = new SlackAPI.Slack(this._client);
}

Integrations.GoogleCalendar = GoogleCalendar;
Integrations.WebCrawler = WebCrawler;
Integrations.Slack = Slack;

export declare namespace Integrations {
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
