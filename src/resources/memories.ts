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
   * Adds an arbitrary document to the index. This can be any text, email, call
   * transcript, etc. The document will be processed and made available for querying
   * once the processing is complete.
   *
   * @example
   * ```ts
   * const memoryStatus = await client.memories.add({
   *   text: '...',
   * });
   * ```
   */
  add(body: MemoryAddParams, options?: RequestOptions): APIPromise<MemoryStatus> {
    return this._client.post('/memories/add', { body, ...options });
  }

  /**
   * Adds multiple documents to the index in a single request.
   *
   * All items are validated before processing begins. If any item fails validation,
   * the entire batch is rejected with a 422 error detailing which items failed and
   * why.
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
   * Retrieve a document by provider and resource ID, including its full hyperdoc
   * tree.
   *
   * @example
   * ```ts
   * const memory = await client.memories.get('resource_id', {
   *   source: 'reddit',
   * });
   * ```
   */
  get(resourceID: string, params: MemoryGetParams, options?: RequestOptions): APIPromise<MemoryGetResponse> {
    const { source, ...query } = params;
    return this._client.get(path`/memories/get/${source}/${resourceID}`, { query, ...options });
  }

  /**
   * Retrieves documents matching the query.
   *
   * @example
   * ```ts
   * const queryResult = await client.memories.search({
   *   query: 'What does Hyperspell do?',
   * });
   * ```
   */
  search(body: MemorySearchParams, options?: RequestOptions): APIPromise<Shared.QueryResult> {
    return this._client.post('/memories/query', { body, ...options });
  }

  /**
   * Delete a memory accessible to the authenticated credential.
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
}

export type MemoryListResponsesCursorPage = CursorPage<MemoryListResponse>;

export interface MemoryStatus {
  resource_id: string;

  source:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp';

  status:
    | 'pending'
    | 'processing'
    | 'completed'
    | 'failed'
    | 'pending_review'
    | 'skipped'
    | 'filtered'
    | 'cancelled';
}

/**
 * A document-shaped API response containing the hyperdoc tree.
 */
export interface MemoryListResponse {
  /**
   * The full hyperdoc tree. Switch on `type` for the document frame and recurse
   * through `children` for the body.
   */
  document:
    | Shared.Document
    | Shared.Website
    | Shared.Task
    | Shared.Person
    | Shared.Message
    | Shared.Event
    | Shared.File
    | Shared.Conversation
    | Shared.Trace
    | Shared.Transcript
    | Shared.Company
    | Shared.Deal
    | MemoryListResponse.Invoice;

  resource_id: string;

  source:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp';

  /**
   * Hyperdoc document type discriminator (document, message, file, event, ...).
   */
  type: string;

  /**
   * Extracted memories (chunks with summaries) for this document, in document order.
   * Present only when explicitly requested via `include_chunks`; omitted otherwise.
   */
  chunks?: Array<MemoryListResponse.Chunk> | null;

  /**
   * The document's collection, if any.
   */
  collection?: string | null;

  /**
   * The document's own date (e.g. email sent date, event date).
   */
  document_date?: string | null;

  /**
   * When Hyperspell first indexed the document.
   */
  ingested_at?: string | null;

  /**
   * When the source document was last modified, if supplied by the source.
   */
  last_modified_at?: string | null;

  /**
   * Filterable custom metadata attached to the document.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Indexing status of the document.
   */
  status?:
    | 'pending'
    | 'processing'
    | 'completed'
    | 'failed'
    | 'pending_review'
    | 'skipped'
    | 'filtered'
    | 'cancelled'
    | null;

  /**
   * Human-readable document title.
   */
  title?: string | null;
}

export namespace MemoryListResponse {
  /**
   * A customer invoice, vendor bill, or credit memo.
   *
   * Line items are included in `children`.
   */
  export interface Invoice {
    id?: string;

    attachment_names?: Array<string> | null;

    balance_amount?: number | null;

    cancelled_at?: string | null;

    children?: Array<
      | Shared.Blob
      | Shared.Callout
      | Shared.Chunk
      | Shared.Code
      | Shared.Comment
      | Shared.Divider
      | Shared.Equation
      | Shared.Footnote
      | Shared.Heading
      | Shared.Image
      | Shared.Link
      | Shared.LineBreak
      | Shared.List
      | Shared.ListItem
      | Shared.Page
      | Shared.Paragraph
      | Shared.Quote
      | Shared.Table
      | Shared.TableCell
      | Shared.TableRow
      | Shared.Text
      | Shared.ToDo
      | Shared.ToolCall
      | Shared.ToolResult
      | Shared.TraceMessage
      | Shared.Utterance
    >;

