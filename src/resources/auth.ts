// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Use this endpoint to create a user token for a specific user. This token can be
   * safely passed to your user-facing front-end.
   *
   * @example
   * ```ts
   * const token = await client.auth.userToken({
   *   user_id: 'user_id',
   * });
   * ```
   */
  userToken(body: AuthUserTokenParams, options?: RequestOptions): APIPromise<Token> {
    return this._client.post('/auth/user_token', { body, ...options });
  }

  /**
   * Endpoint to get basic user data.
   *
   * @example
   * ```ts
   * const response = await client.auth.me();
   * ```
   */
  me(options?: RequestOptions): APIPromise<AuthMeResponse> {
    return this._client.get('/auth/me', options);
  }

  /**
   * Delete the calling user's data (GDPR erasure).
   *
   * The purge — external connection revokes plus the multi-table cascade delete —
   * runs in a background Temporal workflow; this returns `202 Accepted` + the
   * workflow id immediately, so a large account can't outrun the request timeout or
   * stall the API event loop.
   *
   * @example
   * ```ts
   * const response = await client.auth.deleteUser();
   * ```
   */
  deleteUser(options?: RequestOptions): APIPromise<AuthDeleteUserResponse> {
    return this._client.delete('/auth/delete', options);
  }
}

export interface Token {
  token: string;

  expires_at: string;
}

export interface AuthDeleteUserResponse {
  message: string;

  success: boolean;

  workflow_id: string;
}

export interface AuthMeResponse {
  /**
   * The user's id
   */
  id: string;

  /**
   * The Hyperspell app's id this user belongs to
   */
  app: AuthMeResponse.App;

  /**
   * All integrations available for the app
   */
  available_integrations: Array<
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
    | 'clickup'
  >;

  /**
   * All integrations installed for the user
   */
  installed_integrations: Array<
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
    | 'clickup'
  >;

  /**
   * The expiration time of the user token used to make the request
   */
  token_expiration: string | null;
}

export namespace AuthMeResponse {
  /**
   * The Hyperspell app's id this user belongs to
   */
  export interface App {
    /**
     * The Hyperspell app's id this user belongs to
     */
    id: string;

    /**
     * The app's icon
     */
    icon_url: string | null;

    /**
     * The app's name
     */
    name: string;

    /**
     * The app's redirect URL
     */
    redirect_url: string | null;
  }
}

export interface AuthUserTokenParams {
  user_id: string;

  /**
   * Token lifetime, e.g., '30m', '2h', '1d'. Defaults to 24 hours if not provided.
   * Maximum 30 days.
   */
  expires_in?: string | null;

  /**
   * Origin of the request, used for CSRF protection. If set, the token will only be
   * valid for requests originating from this origin.
   */
  origin?: string | null;
}

export declare namespace Auth {
  export {
    type Token as Token,
    type AuthDeleteUserResponse as AuthDeleteUserResponse,
    type AuthMeResponse as AuthMeResponse,
    type AuthUserTokenParams as AuthUserTokenParams,
  };
}
