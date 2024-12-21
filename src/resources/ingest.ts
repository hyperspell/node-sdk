// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Ingest extends APIResource {
  /**
   * Add a document to the index.
   */
  add(body: IngestAddParams, options?: Core.RequestOptions): Core.APIPromise<IngestAddResponse> {
    return this._client.post('/ingest', { body, ...options });
  }

  /**
   * Ingest File
   */
  file(body: IngestFileParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/ingest_file', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface IngestAddResponse {
  document_id: string;

  status: 'processing' | 'done';
}

export type IngestFileResponse = unknown;

export interface IngestAddParams {
  /**
   * Date of the document. Depending on the document, this could be the creation date
   * or date the document was last updated (eg. for a chat transcript, this would be
   * the date of the last message). This helps the ranking algorithm and allows you
   * to filter by date range.
   */
  date?: string | null;

  /**
   * Metadata to attach to the document. This can be used to store additional
   * information about the document.
   */
  metadata?: Record<
    string,
    string | number | boolean | Array<string> | Array<number> | Array<number> | Array<boolean>
  >;

  /**
   * Namespace to assign this document to. This can be for example a specific
   * conversation that it is scoped to
   */
  namespace?: string | null;

  /**
   * Organization ID to assign this document to.
   */
  org_id?: string | null;

  /**
   * Full text of the document.
   */
  text?: string | null;

  /**
   * Title of the document.
   */
  title?: string | null;

  /**
   * Type of the document. This is optional, but helps with parsing the document.
   */
  type?: 'chat' | 'email' | 'generic' | 'transcript' | 'legal';

  /**
   * Source URL of the document. If text is not provided and URL is publicly
   * accessible, Hyperspell will retrieve the document from this URL.
   */
  url?: string | null;

  /**
   * User ID to assign this document to.
   */
  user_id?: string | null;

  /**
   * Visibility of the document. If visibility is set to USER, then `user_id` must be
   * present, and the document will only be visible to this user. If visibility is
   * set to `org`, then `org_id` must be present and the document will be visible to
   * all users in the same organization.
   */
  visibility?: 'user' | 'org' | 'app' | 'system';
}

export interface IngestFileParams {
  data: IngestFileParams.Data;

  file: Core.Uploadable;
}

export namespace IngestFileParams {
  export interface Data {
    /**
     * Date of the document. Depending on the document, this could be the creation date
     * or date the document was last updated (eg. for a chat transcript, this would be
     * the date of the last message). This helps the ranking algorithm and allows you
     * to filter by date range.
     */
    date?: string | null;

    /**
     * Metadata to attach to the document. This can be used to store additional
     * information about the document.
     */
    metadata?: Record<
      string,
      string | number | boolean | Array<string> | Array<number> | Array<number> | Array<boolean>
    >;

    /**
     * Namespace to assign this document to. This can be for example a specific
     * conversation that it is scoped to
     */
    namespace?: string | null;

    /**
     * Organization ID to assign this document to.
     */
    org_id?: string | null;

    /**
     * Full text of the document.
     */
    text?: string | null;

    /**
     * Title of the document.
     */
    title?: string | null;

    /**
     * Type of the document. This is optional, but helps with parsing the document.
     */
    type?: 'chat' | 'email' | 'generic' | 'transcript' | 'legal';

    /**
     * Source URL of the document. If text is not provided and URL is publicly
     * accessible, Hyperspell will retrieve the document from this URL.
     */
    url?: string | null;

    /**
     * User ID to assign this document to.
     */
    user_id?: string | null;

    /**
     * Visibility of the document. If visibility is set to USER, then `user_id` must be
     * present, and the document will only be visible to this user. If visibility is
     * set to `org`, then `org_id` must be present and the document will be visible to
     * all users in the same organization.
     */
    visibility?: 'user' | 'org' | 'app' | 'system';
  }
}

export declare namespace Ingest {
  export {
    type IngestAddResponse as IngestAddResponse,
    type IngestFileResponse as IngestFileResponse,
    type IngestAddParams as IngestAddParams,
    type IngestFileParams as IngestFileParams,
  };
}
