// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Auth extends APIResource {
  /**
   * Use this endpoing to create a user token for a specific user. This token can be
   * safely passed to your user-facing front-end.
   */
  userToken(
    body: AuthUserTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthUserTokenResponse> {
    return this._client.post('/auth/user_token', { body, ...options });
  }
}

export interface AuthUserTokenResponse {
  token: string;

  expires_at: string;
}

export interface AuthUserTokenParams {
  user_id: string;
}

export declare namespace Auth {
  export {
    type AuthUserTokenResponse as AuthUserTokenResponse,
    type AuthUserTokenParams as AuthUserTokenParams,
  };
}
