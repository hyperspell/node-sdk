// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/documents/list',
  operationId: 'list_documents_documents_list_get',
};

export const tool: Tool = {
  name: 'list_documents',
  description:
    'This endpoint allows you to paginate through all documents in the index.\nYou can filter the documents by title, date, metadata, etc.',
  inputSchema: {
    type: 'object',
    properties: {
      collection: {
        type: 'string',
        title: 'Collection',
        description: 'Filter documents by collection.',
      },
      cursor: {
        type: 'string',
        title: 'Cursor',
      },
      size: {
        type: 'integer',
        title: 'Size',
      },
      source: {
        type: 'string',
        title: 'DocumentProviders',
        description: 'Filter documents by source.',
        enum: [
          'collections',
          'web_crawler',
          'notion',
          'slack',
          'google_calendar',
          'reddit',
          'box',
          'google_drive',
          'airtable',
          'algolia',
          'amplitude',
          'asana',
          'ashby',
          'bamboohr',
          'basecamp',
          'bubbles',
          'calendly',
          'confluence',
          'clickup',
          'datadog',
          'deel',
          'discord',
          'dropbox',
          'exa',
          'facebook',
          'front',
          'github',
          'gitlab',
          'google_docs',
          'google_mail',
          'google_sheet',
          'hubspot',
          'jira',
          'linear',
          'microsoft_teams',
          'mixpanel',
          'monday',
          'outlook',
          'perplexity',
          'rippling',
          'salesforce',
          'segment',
          'todoist',
          'twitter',
          'zoom',
        ],
      },
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.documents.list(body));
};

export default { metadata, tool, handler };
