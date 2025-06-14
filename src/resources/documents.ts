// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { CursorPage, type CursorPageParams } from '../pagination';

export class Documents extends APIResource {
  /**
   * This endpoint allows you to paginate through all documents in the index. You can
   * filter the documents by title, date, metadata, etc.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const document of client.documents.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: DocumentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsCursorPage, Document>;
  list(options?: Core.RequestOptions): Core.PagePromise<DocumentsCursorPage, Document>;
  list(
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsCursorPage, Document> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/documents/list', DocumentsCursorPage, { query, ...options });
  }

  /**
   * Adds an arbitrary document to the index. This can be any text, email, call
   * transcript, etc. The document will be processed and made available for querying
   * once the processing is complete.
   *
   * @example
   * ```ts
   * const documentStatus = await client.documents.add({
   *   text: 'text',
   * });
   * ```
   */
  add(body: DocumentAddParams, options?: Core.RequestOptions): Core.APIPromise<DocumentStatus> {
    return this._client.post('/documents/add', { body, ...options });
  }

  /**
   * Retrieves a document by provider and resource_id.
   *
   * @example
   * ```ts
   * const document = await client.documents.get(
   *   'collections',
   *   'resource_id',
   * );
   * ```
   */
  get(
    source:
      | 'collections'
      | 'web_crawler'
      | 'notion'
      | 'slack'
      | 'google_calendar'
      | 'reddit'
      | 'box'
      | 'google_drive'
      | 'airtable'
      | 'algolia'
      | 'amplitude'
      | 'asana'
      | 'ashby'
      | 'bamboohr'
      | 'basecamp'
      | 'bubbles'
      | 'calendly'
      | 'confluence'
      | 'clickup'
      | 'datadog'
      | 'deel'
      | 'discord'
      | 'dropbox'
      | 'exa'
      | 'facebook'
      | 'front'
      | 'github'
      | 'gitlab'
      | 'google_docs'
      | 'google_mail'
      | 'google_sheet'
      | 'hubspot'
      | 'jira'
      | 'linear'
      | 'microsoft_teams'
      | 'mixpanel'
      | 'monday'
      | 'outlook'
      | 'perplexity'
      | 'rippling'
      | 'salesforce'
      | 'segment'
      | 'todoist'
      | 'twitter'
      | 'zoom',
    resourceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Document> {
    return this._client.get(`/documents/get/${source}/${resourceId}`, options);
  }

  /**
   * This endpoint shows the indexing progress of documents, both by provider and
   * total.
   *
   * @example
   * ```ts
   * const response = await client.documents.status();
   * ```
   */
  status(options?: Core.RequestOptions): Core.APIPromise<DocumentStatusResponse> {
    return this._client.get('/documents/status', options);
  }

  /**
   * This endpoint will upload a file to the index and return a document ID. The file
   * will be processed in the background and the document will be available for
   * querying once the processing is complete. You can use the `document_id` to query
   * the document later, and check the status of the document.
   *
   * @example
   * ```ts
   * const documentStatus = await client.documents.upload({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  upload(body: DocumentUploadParams, options?: Core.RequestOptions): Core.APIPromise<DocumentStatus> {
    return this._client.post('/documents/upload', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export class DocumentsCursorPage extends CursorPage<Document> {}

export interface Document {
  resource_id: string;

  source:
    | 'collections'
    | 'web_crawler'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'reddit'
    | 'box'
    | 'google_drive'
    | 'airtable'
    | 'algolia'
    | 'amplitude'
    | 'asana'
    | 'ashby'
    | 'bamboohr'
    | 'basecamp'
    | 'bubbles'
    | 'calendly'
    | 'confluence'
    | 'clickup'
    | 'datadog'
    | 'deel'
    | 'discord'
    | 'dropbox'
    | 'exa'
    | 'facebook'
    | 'front'
    | 'github'
    | 'gitlab'
    | 'google_docs'
    | 'google_mail'
    | 'google_sheet'
    | 'hubspot'
    | 'jira'
    | 'linear'
    | 'microsoft_teams'
    | 'mixpanel'
    | 'monday'
    | 'outlook'
    | 'perplexity'
    | 'rippling'
    | 'salesforce'
    | 'segment'
    | 'todoist'
    | 'twitter'
    | 'zoom';

  metadata?: Document.Metadata;

  /**
   * The relevance of the resource to the query
   */
  score?: number | null;
}

export namespace Document {
  export interface Metadata {
    events?: Array<Metadata.Event>;

