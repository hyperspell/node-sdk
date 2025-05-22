// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type CursorPageParams, CursorPageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Auth, AuthMeResponse, AuthUserTokenParams, Token } from './resources/auth';
import {
  Collection,
  CollectionCreateParams,
  CollectionListParams,
  CollectionListResponse,
  CollectionListResponsesCursorPage,
  Collections,
} from './resources/collections';
import {
  Document,
  DocumentAddParams,
  DocumentAddURLParams,
  DocumentGetResponse,
  DocumentListParams,
  DocumentListResponse,
  DocumentListResponsesCursorPage,
  DocumentStatus,
  DocumentUploadParams,
  Documents,
} from './resources/documents';
import { Query, QuerySearchParams, QuerySearchResponse } from './resources/query';
import { IntegrationRevokeResponse, Integrations } from './resources/integrations/integrations';

export interface ClientOptions {
  /**
   * Either an API Key or User Token to authenticate a specific user of your app.
   */
  apiKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['HYPERSPELL_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Hyperspell API.
 */
export class Hyperspell extends Core.APIClient {
  apiKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Hyperspell API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['HYPERSPELL_TOKEN'] ?? null]
   * @param {string} [opts.baseURL=process.env['HYPERSPELL_BASE_URL'] ?? https://api.hyperspell.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('HYPERSPELL_BASE_URL'),
    apiKey = Core.readEnv('HYPERSPELL_TOKEN') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.hyperspell.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  integrations: API.Integrations = new API.Integrations(this);
  documents: API.Documents = new API.Documents(this);
  collections: API.Collections = new API.Collections(this);
  query: API.Query = new API.Query(this);
  auth: API.Auth = new API.Auth(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.apiKey && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the apiKey to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKey == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  static Hyperspell = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static HyperspellError = Errors.HyperspellError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Hyperspell.Integrations = Integrations;
Hyperspell.Documents = Documents;
Hyperspell.DocumentListResponsesCursorPage = DocumentListResponsesCursorPage;
Hyperspell.Collections = Collections;
Hyperspell.CollectionListResponsesCursorPage = CollectionListResponsesCursorPage;
Hyperspell.Query = Query;
Hyperspell.Auth = Auth;
export declare namespace Hyperspell {
  export type RequestOptions = Core.RequestOptions;

  export import CursorPage = Pagination.CursorPage;
  export { type CursorPageParams as CursorPageParams, type CursorPageResponse as CursorPageResponse };

  export { Integrations as Integrations, type IntegrationRevokeResponse as IntegrationRevokeResponse };

  export {
    Documents as Documents,
    type Document as Document,
    type DocumentStatus as DocumentStatus,
    type DocumentListResponse as DocumentListResponse,
    type DocumentGetResponse as DocumentGetResponse,
    DocumentListResponsesCursorPage as DocumentListResponsesCursorPage,
    type DocumentListParams as DocumentListParams,
    type DocumentAddParams as DocumentAddParams,
    type DocumentAddURLParams as DocumentAddURLParams,
    type DocumentUploadParams as DocumentUploadParams,
  };

  export {
    Collections as Collections,
    type Collection as Collection,
    type CollectionListResponse as CollectionListResponse,
    CollectionListResponsesCursorPage as CollectionListResponsesCursorPage,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionListParams as CollectionListParams,
  };

  export {
    Query as Query,
    type QuerySearchResponse as QuerySearchResponse,
    type QuerySearchParams as QuerySearchParams,
  };

  export {
    Auth as Auth,
    type Token as Token,
    type AuthMeResponse as AuthMeResponse,
    type AuthUserTokenParams as AuthUserTokenParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  HyperspellError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Hyperspell;
