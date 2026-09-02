// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Config extends APIResource {
  /**
   * Read the customer-editable generation config for the authenticated app.
   */
  get(options?: RequestOptions): APIPromise<ConfigGetResponse> {
    return this._client.get('/context-documents/config', options);
  }

  /**
   * Update the supplied generation settings.
   *
   * Changes apply to the next generation. This endpoint does not start a generation
   * or modify existing context documents.
   */
  update(body: ConfigUpdateParams, options?: RequestOptions): APIPromise<ConfigUpdateResponse> {
    return this._client.patch('/context-documents/config', { body, ...options });
  }

  /**
   * Reset customer-editable generation settings to their defaults.
   *
   * Existing context documents remain unchanged. `detected_domain` is retained and
   * used for future generations unless a new domain override is set.
   */
  reset(options?: RequestOptions): APIPromise<ConfigResetResponse> {
    return this._client.post('/context-documents/config/reset', options);
  }
}

/**
 * Brain-generation settings that customers can view and edit.
 */
export interface ConfigUpdateResponse {
  prompts: { [key: string]: unknown };

  source_weights: { [key: string]: string };

  structure: { [key: string]: unknown };

  detected_domain?: string | null;

  domain?: string | null;
}

/**
 * Brain-generation settings that customers can view and edit.
 */
export interface ConfigGetResponse {
  prompts: { [key: string]: unknown };

  source_weights: { [key: string]: string };

  structure: { [key: string]: unknown };

  detected_domain?: string | null;

  domain?: string | null;
}

/**
 * Brain-generation settings that customers can view and edit.
 */
export interface ConfigResetResponse {
  prompts: { [key: string]: unknown };

  source_weights: { [key: string]: string };

  structure: { [key: string]: unknown };

  detected_domain?: string | null;

  domain?: string | null;
}

export interface ConfigUpdateParams {
  company_prompts?: { [key: string]: string } | null;

  detection_prompt?: string | null;

  domain?: string | null;

  personal_prompt?: string | null;

  source_weights?: { [key: string]: string } | null;

  /**
   * Per-tier document definitions for custom generation.
   */
  structure?: ConfigUpdateParams.Structure | null;

  workstream_prompts?: { [key: string]: string } | null;
}

export namespace ConfigUpdateParams {
  /**
   * Per-tier document definitions for custom generation.
   */
  export interface Structure {
    company?: Array<Structure.Company> | null;

    workstream?: Array<Structure.Workstream> | null;
  }

  export namespace Structure {
    /**
     * One document in a context-tree tier: what to generate and how to retrieve for
     * it.
     */
    export interface Company {
      filename: string;

      key: string;

      prompt: string;

      search_queries: Array<string>;
    }

    /**
     * One document in a context-tree tier: what to generate and how to retrieve for
     * it.
     */
    export interface Workstream {
      filename: string;

      key: string;

      prompt: string;

      search_queries: Array<string>;
    }
  }
}

export declare namespace Config {
  export {
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigResetResponse as ConfigResetResponse,
    type ConfigUpdateParams as ConfigUpdateParams,
  };
}