    contact_id?: string | null;

    contact_name?: string | null;

    currency?: string | null;

    due_at?: string | null;

    invoice_type?: string | null;

    /**
     * Optional annotations carried by a hyperdoc node.
     *
     * Includes source provenance and human edit attribution. Unset metadata is omitted
     * from serialized responses.
     */
    metadata?: Shared.Metadata | null;

    notes?: string | null;

    number?: string | null;

    organization_id?: string | null;

    paid_amount?: number | null;

    paid_at?: string | null;

    posted_at?: string | null;

    reference?: string | null;

    refund_amount?: number | null;

    refund_reason?: string | null;

    refunded_at?: string | null;

    status?: string | null;

    tax_amount?: number | null;

    text?: string | null;

    total_amount?: number | null;

    type?: 'invoice';
  }

  /**
   * A searchable chunk extracted from a document during ingestion.
   *
   * `summary` is null when no summary was generated for the chunk.
   */
  export interface Chunk {
    /**
     * Stable identifier of the chunk.
     */
    chunk_id: string;

    /**
     * LLM-generated summary of the chunk, if one was produced.
     */
    summary?: string | null;
  }
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
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp';

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

  /**
   * Items not ingested because their resource_id is already owned by another user on
   * this app. Empty in the common case; a non-empty list is a partial success, not
   * an error.
   */
  skipped?: Array<MemoryAddBulkResponse.Skipped>;

  success?: boolean;
}

export namespace MemoryAddBulkResponse {
  /**
   * A bulk item that was neither written nor indexed, with the reason.
   *
   * `owned_by_another_user` means the resource ID already belongs to another user in
   * the app. The bulk endpoint skips that item without modifying the existing
   * document. Single-item `/memories/add` returns 409 instead.
   */
  export interface Skipped {
    /**
     * Why the item was skipped (e.g. 'owned_by_another_user')
     */
    reason: string;

    /**
     * Resource ID of the skipped item
     */
    resource_id: string;
  }
}

/**
 * A document-shaped API response containing the hyperdoc tree.
 */
export interface MemoryGetResponse {
  /**
   * The full hyperdoc tree. Switch on `type` for the document frame and recurse
   * through `children` for the body.
   */
  document:
    | Shared.Document
    | Shared.Website
    | Shared.Task
    | Shared.Person
    | Shared.Message
    | Shared.Event
    | Shared.File
    | Shared.Conversation
    | Shared.Trace
    | Shared.Transcript
    | Shared.Company
    | Shared.Deal
    | MemoryGetResponse.Invoice;

  resource_id: string;

  source:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp';

  /**
   * Hyperdoc document type discriminator (document, message, file, event, ...).
   */
  type: string;

  /**
   * Extracted memories (chunks with summaries) for this document, in document order.
   * Present only when explicitly requested via `include_chunks`; omitted otherwise.
   */
  chunks?: Array<MemoryGetResponse.Chunk> | null;

  /**
   * The document's collection, if any.
   */
  collection?: string | null;

  /**
   * The document's own date (e.g. email sent date, event date).
   */
  document_date?: string | null;

  /**
   * When Hyperspell first indexed the document.
   */
  ingested_at?: string | null;

  /**
   * When the source document was last modified, if supplied by the source.
   */
  last_modified_at?: string | null;

  /**
   * Filterable custom metadata attached to the document.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Indexing status of the document.
   */
  status?:
    | 'pending'
    | 'processing'
    | 'completed'
    | 'failed'
    | 'pending_review'
    | 'skipped'
    | 'filtered'
    | 'cancelled'
    | null;

  /**
   * Human-readable document title.
   */
  title?: string | null;
}

export namespace MemoryGetResponse {
  /**
   * A customer invoice, vendor bill, or credit memo.
   *
   * Line items are included in `children`.
   */
  export interface Invoice {
    id?: string;

    attachment_names?: Array<string> | null;

    balance_amount?: number | null;

    cancelled_at?: string | null;

