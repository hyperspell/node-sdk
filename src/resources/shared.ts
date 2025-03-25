// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * ApiKeys Base Schema.
 */
export interface APIKkey {
  app_id: number;

  scopes: Array<'all' | 'ingest' | 'query'>;

  secret: string;

  id?: number | null;

  /**
   * Apps Base Schema.
   */
  app?: App | null;

  created_at?: string;

  label?: string | null;

  revoked_at?: string | null;
}

/**
 * Apps Base Schema.
 */
export interface App {
  name: string;

  slug: string;

  user_id: string;

  id?: number | null;

  api_keys?: Array<APIKkey> | null;

  collections?: Array<unknown> | null;

  created_at?: string;

  integrations?: Array<unknown>;

  jwt_secret?: string;

  optional_integrations?: Array<unknown> | null;

  public_key?: string;

  settings?: unknown;
}
