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
   * The ID of the query. This can be used to retrieve the query later, or add
   * feedback to it. If the query failed, this will be None.
   */
  query_id?: string | null;

  /**
   * The average score of the query feedback, if any.
   */
  score?: number | null;
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
    | 'linear'
    | 'hubspot'
    | 'salesforce';

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