    children?: Array<
      | Shared.Blob
      | Shared.Callout
      | Shared.Chunk
      | Shared.Code
      | Shared.Comment
      | Shared.Divider
      | Shared.Equation
      | Shared.Footnote
      | Shared.Heading
      | Shared.Image
      | Shared.Link
      | Shared.LineBreak
      | Shared.List
      | Shared.ListItem
      | Shared.Page
      | Shared.Paragraph
      | Shared.Quote
      | Shared.Table
      | Shared.TableCell
      | Shared.TableRow
      | Shared.Text
      | Shared.ToDo
      | Shared.ToolCall
      | Shared.ToolResult
      | Shared.TraceMessage
      | Shared.Utterance
    >;

    contact_id?: string | null;

    contact_name?: string | null;

    currency?: string | null;

    due_at?: string | null;

    invoice_type?: string | null;

    /**
     * Optional annotations carried by a hyperdoc node.
     *
     * Includes source provenance and human edit attribution. Unset metadata is omitted
     * from serialized responses.
     */
    metadata?: Shared.Metadata | null;

    notes?: string | null;

    number?: string | null;

    organization_id?: string | null;

    paid_amount?: number | null;

    paid_at?: string | null;

    posted_at?: string | null;

    reference?: string | null;

    refund_amount?: number | null;

    refund_reason?: string | null;

    refunded_at?: string | null;

    status?: string | null;

    tax_amount?: number | null;

    text?: string | null;

    total_amount?: number | null;

    type?: 'invoice';
  }

  /**
   * A searchable chunk extracted from a document during ingestion.
   *
   * `summary` is null when no summary was generated for the chunk.
   */
  export interface Chunk {
    /**
     * Stable identifier of the chunk.
     */
    chunk_id: string;

    /**
     * LLM-generated summary of the chunk, if one was produced.
     */
    summary?: string | null;
  }
}

export interface MemoryStatusResponse {
  providers: { [key: string]: { [key: string]: number } };

  total: { [key: string]: number };

  integrations?: Array<MemoryStatusResponse.Integration>;
}

export namespace MemoryStatusResponse {
  /**
   * Health summary for a configured integration.
   *
   * `provider` uses lowercase snake_case naming (e.g. `google_drive`).
   */
  export interface Integration {
    connections: Array<Integration.Connection>;

    /**
     * The current error for a connection.
     *
     * `detail` contains a sanitized summary suitable for display.
     */
    error: Integration.Error | null;

    integration_id: string;

    last_synced_at: string | null;

    provider: string;

    /**
     * Current health status of a connection or integration.
     */
    status:
      | 'broken'
      | 'stalled'
      | 'error'
      | 'rate_limited'
      | 'syncing'
      | 'connected'
      | 'live'
      | 'never_synced'
      | 'not_connected';
  }

  export namespace Integration {
    /**
     * The current health of one connection.
     */
    export interface Connection {
      id: string;

      /**
       * The current error for a connection.
       *
       * `detail` contains a sanitized summary suitable for display.
       */
      error: Connection.Error | null;

      label: string | null;

      last_activity_at: string | null;

      last_synced_at: string | null;

      /**
       * Current health status of a connection or integration.
       */
      status:
        | 'broken'
        | 'stalled'
        | 'error'
        | 'rate_limited'
        | 'syncing'
        | 'connected'
        | 'live'
        | 'never_synced'
        | 'not_connected';
    }

    export namespace Connection {
      /**
       * The current error for a connection.
       *
       * `detail` contains a sanitized summary suitable for display.
       */
      export interface Error {
        at: string;

        detail: string | null;

        /**
         * Classification of the most recent synchronization or indexing failure.
         */
        kind: 'auth' | 'rate_limited' | 'provider' | 'internal';

        origin?: string | null;

        retry_at?: string | null;
      }
    }

    /**
     * The current error for a connection.
     *
     * `detail` contains a sanitized summary suitable for display.
     */
    export interface Error {
      at: string;

      detail: string | null;

      /**
       * Classification of the most recent synchronization or indexing failure.
       */
      kind: 'auth' | 'rate_limited' | 'provider' | 'internal';

      origin?: string | null;

      retry_at?: string | null;
    }
  }
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
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp';

  /**
   * @deprecated Body param: The collection to move the document to — deprecated, set
   * the collection using metadata instead.
   */
  collection?: string | unknown | null;

  /**
   * Body param: Date of the document for ranking and filtering.
   */
  date?: string | unknown | null;

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
   * When > 0, include up to this many extracted memories (chunks with summaries) per
   * document in each item's `chunks` field, in document order. 0 (default) omits
   * them.
   */
  include_chunks?: number;

  /**
   * Filter documents by source.
   */
  source?:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp'
    | null;

