// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Query extends APIResource {
  /**
   * Retrieves documents matching the query.
   */
  search(body: QuerySearchParams, options?: Core.RequestOptions): Core.APIPromise<QuerySearchResponse> {
    return this._client.post('/query', { body, ...options });
  }
}

export interface QuerySearchResponse {
  documents: Array<QuerySearchResponse.Document>;

  /**
   * The answer to the query, if the request was set to answer.
   */
  answer?: string | null;

  /**
   * Errors that occurred during the query. These are meant to help the developer
   * debug the query, and are not meant to be shown to the user.
   */
  errors?: Array<Record<string, string>> | null;
}

export namespace QuerySearchResponse {
  export interface Document {
    resource_id: string;

    source:
      | 'collections'
      | 'notion'
      | 'slack'
      | 'hubspot'
      | 'google_calendar'
      | 'reddit'
      | 'web_crawler'
      | 'box';

    metadata?: Document.Metadata;

    /**
     * The relevance of the resource to the query
     */
    score?: number | null;
  }

  export namespace Document {
    export interface Metadata {
      created_at?: string | null;

      last_modified?: string | null;

      url?: string | null;

      [k: string]: unknown;
    }
  }
}

export interface QuerySearchParams {
  /**
   * Query to run.
   */
  query: string;

  /**
   * If true, the query will be answered along with matching source documents.
   */
  answer?: boolean;

  /**
   * @deprecated DEPRECATED: Use options instead. This field will be removed in a
   * future version.
   */
  filter?: QuerySearchParams.Filter | null;

  /**
   * Maximum number of results to return.
   */
  max_results?: number;

  /**
   * Search options for the query.
   */
  options?: QuerySearchParams.Options;

  /**
   * Only query documents from these sources.
   */
  sources?: Array<
    'collections' | 'notion' | 'slack' | 'hubspot' | 'google_calendar' | 'reddit' | 'web_crawler' | 'box'
  >;
}

export namespace QuerySearchParams {
  /**
   * @deprecated DEPRECATED: Use options instead. This field will be removed in a
   * future version.
   */
  export interface Filter {
    /**
     * Only query documents created on or after this date.
     */
    after?: string | null;

    /**
     * Only query documents created before this date.
     */
    before?: string | null;

    /**
     * Search options for Box
     */
    box?: unknown;

    /**
     * Search options for Collections
     */
    collections?: Filter.Collections;

    /**
     * Search options for Google Calendar
     */
    google_calendar?: Filter.GoogleCalendar;

    /**
     * Search options for Notion
     */
    notion?: Filter.Notion;

    /**
     * Search options for Reddit
     */
    reddit?: Filter.Reddit;

    /**
     * Search options for Slack
     */
    slack?: Filter.Slack;

    /**
     * Search options for Web Crawler
     */
    web_crawler?: Filter.WebCrawler;
  }

  export namespace Filter {
    /**
     * Search options for Collections
     */
    export interface Collections {
      /**
       * List of collections to search. If not provided, only the user's default
       * collection will be searched.
       */
      collections?: Array<string> | null;
    }

    /**
     * Search options for Google Calendar
     */
    export interface GoogleCalendar {
      /**
       * The ID of the calendar to search. If not provided, it will use the ID of the
       * default calendar. You can get the list of calendars with the
       * `/integrations/google_calendar/list` endpoint.
       */
      calendar_id?: string | null;
    }

    /**
     * Search options for Notion
     */
    export interface Notion {
      /**
       * List of Notion page IDs to search. If not provided, all pages in the workspace
       * will be searched.
       */
      notion_page_ids?: Array<string>;
    }

    /**
     * Search options for Reddit
     */
    export interface Reddit {
      /**
       * The time period to search. Defaults to 'month'.
       */
      period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';

      /**
       * The sort order of the posts. Defaults to 'relevance'.
       */
      sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments';

      /**
       * The subreddit to search. If not provided, the query will be searched for in all
       * subreddits.
       */
      subreddit?: string | null;
    }

    /**
     * Search options for Slack
     */
    export interface Slack {
      /**
       * List of Slack channels to search. If not provided, all channels in the workspace
       * will be searched.
       */
      channels?: Array<string>;
    }

    /**
     * Search options for Web Crawler
     */
    export interface WebCrawler {
      /**
       * Maximum depth to crawl from the starting URL
       */
      max_depth?: number;

      /**
       * The URL to crawl
       */
      url?: string | unknown;
    }
  }

  /**
   * Search options for the query.
   */
  export interface Options {
    /**
     * Only query documents created on or after this date.
     */
    after?: string | null;

    /**
     * Only query documents created before this date.
     */
    before?: string | null;

    /**
     * Search options for Box
     */
    box?: unknown;

    /**
     * Search options for Collections
     */
    collections?: Options.Collections;

    /**
     * Search options for Google Calendar
     */
    google_calendar?: Options.GoogleCalendar;

    /**
     * Search options for Notion
     */
    notion?: Options.Notion;

    /**
     * Search options for Reddit
     */
    reddit?: Options.Reddit;

    /**
     * Search options for Slack
     */
    slack?: Options.Slack;

    /**
     * Search options for Web Crawler
     */
    web_crawler?: Options.WebCrawler;
  }

  export namespace Options {
    /**
     * Search options for Collections
     */
    export interface Collections {
      /**
       * List of collections to search. If not provided, only the user's default
       * collection will be searched.
       */
      collections?: Array<string> | null;
    }

    /**
     * Search options for Google Calendar
     */
    export interface GoogleCalendar {
      /**
       * The ID of the calendar to search. If not provided, it will use the ID of the
       * default calendar. You can get the list of calendars with the
       * `/integrations/google_calendar/list` endpoint.
       */
      calendar_id?: string | null;
    }

    /**
     * Search options for Notion
     */
    export interface Notion {
      /**
       * List of Notion page IDs to search. If not provided, all pages in the workspace
       * will be searched.
       */
      notion_page_ids?: Array<string>;
    }

    /**
     * Search options for Reddit
     */
    export interface Reddit {
      /**
       * The time period to search. Defaults to 'month'.
       */
      period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';

      /**
       * The sort order of the posts. Defaults to 'relevance'.
       */
      sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments';

      /**
       * The subreddit to search. If not provided, the query will be searched for in all
       * subreddits.
       */
      subreddit?: string | null;
    }

    /**
     * Search options for Slack
     */
    export interface Slack {
      /**
       * List of Slack channels to search. If not provided, all channels in the workspace
       * will be searched.
       */
      channels?: Array<string>;
    }

    /**
     * Search options for Web Crawler
     */
    export interface WebCrawler {
      /**
       * Maximum depth to crawl from the starting URL
       */
      max_depth?: number;

      /**
       * The URL to crawl
       */
      url?: string | unknown;
    }
  }
}

export declare namespace Query {
  export { type QuerySearchResponse as QuerySearchResponse, type QuerySearchParams as QuerySearchParams };
}
