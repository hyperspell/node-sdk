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

export interface WebCrawlerIndexResponse {
  resource_id: string;

  source:
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
    type WebCrawlerIndexResponse as WebCrawlerIndexResponse,
    type WebCrawlerIndexParams as WebCrawlerIndexParams,
  };
}
