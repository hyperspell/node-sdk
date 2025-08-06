// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperspell-mcp/filtering';
import { Metadata, asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'memories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/memories/get/{source}/{resource_id}',
  operationId: 'get_memory_memories_get__source___resource_id__get',
};

export const tool: Tool = {
  name: 'get_memory',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis tool lets you retrieve a memory that has been previously indexed.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/memory',\n  $defs: {\n    memory: {\n      type: 'object',\n      title: 'Resource',\n      properties: {\n        resource_id: {\n          type: 'string',\n          title: 'Resource Id'\n        },\n        source: {\n          type: 'string',\n          title: 'DocumentProviders',\n          enum: [            'collections',\n            'vault',\n            'web_crawler',\n            'notion',\n            'slack',\n            'google_calendar',\n            'reddit',\n            'box',\n            'google_drive',\n            'airtable',\n            'algolia',\n            'amplitude',\n            'asana',\n            'ashby',\n            'bamboohr',\n            'basecamp',\n            'bubbles',\n            'calendly',\n            'confluence',\n            'clickup',\n            'datadog',\n            'deel',\n            'discord',\n            'dropbox',\n            'exa',\n            'facebook',\n            'front',\n            'github',\n            'gitlab',\n            'google_docs',\n            'google_mail',\n            'google_sheet',\n            'hubspot',\n            'jira',\n            'linear',\n            'microsoft_teams',\n            'mixpanel',\n            'monday',\n            'outlook',\n            'perplexity',\n            'rippling',\n            'salesforce',\n            'segment',\n            'todoist',\n            'twitter',\n            'zoom'\n          ]\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata',\n          properties: {\n            created_at: {\n              type: 'string',\n              title: 'Created At',\n              format: 'date-time'\n            },\n            events: {\n              type: 'array',\n              title: 'Events',\n              items: {\n                type: 'object',\n                title: 'Notification',\n                properties: {\n                  message: {\n                    type: 'string',\n                    title: 'Message'\n                  },\n                  type: {\n                    type: 'string',\n                    title: 'NotificationType',\n                    enum: [                      'error',\n                      'warning',\n                      'info',\n                      'success'\n                    ]\n                  },\n                  time: {\n                    type: 'string',\n                    title: 'Time',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'message',\n                  'type'\n                ]\n              }\n            },\n            indexed_at: {\n              type: 'string',\n              title: 'Indexed At',\n              format: 'date-time'\n            },\n            last_modified: {\n              type: 'string',\n              title: 'Last Modified',\n              format: 'date-time'\n            },\n            status: {\n              type: 'string',\n              title: 'DocumentStatus',\n              enum: [                'pending',\n                'processing',\n                'completed',\n                'failed'\n              ]\n            },\n            url: {\n              type: 'string',\n              title: 'Url'\n            }\n          }\n        },\n        score: {\n          type: 'number',\n          title: 'Score',\n          description: 'The relevance of the resource to the query'\n        },\n        title: {\n          type: 'string',\n          title: 'Title'\n        }\n      },\n      required: [        'resource_id',\n        'source'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      source: {
        type: 'string',
        title: 'DocumentProviders',
        enum: [
          'collections',
          'vault',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['source', 'resource_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const { source, resource_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.memories.get(source, resource_id)));
};

export default { metadata, tool, handler };
