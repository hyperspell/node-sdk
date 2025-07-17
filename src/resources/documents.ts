// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Documents extends APIResource {}

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
}

export namespace Document {
  export interface Metadata {
    events?: Array<Metadata.Event>;

    indexed_at?: string | null;

    last_modified?: string | null;

    status?: 'pending' | 'processing' | 'completed' | 'failed';

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

export interface DocumentStatus {
  /**
   * @deprecated Deprecated: refer to documents by source and resource_id instead
   */
  id: number;

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

  status: 'pending' | 'processing' | 'completed' | 'failed';
}

export declare namespace Documents {
  export { type Document as Document, type DocumentStatus as DocumentStatus };
}
