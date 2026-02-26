// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Memories extends APIResource {
  /**
   * Updates an existing document in the index. You can update the text, collection,
   * title, and metadata. The document must already exist or a 404 will be returned.
   * This works for documents from any source (vault, slack, gmail, etc.).
   *
   * To remove a collection, set it to null explicitly.
   *
   * @example
   * ```ts
   * const memoryStatus = await client.memories.update(
   *   'resource_id',
   *   { source: 'reddit' },
   * );
   * ```
   */
  update(resourceID: string, params: MemoryUpdateParams, options?: RequestOptions): APIPromise<MemoryStatus> {
    const { source, ...body } = params;
    return this._client.post(path`/memories/update/${source}/${resourceID}`, { body, ...options });
  }

  /**
   * This endpoint allows you to paginate through all documents in the index. You can
   * filter the documents by title, date, metadata, etc.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const memoryListResponse of client.memories.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MemoryListResponsesCursorPage, MemoryListResponse> {
    return this._client.getAPIList('/memories/list', CursorPage<MemoryListResponse>, { query, ...options });
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
   * const memory = await client.memories.delete('resource_id', {
   *   source: 'reddit',
   * });
   * ```
   */
  delete(
    resourceID: string,
    params: MemoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MemoryDeleteResponse> {
    const { source } = params;
    return this._client.delete(path`/memories/delete/${source}/${resourceID}`, options);
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
  add(body: MemoryAddParams, options?: RequestOptions): APIPromise<MemoryStatus> {
    return this._client.post('/memories/add', { body, ...options });
  }

  /**
   * Adds multiple documents to the index in a single request.
   *
   * All items are validated before any database operations occur. If any item fails
   * validation, the entire batch is rejected with a 422 error detailing which items
   * failed and why.
   *
   * Maximum 100 items per request. Each item follows the same schema as the
   * single-item /memories/add endpoint.
   *
   * @example
   * ```ts
   * const response = await client.memories.addBulk({
   *   items: [{ text: '...' }],
   * });
   * ```
   */
  addBulk(body: MemoryAddBulkParams, options?: RequestOptions): APIPromise<MemoryAddBulkResponse> {
    return this._client.post('/memories/add/bulk', { body, ...options });
  }

  /**
   * Retrieves a document by provider and resource_id.
   *
   * @example
   * ```ts
   * const memory = await client.memories.get('resource_id', {
   *   source: 'reddit',
   * });
   * ```
   */
  get(resourceID: string, params: MemoryGetParams, options?: RequestOptions): APIPromise<Memory> {
    const { source } = params;
    return this._client.get(path`/memories/get/${source}/${resourceID}`, options);
  }

  /**
   * Retrieves documents matching the query.
   *
   * @example
   * ```ts
   * const queryResult = await client.memories.search({
   *   query: 'query',
   * });
   * ```
   */
  search(body: MemorySearchParams, options?: RequestOptions): APIPromise<Shared.QueryResult> {
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
  status(options?: RequestOptions): APIPromise<MemoryStatusResponse> {
    return this._client.get('/memories/status', options);
  }

  /**
   * This endpoint will upload a file to the index and return a resource_id. The file
   * will be processed in the background and the memory will be available for
   * querying once the processing is complete. You can use the `resource_id` to query
   * the memory later, and check the status of the memory.
   *
   * @example
   * ```ts
   * const memoryStatus = await client.memories.upload({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  upload(body: MemoryUploadParams, options?: RequestOptions): APIPromise<MemoryStatus> {
    return this._client.post(
      '/memories/upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type MemoryListResponsesCursorPage = CursorPage<MemoryListResponse>;

/**
 * Response model for the GET /memories/get endpoint.
 */
export interface Memory {
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

  /**
   * The type of document (e.g. Document, Website, Email)
   */
  type: string;

  /**
   * The structured content of the document
   */
  data?: Array<unknown> | null;

  /**
   * Summaries of all memories extracted from this document
   */
  memories?: Array<string>;

  metadata?: Shared.Metadata;

  title?: string | null;

  [k: string]: unknown;
}

export interface MemoryStatus {
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

export interface MemoryListResponse {
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

  metadata?: Shared.Metadata;

  /**
   * The relevance of the resource to the query
   */
  score?: number | null;

  title?: string | null;
}

export interface MemoryDeleteResponse {
  chunks_deleted: number;

  message: string;

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

  success: boolean;
}

/**
 * Response schema for successful bulk ingestion.
 */
export interface MemoryAddBulkResponse {
  /**
   * Number of items successfully processed
   */
  count: number;

  /**
   * Status of each ingested item
   */
  items: Array<MemoryStatus>;

  success?: boolean;
}

export interface MemoryStatusResponse {
  providers: { [key: string]: { [key: string]: number } };

  total: { [key: string]: number };
}

export interface MemoryUpdateParams {
  /**
   * Path param
   */
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

  /**
   * @deprecated Body param: The collection to move the document to — deprecated, set
   * the collection using metadata instead.
   */
  collection?: string | unknown | null;

  /**
   * Body param: Custom metadata for filtering. Keys must be alphanumeric with
   * underscores, max 64 chars. Values must be string, number, boolean, or null. Will
   * be merged with existing metadata.
   */
  metadata?: { [key: string]: string | number | boolean | null } | unknown | null;

  /**
   * Body param: Full text of the document. If provided, the document will be
   * re-indexed.
   */
  text?: string | unknown | null;

  /**
   * Body param: Title of the document.
   */
  title?: string | unknown | null;
}

export interface MemoryListParams extends CursorPageParams {
  /**
   * Filter documents by collection.
   */
  collection?: string | null;

  /**
   * Filter documents by metadata using MongoDB-style operators. Example:
   * {"department": "engineering", "priority": {"$gt": 3}}
   */
  filter?: string | null;

  /**
   * Filter documents by source.
   */
  source?:
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
    | 'trace'
    | null;

  /**
   * Filter documents by status.
   */
  status?: 'pending' | 'processing' | 'completed' | 'failed' | null;
}

export interface MemoryDeleteParams {
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
}

export interface MemoryAddParams {
  /**
   * Full text of the document.
   */
  text: string;

  /**
   * @deprecated The collection to add the document to — deprecated, set the
   * collection using metadata instead.
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
   * Custom metadata for filtering. Keys must be alphanumeric with underscores, max
   * 64 chars. Values must be string, number, boolean, or null.
   */
  metadata?: { [key: string]: string | number | boolean | null } | null;

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

export interface MemoryAddBulkParams {
  /**
   * List of memories to ingest. Maximum 100 items.
   */
  items: Array<MemoryAddBulkParams.Item>;
}

export namespace MemoryAddBulkParams {
  export interface Item {
    /**
     * Full text of the document.
     */
    text: string;

    /**
     * @deprecated The collection to add the document to — deprecated, set the
     * collection using metadata instead.
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
     * Custom metadata for filtering. Keys must be alphanumeric with underscores, max
     * 64 chars. Values must be string, number, boolean, or null.
     */
    metadata?: { [key: string]: string | number | boolean | null } | null;

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
}

export interface MemoryGetParams {
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
    | 'trace'
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
     * Metadata filters using MongoDB-style operators. Example: {'status': 'published',
     * 'priority': {'$gt': 3}}
     */
    filter?: { [key: string]: unknown } | null;

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
     * Search options for vault
     */
    vault?: Options.Vault;

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
       * List of Slack channels to include (by id, name, or #name).
       */
      channels?: Array<string>;

      /**
       * If set, pass 'exclude_archived' to Slack. If None, omit the param.
       */
      exclude_archived?: boolean | null;

      /**
       * Include direct messages (im) when listing conversations.
       */
      include_dms?: boolean;

      /**
       * Include group DMs (mpim) when listing conversations.
       */
      include_group_dms?: boolean;

      /**
       * Include private channels when constructing Slack 'types'. Defaults to False to
       * preserve existing cassette query params.
       */
      include_private?: boolean;

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
    export interface Vault {
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
       * Maximum depth to crawl from the starting URL
       */
      max_depth?: number;

      /**
       * The URL to crawl
       */
      url?: string | null;

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
  file: Uploadable;

  /**
   * @deprecated The collection to add the document to — deprecated, set the
   * collection using metadata instead.
   */
  collection?: string | null;

  /**
   * Custom metadata as JSON string for filtering. Keys must be alphanumeric with
   * underscores, max 64 chars. Values must be string, number, or boolean.
   */
  metadata?: string | null;
}

export declare namespace Memories {
  export {
    type Memory as Memory,
    type MemoryStatus as MemoryStatus,
    type MemoryListResponse as MemoryListResponse,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryAddBulkResponse as MemoryAddBulkResponse,
    type MemoryStatusResponse as MemoryStatusResponse,
    type MemoryListResponsesCursorPage as MemoryListResponsesCursorPage,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
    type MemoryDeleteParams as MemoryDeleteParams,
    type MemoryAddParams as MemoryAddParams,
    type MemoryAddBulkParams as MemoryAddBulkParams,
    type MemoryGetParams as MemoryGetParams,
    type MemorySearchParams as MemorySearchParams,
    type MemoryUploadParams as MemoryUploadParams,
  };
}
