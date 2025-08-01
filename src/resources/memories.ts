// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { CursorPage, type CursorPageParams } from '../pagination';

export class Memories extends APIResource {
  /**
   * This endpoint allows you to paginate through all documents in the index. You can
   * filter the documents by title, date, metadata, etc.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const memory of client.memories.list()) {
   *   // ...
   * }
   * ```
   */
  list(query?: MemoryListParams, options?: Core.RequestOptions): Core.PagePromise<MemoriesCursorPage, Memory>;
  list(options?: Core.RequestOptions): Core.PagePromise<MemoriesCursorPage, Memory>;
  list(
    query: MemoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MemoriesCursorPage, Memory> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/memories/list', MemoriesCursorPage, { query, ...options });
  }

  /**
   * Delete a memory and its associated chunks from the index.
   *
   * This removes the memory completely from the vector index and database. The
   * operation deletes:
   *
   * 1. All chunks associated with the resource (including embeddings)
   * 2. The resource record itself
   *
   * Args: source: The document provider (e.g., gmail, notion, vault) resource_id:
   * The unique identifier of the resource to delete api_token: Authentication token
   *
   * Returns: MemoryDeletionResponse with deletion details
   *
   * Raises: DocumentNotFound: If the resource doesn't exist or user doesn't have
   * access
   *
   * @example
   * ```ts
   * const memory = await client.memories.delete(
   *   'collections',
   *   'resource_id',
   * );
   * ```
   */
  delete(
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
      | 'zoom',
    resourceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemoryDeleteResponse> {
    return this._client.delete(`/memories/delete/${source}/${resourceId}`, options);
  }

  /**
   * Adds an arbitrary document to the index. This can be any text, email, call
   * transcript, etc. The document will be processed and made available for querying
   * once the processing is complete.
   *
   * @example
   * ```ts
   * const memoryStatus = await client.memories.add({
   *   text: 'text',
   * });
   * ```
   */
  add(body: MemoryAddParams, options?: Core.RequestOptions): Core.APIPromise<MemoryStatus> {
    return this._client.post('/memories/add', { body, ...options });
  }

  /**
   * Retrieves a document by provider and resource_id.
   *
   * @example
   * ```ts
   * const memory = await client.memories.get(
   *   'collections',
   *   'resource_id',
   * );
   * ```
   */
  get(
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
      | 'zoom',
    resourceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Memory> {
    return this._client.get(`/memories/get/${source}/${resourceId}`, options);
  }

  /**
   * Retrieves documents matching the query.
   *
   * @example
   * ```ts
   * const response = await client.memories.search({
   *   query: 'query',
   * });
   * ```
   */
  search(body: MemorySearchParams, options?: Core.RequestOptions): Core.APIPromise<MemorySearchResponse> {
    return this._client.post('/memories/query', { body, ...options });
  }

  /**
   * This endpoint shows the indexing progress of documents, both by provider and
   * total.
   *
   * @example
   * ```ts
   * const response = await client.memories.status();
   * ```
   */
  status(options?: Core.RequestOptions): Core.APIPromise<MemoryStatusResponse> {
    return this._client.get('/memories/status', options);
  }

  /**
   * This endpoint will upload a file to the index and return a document ID. The file
   * will be processed in the background and the document will be available for
   * querying once the processing is complete. You can use the `document_id` to query
   * the document later, and check the status of the document.
   *
   * @example
   * ```ts
   * const memoryStatus = await client.memories.upload({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  upload(body: MemoryUploadParams, options?: Core.RequestOptions): Core.APIPromise<MemoryStatus> {
    return this._client.post('/memories/upload', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export class MemoriesCursorPage extends CursorPage<Memory> {}

export interface Memory {
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

  metadata?: Memory.Metadata;

  /**
   * The relevance of the resource to the query
   */
  score?: number | null;
}

export namespace Memory {
  export interface Metadata {
    created_at?: string | null;

    events?: Array<Metadata.Event>;

    indexed_at?: string | null;

    last_modified?: string | null;

    status?: 'pending' | 'processing' | 'completed' | 'failed';

    url?: string | null;

    [k: string]: unknown;
  }

  export namespace Metadata {
    export interface Event {
      message: string;

      type: 'error' | 'warning' | 'info' | 'success';

      time?: string;
    }
  }
}

export interface MemoryStatus {
  /**
   * @deprecated Deprecated: refer to documents by source and resource_id instead
   */
  id: number;

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

export interface MemoryDeleteResponse {
  chunks_deleted: number;

  message: string;

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

  success: boolean;
}

export interface MemorySearchResponse {
  documents: Array<Memory>;

  /**
   * The answer to the query, if the request was set to answer.
   */
  answer?: string | null;

  /**
   * Errors that occurred during the query. These are meant to help the developer
   * debug the query, and are not meant to be shown to the user.
   */
  errors?: Array<{ [key: string]: string }> | null;
}

export interface MemoryStatusResponse {
  providers: { [key: string]: { [key: string]: number } };

  total: { [key: string]: number };
}

export interface MemoryListParams extends CursorPageParams {
  /**
   * Filter documents by collection.
   */
  collection?: string | null;

  /**
   * Filter documents by source.
   */
  source?:
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
    | 'zoom'
    | null;
}

export interface MemoryAddParams {
  /**
   * Full text of the document.
   */
  text: string;

  /**
   * The collection to add the document to for easier retrieval.
   */
  collection?: string | null;

  /**
   * Date of the document. Depending on the document, this could be the creation date
   * or date the document was last updated (eg. for a chat transcript, this would be
   * the date of the last message). This helps the ranking algorithm and allows you
   * to filter by date range.
   */
  date?: string;

  /**
   * The resource ID to add the document to. If not provided, a new resource ID will
   * be generated. If provided, the document will be updated if it already exists.
   */
  resource_id?: string;

  /**
   * Title of the document.
   */
  title?: string | null;
}

export interface MemorySearchParams {
  /**
   * Query to run.
   */
  query: string;

  /**
   * If true, the query will be answered along with matching source documents.
   */
  answer?: boolean;

  /**
   * @deprecated Maximum number of results to return.
   */
  max_results?: number;

  /**
   * Search options for the query.
   */
  options?: MemorySearchParams.Options;

  /**
   * Only query documents from these sources.
   */
  sources?: Array<
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
    | 'zoom'
  >;
}

export namespace MemorySearchParams {
  /**
   * Search options for the query.
   */
  export interface Options {
    /**
     * Only query documents created on or after this date.
     */
    after?: string | null;

    /**
     * Model to use for answer generation when answer=True
     */
    answer_model?: 'llama-3.1' | 'gemma2' | 'qwen-qwq' | 'mistral-saba' | 'llama-4-scout' | 'deepseek-r1';

    /**
     * Only query documents created before this date.
     */
    before?: string | null;

    /**
     * Search options for Box
     */
    box?: Options.Box;

    /**
     * Search options for vault
     */
    collections?: Options.Collections;

    /**
     * Search options for Google Calendar
     */
    google_calendar?: Options.GoogleCalendar;

    /**
     * Search options for Google Drive
     */
    google_drive?: Options.GoogleDrive;

    /**
     * Search options for Gmail
     */
    google_mail?: Options.GoogleMail;

    /**
     * Maximum number of results to return.
     */
    max_results?: number;

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
     * Search options for Box
     */
    export interface Box {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }

    /**
     * Search options for vault
     */
    export interface Collections {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }

    /**
     * Search options for Google Calendar
     */
    export interface GoogleCalendar {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

      /**
       * The ID of the calendar to search. If not provided, it will use the ID of the
       * default calendar. You can get the list of calendars with the
       * `/integrations/google_calendar/list` endpoint.
       */
      calendar_id?: string | null;

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }

    /**
     * Search options for Google Drive
     */
    export interface GoogleDrive {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }

    /**
     * Search options for Gmail
     */
    export interface GoogleMail {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

      /**
       * List of label IDs to filter messages (e.g., ['INBOX', 'SENT', 'DRAFT']).
       * Multiple labels are combined with OR logic - messages matching ANY specified
       * label will be returned. If empty, no label filtering is applied (searches all
       * accessible messages).
       */
      label_ids?: Array<string>;

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }

    /**
     * Search options for Notion
     */
    export interface Notion {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

      /**
       * List of Notion page IDs to search. If not provided, all pages in the workspace
       * will be searched.
       */
      notion_page_ids?: Array<string>;

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }

    /**
     * Search options for Reddit
     */
    export interface Reddit {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

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

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }

    /**
     * Search options for Slack
     */
    export interface Slack {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

      /**
       * List of Slack channels to search. If not provided, all channels in the workspace
       * will be searched.
       */
      channels?: Array<string>;

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }

    /**
     * Search options for Web Crawler
     */
    export interface WebCrawler {
      /**
       * Only query documents created on or after this date.
       */
      after?: string | null;

      /**
       * Only query documents created before this date.
       */
      before?: string | null;

      /**
       * Maximum depth to crawl from the starting URL
       */
      max_depth?: number;

      /**
       * The URL to crawl
       */
      url?: string | unknown;

      /**
       * Weight of results from this source. A weight greater than 1.0 means more results
       * from this source will be returned, a weight less than 1.0 means fewer results
       * will be returned. This will only affect results if multiple sources are queried
       * at the same time.
       */
      weight?: number;
    }
  }
}

export interface MemoryUploadParams {
  /**
   * The file to ingest.
   */
  file: Core.Uploadable;

  /**
   * The collection to add the document to.
   */
  collection?: string | null;
}

Memories.MemoriesCursorPage = MemoriesCursorPage;

export declare namespace Memories {
  export {
    type Memory as Memory,
    type MemoryStatus as MemoryStatus,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemorySearchResponse as MemorySearchResponse,
    type MemoryStatusResponse as MemoryStatusResponse,
    MemoriesCursorPage as MemoriesCursorPage,
    type MemoryListParams as MemoryListParams,
    type MemoryAddParams as MemoryAddParams,
    type MemorySearchParams as MemorySearchParams,
    type MemoryUploadParams as MemoryUploadParams,
  };
}
