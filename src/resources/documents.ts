// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DocumentsAPI from './documents';
import { CursorPage, type CursorPageParams } from '../pagination';

export class Documents extends APIResource {
  /**
   * This endpoint allows you to paginate through all documents in the index. You can
   * filter the documents by title, date, metadata, etc.
   */
  list(
    query: DocumentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentListResponsesCursorPage, DocumentListResponse> {
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
  get(documentId: number, options?: Core.RequestOptions): Core.APIPromise<Document> {
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

export interface Document {
  collection: string;

  id?: number | null;

  created_at?: string | null;

  events?: Array<Document.Event>;

  ingested_at?: string | null;

  metadata?: Record<string, unknown>;

  /**
   * Along with service, uniquely identifies the source document
   */
  resource_id?: string;

  sections?: Array<Document.SectionResult | Document.SectionResultWithElements>;

  source?:
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
    | 'slack'
    | 's3'
    | 'gmail'
    | 'notion'
    | 'google_docs';

  status?: 'pending' | 'processing' | 'completed' | 'failed';

  title?: string | null;
}

export namespace Document {
  export interface Event {
    message: string;

    type: 'error' | 'warning' | 'info';

    time?: string;
  }

  export interface SectionResult {
    id?: number | null;

    scores?: DocumentsAPI.Scores;

    text?: string;
  }

  export interface SectionResultWithElements {
    id?: number | null;

    elements?: Array<SectionResultWithElements.Element>;

    scores?: DocumentsAPI.Scores;

    text?: string;
  }

  export namespace SectionResultWithElements {
    export interface Element {
      text: string;

      type: 'text' | 'markdown' | 'image' | 'table' | 'title' | 'query';

      id?: string;

      metadata?: Element.Metadata;

      summary?: string | null;
    }

    export namespace Element {
      export interface Metadata {
        author?: string | null;

        /**
         * The id of the element that this element is continued from if it had to be split
         * during chunking
         */
        continued_from?: string | null;

        filename?: string | null;

        languages?: Array<string>;

        links?: Array<string>;

        page_number?: number | null;

        title_level?: number | null;
      }
    }
  }
}

export interface DocumentStatus {
  id: number;

  collection: string;

  status: 'pending' | 'processing' | 'completed' | 'failed';
}

export interface Scores {
  /**
   * How relevant the section is based on full text search
   */
  full_text_search?: number | null;

  /**
   * How relevant the section is based on vector search
   */
  semantic_search?: number | null;

  /**
   * The final weighted score of the section
   */
  weighted?: number | null;
}

export interface DocumentListResponse {
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

  source?:
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
    | 'slack'
    | 's3'
    | 'gmail'
    | 'notion'
    | 'google_docs';

  status?: 'pending' | 'processing' | 'completed' | 'failed';

  title?: string | null;
}

export namespace DocumentListResponse {
  export interface Event {
    message: string;

    type: 'error' | 'warning' | 'info';

    time?: string;
  }

  export interface Section {
    document_id: number;

    id?: number | null;

    elements?: Array<Section.Element>;

    embedding_e5_large?: Array<number> | null;

    embedding_ts?: string | null;

    metadata?: Record<string, unknown>;

    scores?: DocumentsAPI.Scores;

    text?: string;
  }

  export namespace Section {
    export interface Element {
      text: string;

      type: 'text' | 'markdown' | 'image' | 'table' | 'title' | 'query';

      id?: string;

      metadata?: Element.Metadata;

      summary?: string | null;
    }

    export namespace Element {
      export interface Metadata {
        author?: string | null;

        /**
         * The id of the element that this element is continued from if it had to be split
         * during chunking
         */
        continued_from?: string | null;

        filename?: string | null;

        languages?: Array<string>;

        links?: Array<string>;

        page_number?: number | null;

        title_level?: number | null;
      }
    }
  }
}

export interface DocumentListParams extends CursorPageParams {
  collection: string;
}

export interface DocumentAddParams {
  /**
   * Name of the collection to add the document to. If the collection does not exist,
   * it will be created.
   */
  collection: string;

  /**
   * Full text of the document.
   */
  text: string;

  /**
   * Date of the document. Depending on the document, this could be the creation date
   * or date the document was last updated (eg. for a chat transcript, this would be
   * the date of the last message). This helps the ranking algorithm and allows you
   * to filter by date range.
   */
  date?: string;

  /**
   * Source of the document. This helps in parsing the document. Note that some
   * sources require the document to be in a specific format.
   */
  source?:
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
    | 'slack'
    | 's3'
    | 'gmail'
    | 'notion'
    | 'google_docs';

  /**
   * Title of the document.
   */
  title?: string | null;
}

export interface DocumentAddURLParams {
  /**
   * Name of the collection to add the document to. If the collection does not exist,
   * it will be created.
   */
  collection: string;

  /**
   * Source URL of the document.
   */
  url: string;
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
    type Document as Document,
    type DocumentStatus as DocumentStatus,
    type Scores as Scores,
    type DocumentListResponse as DocumentListResponse,
    DocumentListResponsesCursorPage as DocumentListResponsesCursorPage,
    type DocumentListParams as DocumentListParams,
    type DocumentAddParams as DocumentAddParams,
    type DocumentAddURLParams as DocumentAddURLParams,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
