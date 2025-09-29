// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type CursorPageParams, CursorPageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Auth, AuthDeleteUserResponse, AuthMeResponse, AuthUserTokenParams, Token } from './resources/auth';
import {
  Evaluate,
  EvaluateScoreHighlightParams,
  EvaluateScoreHighlightResponse,
  EvaluateScoreQueryParams,
  EvaluateScoreQueryResponse,
  Query,
} from './resources/evaluate';
import {
  Memories,
  MemoriesCursorPage,
  Memory,
  MemoryAddParams,
  MemoryDeleteResponse,
  MemoryListParams,
  MemorySearchParams,
  MemoryStatus,
  MemoryStatusResponse,
  MemoryUploadParams,
} from './resources/memories';
import { VaultListParams, VaultListResponse, VaultListResponsesCursorPage, Vaults } from './resources/vaults';
import { IntegrationRevokeResponse, Integrations } from './resources/integrations/integrations';

export interface ClientOptions {
  /**
   * Either an API Key or User Token to authenticate a specific user of your app.
   */
  apiKey?: string | undefined;

  /**
   * The id of the user making this request. Optional.
   */
  userId?: string | null | undefined;

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
   *
   * @unit milliseconds
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
  apiKey: string;
  userId: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Hyperspell API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['HYPERSPELL_TOKEN'] ?? undefined]
   * @param {string | null | undefined} [opts.userId]
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
    apiKey = Core.readEnv('HYPERSPELL_TOKEN'),
    userId = null,
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.HyperspellError(
        "The HYPERSPELL_TOKEN environment variable is missing or empty; either provide it, or instantiate the Hyperspell client with an apiKey option, like new Hyperspell({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      userId,
      ...opts,
      baseURL: baseURL || `https://api.hyperspell.com`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'https://api.hyperspell.com' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
    this.userId = userId;
  }

  integrations: API.Integrations = new API.Integrations(this);
  memories: API.Memories = new API.Memories(this);
  evaluate: API.Evaluate = new API.Evaluate(this);
  vaults: API.Vaults = new API.Vaults(this);
  auth: API.Auth = new API.Auth(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.hyperspell.com';
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...this.apiKeyAuth(opts),
      ...this.asUserAuth(opts),
    };
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected asUserAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.userId == null) {
      return {};
    }
    return { 'X-As-User': this.userId };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
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
Hyperspell.Memories = Memories;
Hyperspell.MemoriesCursorPage = MemoriesCursorPage;
Hyperspell.Evaluate = Evaluate;
Hyperspell.Vaults = Vaults;
Hyperspell.VaultListResponsesCursorPage = VaultListResponsesCursorPage;
Hyperspell.Auth = Auth;

export declare namespace Hyperspell {
  export type RequestOptions = Core.RequestOptions;

  export import CursorPage = Pagination.CursorPage;
  export { type CursorPageParams as CursorPageParams, type CursorPageResponse as CursorPageResponse };

  export { Integrations as Integrations, type IntegrationRevokeResponse as IntegrationRevokeResponse };

  export {
    Memories as Memories,
    type Memory as Memory,
    type MemoryStatus as MemoryStatus,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryStatusResponse as MemoryStatusResponse,
    MemoriesCursorPage as MemoriesCursorPage,
    type MemoryListParams as MemoryListParams,
    type MemoryAddParams as MemoryAddParams,
    type MemorySearchParams as MemorySearchParams,
    type MemoryUploadParams as MemoryUploadParams,
  };

  export {
    Evaluate as Evaluate,
    type Query as Query,
    type EvaluateScoreHighlightResponse as EvaluateScoreHighlightResponse,
    type EvaluateScoreQueryResponse as EvaluateScoreQueryResponse,
    type EvaluateScoreHighlightParams as EvaluateScoreHighlightParams,
    type EvaluateScoreQueryParams as EvaluateScoreQueryParams,
  };

  export {
    Vaults as Vaults,
    type VaultListResponse as VaultListResponse,
    VaultListResponsesCursorPage as VaultListResponsesCursorPage,
    type VaultListParams as VaultListParams,
  };

  export {
    Auth as Auth,
    type Token as Token,
    type AuthDeleteUserResponse as AuthDeleteUserResponse,
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
