// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as DocumentsAPI from './documents';

/**
 * ApiKeys Base Schema.
 */
export interface Apikey {
  app_id: number;

  scopes: Array<'all' | 'ingest' | 'query'>;

  secret: string;

  id?: number | null;

  /**
   * Apps Base Schema.
   */
  app?: App | null;

  created_at?: string;

  label?: string | null;

  revoked_at?: string | null;
}

/**
 * Apps Base Schema.
 */
export interface App {
  name: string;

  slug: string;

  user_id: string;

  id?: number | null;

  api_keys?: Array<Apikey> | null;

  collections?: Array<Collection> | null;

  created_at?: string;

  integrations?: Array<unknown>;

  jwt_secret?: string;

  optional_integrations?: Array<unknown> | null;

  public_key?: string;

  settings?: unknown;
}

export interface Collection {
  app_id: number;

  name: string;

  id?: number | null;

  /**
   * Apps Base Schema.
   */
  app?: App | null;

  created_at?: string;

  documents?: Array<Collection.Document> | null;

  documents_count?: number | null;

  owner?: string | null;
}

export namespace Collection {
  export interface Document {
    collection_id: number;

    /**
     * Structured representation of the document
     */
    data: unknown | Array<unknown>;

    /**
     * Summary of the document
     */
    summary: string;

    id?: number | null;

    collection?: string;

    created_at?: string | null;

    events?: Array<Document.Event>;

    ingested_at?: string | null;

    metadata?: Record<string, unknown>;

    /**
     * Along with service, uniquely identifies the source document
     */
    resource_id?: string;

    sections?: Array<Document.Section>;

    sections_count?: number | null;

    source?: 'generic' | 'slack' | 's3' | 'gmail' | 'notion' | 'google_docs' | 'hubspot';

    status?: 'pending' | 'processing' | 'completed' | 'failed';

    title?: string | null;

    type?:
      | 'generic'
      | 'markdown'
      | 'chat'
      | 'email'
      | 'transcript'
      | 'legal'
      | 'website'
      | 'image'
      | 'pdf'
      | 'audio'
      | 'spreadsheet'
      | 'archive'
      | 'book'
      | 'video'
      | 'code'
      | 'calendar'
      | 'json'
      | 'presentation'
      | 'unsupported'
      | 'person'
      | 'company'
      | 'crm_contact';
  }

  export namespace Document {
    export interface Event {
      message: string;

      type: 'error' | 'warning' | 'info';

      time?: string;
    }

    export interface Section {
      document_id: number;

      /**
       * Summary of the section
       */
      text: string;

      id?: number | null;

      content?: string | null;

      elements?: Array<unknown>;

      embedding_e5_large?: Array<number> | null;

      embedding_ts?: string | null;

      metadata?: Record<string, unknown>;

      scores?: DocumentsAPI.Scores;
    }
  }
}
