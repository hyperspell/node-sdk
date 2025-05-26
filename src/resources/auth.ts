// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Auth extends APIResource {
  /**
   * Endpoint to get basic user data.
   */
  me(options?: Core.RequestOptions): Core.APIPromise<AuthMeResponse> {
    return this._client.get('/auth/me', options);
  }

  /**
   * Use this endpoint to create a user token for a specific user. This token can be
   * safely passed to your user-facing front-end.
   */
  userToken(body: AuthUserTokenParams, options?: Core.RequestOptions): Core.APIPromise<Token> {
    return this._client.post('/auth/user_token', { body, ...options });
  }
}

export interface Token {
  token: string;

  expires_at: string;
}

export interface AuthMeResponse {
  /**
   * The user's id
   */
  id: string;

  /**
   * The Hyperspell app's id this user belongs to
   */
  app: string;

  /**
   * All integrations available for the app
   */
  available_integrations: Array<
    | 'collections'
    | 'notion'
    | 'slack'
    | 'hubspot'
    | 'google_calendar'
    | 'reddit'
    | 'web_crawler'
    | 'box'
    | 'google_drive'
  >;

  /**
   * All integrations installed for the user
   */
  installed_integrations: Array<
    | 'collections'
    | 'notion'
    | 'slack'
    | 'hubspot'
    | 'google_calendar'
    | 'reddit'
    | 'web_crawler'
    | 'box'
    | 'google_drive'
  >;

  /**
   * The expiration time of the user token used to make the request
   */
  token_expiration: string | null;
}

export interface AuthUserTokenParams {
  user_id: string;
}

export declare namespace Auth {
  export {
    type Token as Token,
    type AuthMeResponse as AuthMeResponse,
    type AuthUserTokenParams as AuthUserTokenParams,
  };
}
