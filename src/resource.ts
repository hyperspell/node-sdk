// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Hyperspell } from './index';

export abstract class APIResource {
  protected _client: Hyperspell;

  constructor(client: Hyperspell) {
    this._client = client;
  }
}
