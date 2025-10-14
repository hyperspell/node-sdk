// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

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
  index(query: WebCrawlerIndexParams, options?: RequestOptions): APIPromise<WebCrawlerIndexResponse> {
    return this._client.get('/integrations/web_crawler/index', { query, ...options });
  }
}

/**
 * Sentinel object to indicate that a search option is not set
 */
export type NotGiven = unknown;

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
  /**
   * The base URL of the website to crawl
   */
  url: string;

  /**
   * Maximum number of pages to crawl in total
   */
  limit?: number;

  /**
   * Maximum depth of links to follow during crawling
   */
  max_depth?: number;
}

export declare namespace WebCrawler {
  export {
    type NotGiven as NotGiven,
    type WebCrawlerIndexResponse as WebCrawlerIndexResponse,
    type WebCrawlerIndexParams as WebCrawlerIndexParams,
  };
}
