// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

/**
 * Represents embedded binary data using data URI scheme.
 *
 * Format: data:[<media type>][;base64],<data> Example:
 * data:text/html;base64,PGh0bWw+...
 */
export interface Blob {
  data: string;

  mimetype: string;

  id?: string;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'blob';
}

export interface Callout {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  title?: string | null;

  type?: 'callout';
}

export interface Chunk {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'chunk';
}

export interface Code {
  text: string;

  id?: string;

  language?: string | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'code';
}

export interface Comment {
  text: string;

  id?: string;

  created_at?: string | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'comment';
}

/**
 * A CRM company or account record.
 */
export interface Company {
  id?: string;

  address?: string | null;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  contact_ids?: Array<string> | null;

  deal_ids?: Array<string> | null;

  description?: string | null;

  emails?: Array<string> | null;

  employees?: number | null;

  image_url?: string | null;

  industry?: string | null;

  is_active?: boolean | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  name?: string | null;

  phone_numbers?: Array<string> | null;

  tags?: Array<string> | null;

  text?: string | null;

  timezone?: string | null;

  type?: 'company';

  websites?: Array<string> | null;
}

export interface Conversation {
  id?: string;

  channel?: string | null;

  children?: Array<Message>;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  participants?: Array<Person> | null;

  text?: string | null;

  title?: string | null;

  type?: 'conversation';
}

/**
 * A CRM deal or opportunity record.
 */
export interface Deal {
  id?: string;

  amount?: number | null;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  closed_at?: string | null;

  company_ids?: Array<string> | null;

  contact_ids?: Array<string> | null;

  currency?: string | null;

  deal_source?: string | null;

  lost_reason?: string | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  name?: string | null;

  pipeline?: string | null;

  probability?: number | null;

  stage?: string | null;

  tags?: Array<string> | null;

  text?: string | null;

  type?: 'deal';

  won_reason?: string | null;
}

export interface Divider {
  id?: string;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'divider';
}

export interface Document {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  title?: string | null;

  type?: 'document';
}

export interface Equation {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'equation';
}

export interface Event {
  id?: string;

  attendees?: Array<Person>;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  end_at?: string | null;

  location?: string | null;

  meeting_url?: string | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  start_at?: string | null;

  text?: string | null;

  title?: string | null;

  type?: 'event';
}

export interface File {
  content_type: string;

  filename: string;

  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  /**
   * Whether the stored readable body is a capped preview of the full file.
   */
  content_truncated?: boolean | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  path?: Array<string> | null;

  text?: string | null;

  title?: string | null;

  type?: 'file';
}

export interface Footnote {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'footnote';
}

export interface Heading {
  level: number;

  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'heading';
}

export interface Image {
  src: string;

  text: string;

  id?: string;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'image';
}

export interface LineBreak {
  id?: string;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'line_break';
}

export interface Link {
  text: string;

  url: string;

  id?: string;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'link';
}

export interface List {
  id?: string;

  children?: Array<ListItem | ToDo>;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  ordered?: boolean;

  text?: string | null;

  type?: 'list';
}

export interface ListItem {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'list_item';
}

export interface Message {
  date: string;

  sender: Person;

  id?: string;

  /**
   * The channel or platform where the message was posted, if this Message is not
   * explicitly part of a conversation
   */
  channel?: string | null;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  /**
   * Provider message id (e.g. Slack ts, Gmail message id) — merge-dedup key
   */
  external_id?: string | null;

  is_self?: boolean | null;

  mentioned_users?: Array<Person> | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  num_replies?: number | null;

  /**
   * The replies or comments to the message
   */
  replies?: Array<Message> | null;

  text?: string | null;

  thread_id?: string | null;

  /**
   * The subject or title of the message
   */
  title?: string | null;

  type?: 'message';

  updated_at?: string | null;

  /**
   * The number of upvotes, likes, or reactions on the message
   */
  upvotes?: number | null;
}

/**
 * Optional annotations carried by a hyperdoc node.
 *
 * Includes source provenance and human edit attribution. Unset metadata is omitted
 * from serialized responses.
 */
export interface Metadata {
  edited_by?: string | null;

  sources?: Array<Metadata.Source> | null;
}

