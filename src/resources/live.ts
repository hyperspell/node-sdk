// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Live extends APIResource {
  /**
   * List the user's connected sources and the live capabilities each supports.
   */
  listSources(options?: RequestOptions): APIPromise<LiveListSourcesResponse> {
    return this._client.get('/live/sources', options);
  }

  /**
   * Page through a source's resources live (no indexing side effect).
   *
   * The cursor is opaque and integration-defined — pass back the `next_cursor` from
   * the previous page verbatim.
   */
  listResources(
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
      | 'external_mcp',
    query: LiveListResourcesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LiveListResourcesResponsesCursorPage, LiveListResourcesResponse> {
    return this._client.getAPIList(path`/live/${source}/resources`, CursorPage<LiveListResourcesResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Fetch one resource live by id. A single fetch may fan out into several resources
   * (e.g. a thread → its messages); all are returned.
   */
  getResource(
    resourceID: string,
    params: LiveGetResourceParams,
    options?: RequestOptions,
  ): APIPromise<LiveGetResourceResponse> {
    const { source, ...query } = params;
    return this._client.get(path`/live/${source}/resources/${resourceID}`, { query, ...options });
  }

  /**
   * Search a source live for content that may not be indexed yet. With `index=true`,
   * each hit is queued for indexing (no-op for live-only sources like Google
   * Calendar — see `notes` in the response).
   */
  search(
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
      | 'external_mcp',
    body: LiveSearchParams,
    options?: RequestOptions,
  ): APIPromise<LiveSearchResponse> {
    return this._client.post(path`/live/${source}/search`, { body, ...options });
  }
}

export type LiveListResourcesResponsesCursorPage = CursorPage<LiveListResourcesResponse>;

/**
 * A fetch/search result: the live documents plus what happened to them.
 */
export interface LiveGetResourceResponse {
  documents: Array<LiveGetResourceResponse.Document>;

  indexed?: boolean;

  notes?: Array<string>;
}

export namespace LiveGetResourceResponse {
  /**
   * A document-shaped API response containing the hyperdoc tree.
   */
  export interface Document {
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
      | Document.Invoice;

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
    chunks?: Array<Document.Chunk> | null;

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

  export namespace Document {
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
}

/**
 * A document-shaped API response containing the hyperdoc tree.
 */
export interface LiveListResourcesResponse {
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
    | LiveListResourcesResponse.Invoice;

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
  chunks?: Array<LiveListResourcesResponse.Chunk> | null;

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

export namespace LiveListResourcesResponse {
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

export interface LiveListSourcesResponse {
  sources: Array<LiveListSourcesResponse.Source>;
}

export namespace LiveListSourcesResponse {
  export interface Source {
    auth_provider: 'nango' | 'unified' | 'whitelabel';

    capabilities: Array<
      'list_resources' | 'fetch_resource' | 'search_live' | 'passthrough' | 'resolve' | 'query_structured'
    >;

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
      | 'external_mcp'
      | (string & {});
  }
}

/**
 * A fetch/search result: the live documents plus what happened to them.
 */
export interface LiveSearchResponse {
  documents: Array<LiveSearchResponse.Document>;

  indexed?: boolean;

  notes?: Array<string>;
}

export namespace LiveSearchResponse {
  /**
   * A document-shaped API response containing the hyperdoc tree.
   */
  export interface Document {
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
      | Document.Invoice;

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
    chunks?: Array<Document.Chunk> | null;

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

  export namespace Document {
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
}

export interface LiveListResourcesParams extends CursorPageParams {
  /**
   * Specific connection id.
   */
  connection_id?: string | null;
}

export interface LiveGetResourceParams {
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
   * Query param: Specific connection id.
   */
  connection_id?: string | null;

  /**
   * Query param: Also queue this resource for indexing.
   */
  index?: boolean;
}

export interface LiveSearchParams {
  /**
   * Live search query.
   */
  query: string;

  /**
   * Specific connection id when the user has multiple for this source.
   */
  connection_id?: string | null;

  /**
   * If true, queue each hit for indexing so it's on-hand next time.
   */
  index?: boolean;
}

export declare namespace Live {
  export {
    type LiveGetResourceResponse as LiveGetResourceResponse,
    type LiveListResourcesResponse as LiveListResourcesResponse,
    type LiveListSourcesResponse as LiveListSourcesResponse,
    type LiveSearchResponse as LiveSearchResponse,
    type LiveListResourcesResponsesCursorPage as LiveListResourcesResponsesCursorPage,
    type LiveListResourcesParams as LiveListResourcesParams,
    type LiveGetResourceParams as LiveGetResourceParams,
    type LiveSearchParams as LiveSearchParams,
  };
}
