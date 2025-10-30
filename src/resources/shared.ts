// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface QueryResult {
  documents: Array<QueryResult.Document>;

  /**
   * The answer to the query, if the request was set to answer.
   */
  answer?: string | null;

  /**
   * Errors that occurred during the query. These are meant to help the developer
   * debug the query, and are not meant to be shown to the user.
   */
  errors?: Array<{ [key: string]: string }> | null;

  /**
   * The ID of the query. This can be used to retrieve the query later, or add
   * feedback to it. If the query failed, this will be None.
   */
  query_id?: string | null;

  /**
   * The average score of the query feedback, if any.
   */
  score?: number | null;
}

export namespace QueryResult {
  export interface Document {
    resource_id: string;

    source:
      | 'collections'
      | 'vault'
      | 'web_crawler'
      | 'notion'
      | 'slack'
      | 'google_calendar'
      | 'reddit'
      | 'box'
      | 'google_drive'
      | 'airtable'
      | 'algolia'
      | 'amplitude'
      | 'asana'
      | 'ashby'
      | 'bamboohr'
      | 'basecamp'
      | 'bubbles'
      | 'calendly'
      | 'confluence'
      | 'clickup'
      | 'datadog'
      | 'deel'
      | 'discord'
      | 'dropbox'
      | 'exa'
      | 'facebook'
      | 'front'
      | 'github'
      | 'gitlab'
      | 'google_docs'
      | 'google_mail'
      | 'google_sheet'
      | 'hubspot'
      | 'jira'
      | 'linear'
      | 'microsoft_teams'
      | 'mixpanel'
      | 'monday'
      | 'outlook'
      | 'perplexity'
      | 'rippling'
      | 'salesforce'
      | 'segment'
      | 'todoist'
      | 'twitter'
      | 'zoom';

    metadata?: Document.Metadata;

    /**
     * The relevance of the resource to the query
     */
    score?: number | null;

    title?: string | null;
  }

  export namespace Document {
    export interface Metadata {
      created_at?: string | null;

      events?: Array<Metadata.Event>;

      indexed_at?: string | null;

      last_modified?: string | null;

      status?: 'pending' | 'processing' | 'completed' | 'failed';

      url?: string | null;

      [k: string]: unknown;
    }

    export namespace Metadata {
      export interface Event {
        message: string;

        type: 'error' | 'warning' | 'info' | 'success';

        time?: string;
      }
    }
  }
}
