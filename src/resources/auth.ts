// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Endpoint to delete user.
   */
  deleteUser(options?: RequestOptions): APIPromise<AuthDeleteUserResponse> {
    return this._client.delete('/auth/delete', options);
  }

  /**
   * Endpoint to get basic user data.
   */
  me(options?: RequestOptions): APIPromise<AuthMeResponse> {
    return this._client.get('/auth/me', options);
  }

  /**
   * Use this endpoint to create a user token for a specific user. This token can be
   * safely passed to your user-facing front-end.
   */
  userToken(body: AuthUserTokenParams, options?: RequestOptions): APIPromise<Token> {
    return this._client.post('/auth/user_token', { body, ...options });
  }
}

export interface Token {
  token: string;

  expires_at: string;
}

export interface AuthDeleteUserResponse {
  message: string;

  success: boolean;
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
    | 'collections'
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'box'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
  >;

  /**
   * All integrations installed for the user
   */
  installed_integrations: Array<
    | 'collections'
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'box'
    | 'google_drive'
    | 'vault'
    | 'web_crawler'
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
