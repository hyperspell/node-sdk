// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Actions extends APIResource {
  /**
   * Add an emoji reaction to a message on a connected integration.
   */
  addReaction(
    body: ActionAddReactionParams,
    options?: RequestOptions,
  ): APIPromise<ActionAddReactionResponse> {
    return this._client.post('/actions/add_reaction', { body, ...options });
  }

  /**
   * Send a message to a channel or conversation on a connected integration.
   */
  sendMessage(
    body: ActionSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<ActionSendMessageResponse> {
    return this._client.post('/actions/send_message', { body, ...options });
  }
}

/**
 * Result from executing an integration action.
 */
export interface ActionAddReactionResponse {
  success: boolean;

  error?: string | null;

  provider_response?: { [key: string]: unknown } | null;
}

/**
 * Result from executing an integration action.
 */
export interface ActionSendMessageResponse {
  success: boolean;

  error?: string | null;

  provider_response?: { [key: string]: unknown } | null;
}

export interface ActionAddReactionParams {
  /**
   * Channel ID containing the message
   */
  channel: string;

  /**
   * Emoji name without colons (e.g., thumbsup)
   */
  name: string;

  /**
   * Integration provider (e.g., slack)
   */
  provider:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'box'
    | 'dropbox'
    | 'google_drive'
    | 'github'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_teams'
    | 'gmail_actions';

  /**
   * Message timestamp to react to
   */
  timestamp: string;

  /**
   * Connection ID. If omitted, auto-resolved from provider + user.
   */
  connection?: string | null;
}

export interface ActionSendMessageParams {
  /**
   * Integration provider (e.g., slack)
   */
  provider:
    | 'reddit'
    | 'notion'
    | 'slack'
    | 'google_calendar'
    | 'google_mail'
    | 'box'
    | 'dropbox'
    | 'google_drive'
    | 'github'
    | 'vault'
    | 'web_crawler'
    | 'trace'
    | 'microsoft_teams'
    | 'gmail_actions';

  /**
   * Message text
   */
  text: string;

  /**
   * Channel ID (required for Slack)
   */
  channel?: string | null;

  /**
   * Connection ID. If omitted, auto-resolved from provider + user.
   */
  connection?: string | null;

  /**
   * Parent message ID for threading (thread_ts for Slack)
   */
  parent?: string | null;
}

export declare namespace Actions {
  export {
    type ActionAddReactionResponse as ActionAddReactionResponse,
    type ActionSendMessageResponse as ActionSendMessageResponse,
    type ActionAddReactionParams as ActionAddReactionParams,
    type ActionSendMessageParams as ActionSendMessageParams,
  };
}
