// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * ApiKeys Base Schema.
 */
export interface APIKey {
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

  created_at?: string;

  integrations?: Array<unknown>;

  optional_integrations?: Array<unknown> | null;

  settings?: Record<string, unknown>;
}
