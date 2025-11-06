// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperspell-mcp/filtering';
import { Metadata, asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/integrations/list',
  operationId: 'list_integrations_integrations_list_get',
};

export const tool: Tool = {
  name: 'list_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all available integrations\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/integration_list_response',\n  $defs: {\n    integration_list_response: {\n      type: 'object',\n      title: 'IntegrationListResponse',\n      properties: {\n        integrations: {\n          type: 'array',\n          title: 'Integrations',\n          items: {\n            type: 'object',\n            title: 'IntegrationInfo',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id',\n                description: 'The integration\\'s id'\n              },\n              allow_multiple_connections: {\n                type: 'boolean',\n                title: 'Allow Multiple Connections',\n                description: 'Whether the integration allows multiple connections'\n              },\n              auth_provider: {\n                type: 'string',\n                title: 'AuthProvider',\n                description: 'The integration\\'s auth provider',\n                enum: [                  'nango',\n                  'hyperspell',\n                  'composio',\n                  'whitelabel',\n                  'unified'\n                ]\n              },\n              icon: {\n                type: 'string',\n                title: 'Icon',\n                description: 'Generate a display name from the provider by capitalizing each word.'\n              },\n              name: {\n                type: 'string',\n                title: 'Name',\n                description: 'Generate a display name from the provider by capitalizing each word.'\n              },\n              provider: {\n                type: 'string',\n                title: 'DocumentProviders',\n                description: 'The integration\\'s provider',\n                enum: [                  'collections',\n                  'vault',\n                  'web_crawler',\n                  'notion',\n                  'slack',\n                  'google_calendar',\n                  'reddit',\n                  'box',\n                  'google_drive',\n                  'airtable',\n                  'algolia',\n                  'amplitude',\n                  'asana',\n                  'ashby',\n                  'bamboohr',\n                  'basecamp',\n                  'bubbles',\n                  'calendly',\n                  'confluence',\n                  'clickup',\n                  'datadog',\n                  'deel',\n                  'discord',\n                  'dropbox',\n                  'exa',\n                  'facebook',\n                  'front',\n                  'github',\n                  'gitlab',\n                  'google_docs',\n                  'google_mail',\n                  'google_sheet',\n                  'hubspot',\n                  'jira',\n                  'linear',\n                  'microsoft_teams',\n                  'mixpanel',\n                  'monday',\n                  'outlook',\n                  'perplexity',\n                  'rippling',\n                  'salesforce',\n                  'segment',\n                  'todoist',\n                  'twitter',\n                  'zoom'\n                ]\n              }\n            },\n            required: [              'id',\n              'allow_multiple_connections',\n              'auth_provider',\n              'icon',\n              'name',\n              'provider'\n            ]\n          }\n        }\n      },\n      required: [        'integrations'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.integrations.list()));
};

export default { metadata, tool, handler };