export namespace Metadata {
  /**
   * A reference to source content that supports a block.
   *
   * `chunk_id` identifies the supporting content. `resource_id` and `source`
   * identify its document, and `score` optionally records relevance.
   */
  export interface Source {
    chunk_id: string;

    resource_id?: string | null;

    score?: number | null;

    source?: string | null;
  }
}

export interface Page {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  page_number?: number | null;

  preview_url?: string | null;

  text?: string | null;

  type?: 'page';
}

export interface Paragraph {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'paragraph';
}

export interface Person {
  id?: string;

  address?: string | null;

  alt_names?: Array<string> | null;

  buying_roles?: Array<string> | null;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  company?: string | null;

  company_ids?: Array<string> | null;

  date_of_birth?: string | null;

  deal_ids?: Array<string> | null;

  email?: string | null;

  /**
   * All known email addresses; `email` holds the primary one
   */
  emails?: Array<string> | null;

  employment_role?: string | null;

  employment_seniority?: string | null;

  employment_sub_role?: string | null;

  image_url?: string | null;

  industry?: string | null;

  is_app_user?: boolean | null;

  is_bot?: boolean | null;

  job_title?: string | null;

  last_sales_activity_at?: string | null;

  last_sales_activity_type?: string | null;

  lead_status?: string | null;

  lifecycle_stage?: string | null;

  link_urls?: Array<string> | null;

  linkedin_url?: string | null;

  marketing_contact_status?: string | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  name?: string | null;

  original_source?: string | null;

  persona?: string | null;

  phone_numbers?: Array<string> | null;

  tags?: Array<string> | null;

  text?: string | null;

  timezone?: string | null;

  type?: 'person';

  username?: string | null;

  website?: string | null;
}

/**
 * Auditability record returned when requested for a supported query.
 */
export interface Provenance {
  entities?: Array<ProvenanceEntity>;

  failed_sources?: Array<string>;

  sources?: Array<ProvenanceSource>;

  steps?: Array<ProvenanceStep>;
}

/**
 * A canonical entity referenced by the answer's source documents.
 */
export interface ProvenanceEntity {
  id: string;

  name: string;

  type: string;
}

/**
 * A source document that informed the final answer.
 *
 * Includes available retrieval details such as title and relevance score.
 */
export interface ProvenanceSource {
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

  chunk_id?: string | null;

  content_sha256?: string | null;

  owner?: string | null;

  score?: number | null;

  span?: Array<unknown> | null;

  title?: string | null;
}

/**
 * One tool invocation in the agent's search trajectory (audit trail).
 */
export interface ProvenanceStep {
  iteration: number;

  status: string;

  tool: string;

  query?: string | null;

  result_count?: number;

  source?: string | null;
}

export interface QueryResult {
  /**
   * The answer to the query, if the request was set to answer.
   */
  answer?: string | null;

  /**
   * Privacy notice set when cross-user alpha mode ran. Callers must display it
   * alongside the synthesized answer.
   */
  disclaimer?: string | null;

  /**
   * The matching documents, each carrying its hyperdoc tree plus query-path score,
   * highlights, and summary.
   */
  documents?: Array<ScoredDocumentResponse>;

  /**
   * Errors that occurred during the query. These are meant to help the developer
   * debug the query, and are not meant to be shown to the user.
   */
  errors?: Array<{ [key: string]: string }> | null;

  /**
   * Auditability record returned when requested for a supported query.
   */
  provenance?: Provenance | null;

  /**
   * The query string that was issued.
   */
  query?: string | null;

  /**
   * The ID of the query. This can be used to retrieve the query later, or add
   * feedback to it. If the query failed, this will be None.
   */
  query_id?: string | null;

  /**
   * The average score of the query feedback, if any.
   */
  score?: number | null;
}

export interface Quote {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'quote';
}

/**
 * A document response with its relevance score, matched highlights, and a summary
 * of those highlights.
 */
export interface ScoredDocumentResponse {
  /**
   * The full hyperdoc tree. Switch on `type` for the document frame and recurse
   * through `children` for the body.
   */
  document:
    | Document
    | Website
    | Task
    | Person
    | Message
    | Event
    | File
    | Conversation
    | Trace
    | Transcript
    | Company
    | Deal
    | ScoredDocumentResponse.Invoice;

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
  chunks?: Array<ScoredDocumentResponse.Chunk> | null;

