// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CursorPage } from '../core/pagination';

export interface Metadata {
  created_at?: string | null;

  events?: Array<Notification>;

  indexed_at?: string | null;

  last_modified?: string | null;

  status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped';

  url?: string | null;

  [k: string]: unknown;
}

export interface Notification {
  message: string;

  type: 'error' | 'warning' | 'info' | 'success';

  time?: string;
}

export interface QueryResult {
  documents: Array<Resource>;

  /**
   * The answer to the query, if the request was set to answer.
   */
  answer?: string | null;

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
  provenance?: QueryResult.Provenance | null;

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

export namespace QueryResult {
  /**
   * Auditability record attached to an agentic answer.
   *
   * Gated behind `provenance=true` on the request: the cheap parts (sources, steps,
   * failed_sources) are derived from in-memory loop state, but `entities` costs one
   * indexed DB lookup, so the whole record is only built on request.
   */
  export interface Provenance {
    entities?: Array<Provenance.Entity>;

    failed_sources?: Array<string>;

    sources?: Array<Provenance.Source>;

    steps?: Array<Provenance.Step>;
  }

  export namespace Provenance {
    /**
     * A canonical entity referenced by the answer's source documents.
     */
    export interface Entity {
      id: string;

      name: string;

      type: string;
    }

    /**
     * A source document that informed the final answer (the post-rank result set).
     */
    export interface Source {
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
        | 'lightfield';

      score?: number | null;

      title?: string | null;
    }

    /**
     * One tool invocation in the agent's search trajectory (audit trail).
     */
    export interface Step {
      iteration: number;

      status: string;

      tool: string;

      query?: string | null;

      result_count?: number;

      source?: string | null;
    }
  }
}

export interface Resource {
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
    | 'lightfield';

  /**
   * Ordered list of provider folder IDs from immediate parent up to (but not
   * including) provider root. Used by resolve_sync_mode to walk the actual folder
   * tree without depending on intermediate policy records. Empty = resource lives at
   * provider root.
   */
  folder_ancestors?: Array<string>;

  /**
   * Provider folder ID this resource belongs to
   */
  folder_id?: string | null;

  metadata?: Metadata;

  /**
   * Parent folder ID for policy inheritance
   */
  parent_folder_id?: string | null;

  /**
   * The relevance of the resource to the query
   */
  score?: number | null;

  title?: string | null;
}

export type ResourcesCursorPage = CursorPage<Resource>;
