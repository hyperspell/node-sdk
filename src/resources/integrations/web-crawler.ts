// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class WebCrawler extends APIResource {
  /**
   * Recursively crawl a website to make it available for indexed search.
   *
   * @example
   * ```ts
   * const response = await client.integrations.webCrawler.index(
   *   { url: 'url' },
   * );
   * ```
   */
  index(
    query: WebCrawlerIndexParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebCrawlerIndexResponse> {
    return this._client.get('/integrations/web_crawler/index', { query, ...options });
  }
}

export interface WebCrawlerIndexResponse {
  resource_id: string;

  source:
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

  status: 'pending' | 'processing' | 'completed' | 'failed';
}

export interface WebCrawlerIndexParams {
  url: string;
}

export declare namespace WebCrawler {
  export {
    type WebCrawlerIndexResponse as WebCrawlerIndexResponse,
    type WebCrawlerIndexParams as WebCrawlerIndexParams,
  };
}
