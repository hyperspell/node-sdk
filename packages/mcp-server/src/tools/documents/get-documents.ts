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
  httpPath: '/documents/get/{source}/{resource_id}',
  operationId: 'get_document_documents_get__source___resource_id__get',
};

export const tool: Tool = {
  name: 'get_documents',
  description: 'Retrieves a document by provider and resource_id.',
  inputSchema: {
    type: 'object',
    properties: {
      source: {
        type: 'string',
        title: 'DocumentProviders',
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
      resource_id: {
        type: 'string',
        title: 'Resource Id',
      },
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const { source, resource_id, ...body } = args as any;
  return asTextContentResult(await client.documents.get(source, resource_id));
};

export default { metadata, tool, handler };