  /**
   * The document's collection, if any.
   */
  collection?: string | null;

  /**
   * The document's own date (e.g. email sent date, event date).
   */
  document_date?: string | null;

  /**
   * The matched chunks that made this document a hit, with per-chunk scores.
   */
  highlights?: Array<unknown>;

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
   * Relevance of the document to the query.
   */
  score?: number | null;

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
   * Concatenated text of the matched highlights.
   */
  summary?: string | null;

  /**
   * Human-readable document title.
   */
  title?: string | null;
}

export namespace ScoredDocumentResponse {
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

export interface Table {
  id?: string;

  children?: Array<TableRow>;

  /**
   * Whether the first row should be treated as a header
   */
  has_header?: boolean;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'table';
}

export interface TableCell {
  id?: string;

  align?: 'left' | 'center' | 'right';

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'table_cell';
}

export interface TableRow {
  id?: string;

  children?: Array<TableCell>;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'table_row';
}

export interface Task {
  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  comments?: Array<Message> | null;

  due_at?: string | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  priority?: 'urgent' | 'high' | 'medium' | 'low' | null;

  status?: 'completed' | 'not_started' | 'in_progress' | 'cancelled' | null;

  text?: string | null;

  type?: 'task';
}

export interface Text {
  text: string;

  id?: string;

  marks?: Array<'bold' | 'italic' | 'underline' | 'strikethrough' | 'code' | 'math'> | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'text';
}

export interface ToDo {
  id?: string;

  checked?: boolean;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  > | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'todo';
}

/**
 * A tool/function call made by the assistant.
 */
export interface ToolCall {
  tool_call_id: string;

  tool_name: string;

  id?: string;

  args?: { [key: string]: unknown };

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'tool_call';
}

/**
 * The result of a tool call.
 */
export interface ToolResult {
  output: string | { [key: string]: unknown } | Array<unknown>;

  tool_call_id: string;

  tool_name: string;

  id?: string;

  is_error?: boolean;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  type?: 'tool_result';
}

/**
 * An agent trace/transcript containing a sequence of steps.
 *
 * Steps can be TraceMessage (user/assistant messages or thinking), ToolCall
 * (function calls), or ToolResult (tool responses).
 */
export interface Trace {
  id?: string;

  children?: Array<TraceMessage | ToolCall | ToolResult>;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  title?: string | null;

  type?: 'trace';
}

/**
 * A message in an agent trace (user message, assistant message, or thinking).
 */
export interface TraceMessage {
  text: string;

  id?: string;

  message_type?: 'message' | 'thinking';

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  role?: 'user' | 'assistant';

  timestamp?: string | null;

  type?: 'trace_message';
}

/**
 * A time-anchored, speaker-attributed transcript for a meeting or call.
 *
 * Utterance timestamps are relative offsets from `started_at`, which is the
 * absolute wall-clock anchor.
 */
export interface Transcript {
  id?: string;

  children?: Array<Utterance>;

  ended_at?: string | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  participants?: Array<Person>;

  started_at?: string | null;

  text?: string | null;

  title?: string | null;

  type?: 'transcript';
}

/**
 * A speaker-attributed segment of a transcript.
 *
 * Start and end times are offsets in seconds from the beginning of the transcript.
 */
export interface Utterance {
  text: string;

  id?: string;

  end?: number | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  speaker?: Person | null;

  start?: number | null;

  type?: 'utterance';
}

export interface Website {
  url: string;

  id?: string;

  children?: Array<
    | Blob
    | Callout
    | Chunk
    | Code
    | Comment
    | Divider
    | Equation
    | Footnote
    | Heading
    | Image
    | Link
    | LineBreak
    | List
    | ListItem
    | Page
    | Paragraph
    | Quote
    | Table
    | TableCell
    | TableRow
    | Text
    | ToDo
    | ToolCall
    | ToolResult
    | TraceMessage
    | Utterance
  >;

  description?: string | null;

  favicon?: string | null;

  image_url?: string | null;

  language?: string | null;

  /**
   * Optional annotations carried by a hyperdoc node.
   *
   * Includes source provenance and human edit attribution. Unset metadata is omitted
   * from serialized responses.
   */
  metadata?: Metadata | null;

  text?: string | null;

  title?: string | null;

  type?: 'website';
}
