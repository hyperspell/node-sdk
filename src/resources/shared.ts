// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  type?: 'code';
}

export interface Comment {
  text: string;

  id?: string;

  created_at?: string | null;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  type?: 'comment';
}

/**
 * A CRM company/account record (ENG-2476/D10).
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  text?: string | null;

  title?: string | null;

  type?: 'conversation';
}

/**
 * A CRM deal/opportunity record (ENG-2476/D10).
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  type?: 'image';
}

export interface LineBreak {
  id?: string;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  type?: 'line_break';
}

export interface Link {
  text: string;

  url: string;

  id?: string;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  type?: 'link';
}

export interface List {
  id?: string;

  children?: Array<ListItem | ToDo>;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
 * Per-block annotations carried by any Hyperdoc node (ENG-1390).
 *
 * Out-of-band annotations that travel with a block but aren't part of its content:
 * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
 * types get added here as typed fields as the need arises.
 *
 * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
 * `metadata` (None) is dropped from serialization entirely, and within a populated
 * `Metadata` only the set keys survive.
 */
export interface Metadata {
  edited_by?: string | null;

  sources?: Array<Metadata.Source> | null;
}

export namespace Metadata {
  /**
   * A reference to a memory/chunk that a block's content is grounded in (ENG-1390).
   *
   * Chunks are the unit persisted to the DB — extracted memories become chunks when
   * indexed — so `chunk_id` is the stable pointer back to the source. `resource_id`
   * and `source` locate the originating document; `score` carries optional retrieval
   * relevance. Kept deliberately self-contained (plain `str` for `source` rather
   * than the `DocumentProviders` enum) so the hyperdoc format stays free of
   * app-layer imports.
   */
  export interface Source {
    chunk_id: string;

    resource_id?: string | null;

    score?: number | null;

    source?: string | null;
  }
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'paragraph';
}

export interface Person {
  id?: string;

  address?: string | null;

  alt_names?: Array<string> | null;

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

  image_url?: string | null;

  job_title?: string | null;

  link_urls?: Array<string> | null;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  name?: string | null;

  phone_numbers?: Array<string> | null;

  tags?: Array<string> | null;

  text?: string | null;

  type?: 'person';

  username?: string | null;
}

/**
 * Auditability record attached to an agentic answer.
 *
 * Gated behind `provenance=true` on the request: the cheap parts (sources, steps,
 * failed_sources) are derived from in-memory loop state, but `entities` costs one
 * indexed DB lookup, so the whole record is only built on request.
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
 * A source document that informed the final answer (the post-rank result set).
 */
export interface ProvenanceSource {
  resource_id: string;

  source:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_teams'
    | 'gmail_actions'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'lightfield'
    | 'gong'
    | 'pylon'
    | 'clickup';

  score?: number | null;

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
   * The matching documents, each carrying its hyperdoc tree plus query-path
   * score/highlights/summary (ENG-2479 Phase 4).
   */
  documents?: Array<ScoredDocumentResponse>;

  /**
   * Errors that occurred during the query. These are meant to help the developer
   * debug the query, and are not meant to be shown to the user.
   */
  errors?: Array<{ [key: string]: string }> | null;

  /**
   * Auditability record attached to an agentic answer.
   *
   * Gated behind `provenance=true` on the request: the cheap parts (sources, steps,
   * failed_sources) are derived from in-memory loop state, but `entities` costs one
   * indexed DB lookup, so the whole record is only built on request.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'quote';
}

/**
 * A `DocumentResponse` plus the query-path fields a `ScoredDocument` carries
 * (ENG-2479): relevance score, matched highlights, and the concatenated summary of
 * those highlights.
 */
export interface ScoredDocumentResponse {
  /**
   * The full hyperdoc tree. Switch on `type` for the document frame and recurse
   * `children` for the body — see the `<Hyperdoc />` renderer.
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
    | Deal;

  resource_id: string;

  source:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'box'
    | 'dropbox'
    | 'github'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_teams'
    | 'gmail_actions'
    | 'granola'
    | 'fathom'
    | 'fireflies'
    | 'linear'
    | 'hubspot'
    | 'salesforce'
    | 'coda'
    | 'lightfield'
    | 'gong'
    | 'pylon'
    | 'clickup';

  /**
   * Hyperdoc document type discriminator (document, message, file, event, ...).
   */
  type: string;

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
   * When the source document was last modified.
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
  status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped' | null;

  /**
   * Concatenated text of the matched highlights.
   */
  summary?: string | null;

  /**
   * Human-readable document title.
   */
  title?: string | null;
}

export interface Table {
  id?: string;

  children?: Array<TableRow>;

  /**
   * Whether the first row should be treated as a header
   */
  has_header?: boolean;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  text?: string | null;

  type?: 'table_cell';
}

export interface TableRow {
  id?: string;

  children?: Array<TableCell>;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  role?: 'user' | 'assistant';

  timestamp?: string | null;

  type?: 'trace_message';
}

/**
 * A time-anchored, speaker-attributed transcript — meetings, calls (ENG-2476/D10;
 * mirrors the Trace+TraceStep precedent).
 *
 * Utterance timestamps are relative offsets from `started_at`, which is the
 * absolute wall-clock anchor.
 */
export interface Transcript {
  id?: string;

  children?: Array<Utterance>;

  ended_at?: string | null;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  participants?: Array<Person>;

  started_at?: string | null;

  text?: string | null;

  title?: string | null;

  type?: 'transcript';
}

/**
 * A speaker-attributed segment of a transcript (ENG-2476/D10).
 *
 * "Utterance" is the standard name for this across transcription providers
 * (AssemblyAI, Deepgram, Rev). Timestamps are relative offsets in seconds —
 * provider-native; absolute times derive from `Transcript.started_at`.
 */
export interface Utterance {
  text: string;

  id?: string;

  end?: number | null;

  /**
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
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
   * Per-block annotations carried by any Hyperdoc node (ENG-1390).
   *
   * Out-of-band annotations that travel with a block but aren't part of its content:
   * provenance (`sources`) and human edit attribution (`edited_by`). New annotation
   * types get added here as typed fields as the need arises.
   *
   * Empty by default. Because `Node.model_dump` forces `exclude_none=True`, an unset
   * `metadata` (None) is dropped from serialization entirely, and within a populated
   * `Metadata` only the set keys survive.
   */
  metadata?: Metadata | null;

  text?: string | null;

  title?: string | null;

  type?: 'website';
}
