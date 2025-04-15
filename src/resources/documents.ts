// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { CursorPage, type CursorPageParams } from '../pagination';

export class Documents extends APIResource {
  /**
   * This endpoint allows you to paginate through all documents in the index. You can
   * filter the documents by title, date, metadata, etc.
   */
  list(
    query?: DocumentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentListResponsesCursorPage, DocumentListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentListResponsesCursorPage, DocumentListResponse>;
  list(
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentListResponsesCursorPage, DocumentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/documents/list', DocumentListResponsesCursorPage, { query, ...options });
  }

  /**
   * Adds an arbitrary document to the index. This can be any text, email, call
   * transcript, etc. The document will be processed and made available for querying
   * once the processing is complete.
   */
  add(body: DocumentAddParams, options?: Core.RequestOptions): Core.APIPromise<DocumentStatus> {
    return this._client.post('/documents/add', { body, ...options });
  }

  /**
   * Adds an arbitrary document to the index. This can be any text, email, call
   * transcript, etc. The document will be processed and made available for querying
   * once the processing is complete.
   */
  addURL(body: DocumentAddURLParams, options?: Core.RequestOptions): Core.APIPromise<DocumentStatus> {
    return this._client.post('/documents/scrape', { body, ...options });
  }

  /**
   * Retrieves a document by ID, including its collection name and sections.
   */
  get(documentId: number, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/documents/get/${documentId}`, options);
  }

  /**
   * This endpoint will upload a file to the index and return a document ID. The file
   * will be processed in the background and the document will be available for
   * querying once the processing is complete. You can use the `document_id` to query
   * the document later, and check the status of the document.
   */
  upload(body: DocumentUploadParams, options?: Core.RequestOptions): Core.APIPromise<DocumentStatus> {
    return this._client.post('/documents/upload', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export class DocumentListResponsesCursorPage extends CursorPage<DocumentListResponse> {}

export interface DocumentStatus {
  id: number;

  collection: string;

  status: 'pending' | 'processing' | 'completed' | 'failed';
}

export interface DocumentListResponse {
  /**
   * Summary of the document
   */
  data: Array<unknown>;

  /**
   * Summary of the document
   */
  summary: string;

  id?: number | null;

  collection?: string;

  created_at?: string | null;

  events?: Array<DocumentListResponse.Event>;

  ingested_at?: string | null;

  metadata?: Record<string, unknown>;

  /**
   * Along with service, uniquely identifies the source document
   */
  resource_id?: string;

  sections?: Array<DocumentListResponse.Section>;

  sections_count?: number | null;

  source?: 'collections' | 'notion' | 'slack' | 'hubspot' | 'google-calendar' | 'reddit';

  status?: 'pending' | 'processing' | 'completed' | 'failed';

  title?: string | null;

  type?:
    | 'generic'
    | 'memory'
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
    | 'crm_contact'
    | 'event';
}

export namespace DocumentListResponse {
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
  }
}

export type DocumentGetResponse = unknown;

export interface DocumentListParams extends CursorPageParams {
  collection?: string | null;
}

export interface DocumentAddParams {
  /**
   * Full text of the document.
   */
  text: string;

  /**
   * Name of the collection to add the document to. If the collection does not exist,
   * it will be created. If not given, the document will be added to the user's
   * default collection.
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
   * Title of the document.
   */
  title?: string | null;
}

export interface DocumentAddURLParams {
  /**
   * Source URL of the document.
   */
  url: string;

  /**
   * Name of the collection to add the document to. If the collection does not exist,
   * it will be created. If not given, the document will be added to the user's
   * default collection.
   */
  collection?: string | null;
}

export interface DocumentUploadParams {
  /**
   * The collection to add the document to.
   */
  collection: string;

  /**
   * The file to ingest.
   */
  file: Core.Uploadable;
}

Documents.DocumentListResponsesCursorPage = DocumentListResponsesCursorPage;

export declare namespace Documents {
  export {
    type DocumentStatus as DocumentStatus,
    type DocumentListResponse as DocumentListResponse,
    type DocumentGetResponse as DocumentGetResponse,
    DocumentListResponsesCursorPage as DocumentListResponsesCursorPage,
    type DocumentListParams as DocumentListParams,
    type DocumentAddParams as DocumentAddParams,
    type DocumentAddURLParams as DocumentAddURLParams,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