  /**
   * Filter documents by status.
   */
  status?:
    | 'pending'
    | 'processing'
    | 'completed'
    | 'failed'
    | 'pending_review'
    | 'skipped'
    | 'filtered'
    | 'cancelled'
    | null;
}

export interface MemoryGetParams {
  /**
   * Path param
   */
  source:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp';

  /**
   * Query param: When true, include the document's extracted memories (chunks with
   * summaries) in the `chunks` field, in document order.
   */
  include_chunks?: boolean;
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
   * Controls retrieval thoroughness. 'minimal' performs direct retrieval. 'low'
   * improves the query and extracts date filters. 'medium' adds up to 3 refinement
   * rounds; 'high' allows up to 6. Higher levels can improve recall but add latency
   * and cost.
   */
  effort?: 'minimal' | 'low' | 'medium' | 'high' | 'very_high';

  /**
   * @deprecated Maximum number of results to return.
   */
  max_results?: number;

  /**
   * Search options for the query.
   */
  options?: MemorySearchParams.Options;

  /**
   * If true (effort='very_high' only), attach a provenance record to the response:
   * the source documents and entities the answer was grounded in, the agent's search
   * trajectory, and any sources that failed. Intended for auditability and
   * compliance use cases.
   */
  provenance?: boolean;

  /**
   * Only query documents from these sources. Names are case-insensitive and accept
   * either separator, so `Google Drive`'s provider may be given as `google_drive`,
   * `google-drive`, or `GOOGLE_DRIVE`.
   */
  sources?: Array<
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp'
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
    answer_model?:
      | 'llama-3.1'
      | 'gemma2'
      | 'qwen-qwq'
      | 'mistral-saba'
      | 'llama-4-scout'
      | 'deepseek-r1'
      | 'gpt-oss-20b'
      | 'gpt-oss-120b'
      | 'claude-sonnet-4-6'
      | 'claude-sonnet-5'
      | 'claude-opus-4-7'
      | 'claude-opus-4-8';

    /**
     * Only query documents created before this date.
     */
    before?: string | null;

    /**
     * Metadata filters using MongoDB-style operators. Example: {'status': 'published',
     * 'priority': {'$gt': 3}}
     */
    filter?: { [key: string]: unknown } | null;

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
     * Filter by memory type. Defaults to generic memories only. Pass multiple types to
     * include procedures, etc.
     */
    memory_types?: Array<'procedure' | 'memory' | 'mood'>;

    /**
     * Search options for Notion
     */
    notion?: Options.Notion;

    /**
     * When set, multiplies each result's score by an exponential-decay factor based on
     * the document's most recent activity timestamp (source-reported last_modified,
     * falling back to document_date). A document one half-life old gets its score
     * halved. Resources with no recency timestamp are passed through unchanged. Leave
     * unset to disable.
     */
    recency_half_life_days?: number | null;

    /**
     * Only return results from these specific resource IDs. Useful for scoping
     * searches to specific documents (e.g., a specific email thread or uploaded file).
     */
    resource_ids?: Array<string> | null;

    /**
     * Search options for Slack
     */
    slack?: Options.Slack;

    /**
     * IANA timezone used to interpret date-only bounds and relative calendar phrases.
     * Defaults to UTC.
     */
    timezone?: string;

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

export interface MemoryDeleteParams {
  source:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'imap'
    | 'google_meet'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'gitlab'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_outlook'
    | 'microsoft_teams'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'figma'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'confluence'
    | 'jira'
    | 'metabase'
    | 'gong'
    | 'clickup'
    | 'lightfield'
    | 'pylon'
    | 'fellow'
    | 'odoo'
    | 'external_mcp';
}

export declare namespace Memories {
  export {
    type MemoryStatus as MemoryStatus,
    type MemoryListResponse as MemoryListResponse,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryAddBulkResponse as MemoryAddBulkResponse,
    type MemoryGetResponse as MemoryGetResponse,
    type MemoryStatusResponse as MemoryStatusResponse,
    type MemoryListResponsesCursorPage as MemoryListResponsesCursorPage,
    type MemoryAddParams as MemoryAddParams,
    type MemoryAddBulkParams as MemoryAddBulkParams,
    type MemoryUploadParams as MemoryUploadParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
    type MemoryGetParams as MemoryGetParams,
    type MemorySearchParams as MemorySearchParams,
    type MemoryDeleteParams as MemoryDeleteParams,
  };
}