    indexed_at?: string | null;

    last_modified?: string | null;

    status?: 'pending' | 'processing' | 'completed' | 'failed';

    [k: string]: unknown;
  }

  export namespace Metadata {
    export interface Event {
      message: string;

      type: 'error' | 'warning' | 'info' | 'success';

      time?: string;
    }
  }
}

export interface DocumentStatus {
  /**
   * @deprecated Deprecated: refer to documents by source and resource_id instead
   */
  id: number;

  resource_id: string;

  source:
    | 'collections'
    | 'web_crawler'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'reddit'
    | 'box'
    | 'google_drive'
    | 'airtable'
    | 'algolia'
    | 'amplitude'
    | 'asana'
    | 'ashby'
    | 'bamboohr'
    | 'basecamp'
    | 'bubbles'
    | 'calendly'
    | 'confluence'
    | 'clickup'
    | 'datadog'
    | 'deel'
    | 'discord'
    | 'dropbox'
    | 'exa'
    | 'facebook'
    | 'front'
    | 'github'
    | 'gitlab'
    | 'google_docs'
    | 'google_mail'
    | 'google_sheet'
    | 'hubspot'
    | 'jira'
    | 'linear'
    | 'microsoft_teams'
    | 'mixpanel'
    | 'monday'
    | 'outlook'
    | 'perplexity'
    | 'rippling'
    | 'salesforce'
    | 'segment'
    | 'todoist'
    | 'twitter'
    | 'zoom';

  status: 'pending' | 'processing' | 'completed' | 'failed';
}

export interface DocumentStatusResponse {
  providers: Record<string, Record<string, number>>;

  total: Record<string, number>;
}

export interface DocumentListParams extends CursorPageParams {
  /**
   * Filter documents by collection.
   */
  collection?: string | null;

  /**
   * Filter documents by source.
   */
  source?:
    | 'collections'
    | 'web_crawler'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'reddit'
    | 'box'
    | 'google_drive'
    | 'airtable'
    | 'algolia'
    | 'amplitude'
    | 'asana'
    | 'ashby'
    | 'bamboohr'
    | 'basecamp'
    | 'bubbles'
    | 'calendly'
    | 'confluence'
    | 'clickup'
    | 'datadog'
    | 'deel'
    | 'discord'
    | 'dropbox'
    | 'exa'
    | 'facebook'
    | 'front'
    | 'github'
    | 'gitlab'
    | 'google_docs'
    | 'google_mail'
    | 'google_sheet'
    | 'hubspot'
    | 'jira'
    | 'linear'
    | 'microsoft_teams'
    | 'mixpanel'
    | 'monday'
    | 'outlook'
    | 'perplexity'
    | 'rippling'
    | 'salesforce'
    | 'segment'
    | 'todoist'
    | 'twitter'
    | 'zoom'
    | null;
}

export interface DocumentAddParams {
  /**
   * Full text of the document.
   */
  text: string;

  /**
   * The collection to add the document to for easier retrieval.
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
   * The resource ID to add the document to. If not provided, a new resource ID will
   * be generated. If provided, the document will be updated if it already exists.
   */
  resource_id?: string;

  /**
   * Title of the document.
   */
  title?: string | null;
}

export interface DocumentUploadParams {
  /**
   * The file to ingest.
   */
  file: Core.Uploadable;

  /**
   * The collection to add the document to.
   */
  collection?: string | null;
}

Documents.DocumentsCursorPage = DocumentsCursorPage;

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentStatus as DocumentStatus,
    type DocumentStatusResponse as DocumentStatusResponse,
    DocumentsCursorPage as DocumentsCursorPage,
    type DocumentListParams as DocumentListParams,
    type DocumentAddParams as DocumentAddParams,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
