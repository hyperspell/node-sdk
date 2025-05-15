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
    | 'notion'
    | 'slack'
    | 'hubspot'
    | 'google_calendar'
    | 'reddit'
    | 'web_crawler'
    | 'box'
    | 'google_drive';

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
