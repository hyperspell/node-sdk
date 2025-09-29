// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Slack extends APIResource {
  /**
   * List Slack conversations accessible to the user via the live Nango connection.
   *
   * Returns minimal channel metadata suitable for selection UIs. If required scopes
   * are missing, Slack's error is propagated with details.
   *
   * Supports filtering by channels, including/excluding private channels, DMs, group
   * DMs, and archived channels based on the provided search options.
   *
   * @example
   * ```ts
   * const slacks = await client.integrations.slack.list();
   * ```
   */
  list(query?: SlackListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: SlackListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/integrations/slack/list', { query, ...options });
  }
}

export type SlackListResponse = unknown;

export interface SlackListParams {
  /**
   * List of Slack channels to include (by id, name, or #name).
   */
  channels?: Array<string>;

  /**
   * If set, pass 'exclude_archived' to Slack. If None, omit the param.
   */
  exclude_archived?: boolean | null;

  /**
   * Include direct messages (im) when listing conversations.
   */
  include_dms?: boolean;

  /**
   * Include group DMs (mpim) when listing conversations.
   */
  include_group_dms?: boolean;

  /**
   * Include private channels when constructing Slack 'types'.
   */
  include_private?: boolean;
}

export declare namespace Slack {
  export { type SlackListResponse as SlackListResponse, type SlackListParams as SlackListParams };
}
