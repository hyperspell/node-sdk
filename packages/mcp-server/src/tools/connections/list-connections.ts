// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'hyperspell-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connections/list',
  operationId: 'list_connections_connections_list_get',
};

export const tool: Tool = {
  name: 'list_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet accounts the user has connected\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connection_list_response',\n  $defs: {\n    connection_list_response: {\n      type: 'object',\n      title: 'ListConnectionsResponse',\n      properties: {\n        connections: {\n          type: 'array',\n          title: 'Connections',\n          items: {\n            type: 'object',\n            title: 'ConnectionInfo',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id',\n                description: 'The connection\\'s id'\n              },\n              integration_id: {\n                type: 'string',\n                title: 'Integration Id',\n                description: 'The connection\\'s integration id'\n              },\n              label: {\n                type: 'string',\n                title: 'Label',\n                description: 'The connection\\'s label'\n              },\n              provider: {\n                type: 'string',\n                title: 'DocumentProviders',\n                description: 'The connection\\'s provider',\n                enum: [                  'collections',\n                  'vault',\n                  'web_crawler',\n                  'notion',\n                  'slack',\n                  'google_calendar',\n                  'reddit',\n                  'box',\n                  'google_drive',\n                  'airtable',\n                  'algolia',\n                  'amplitude',\n                  'asana',\n                  'ashby',\n                  'bamboohr',\n                  'basecamp',\n                  'bubbles',\n                  'calendly',\n                  'confluence',\n                  'clickup',\n                  'datadog',\n                  'deel',\n                  'discord',\n                  'dropbox',\n                  'exa',\n                  'facebook',\n                  'front',\n                  'github',\n                  'gitlab',\n                  'google_docs',\n                  'google_mail',\n                  'google_sheet',\n                  'hubspot',\n                  'jira',\n                  'linear',\n                  'microsoft_teams',\n                  'mixpanel',\n                  'monday',\n                  'outlook',\n                  'perplexity',\n                  'rippling',\n                  'salesforce',\n                  'segment',\n                  'todoist',\n                  'twitter',\n                  'zoom'\n                ]\n              }\n            },\n            required: [              'id',\n              'integration_id',\n              'label',\n              'provider'\n            ]\n          }\n        }\n      },\n      required: [        'connections'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.connections.list()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
