// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'hyperspell-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'memories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/memories/update/{source}/{resource_id}',
  operationId: 'update_memories_update__source___resource_id__post',
};

export const tool: Tool = {
  name: 'update_memory',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis tool lets you update memory in Hyperspell.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/memory_status',\n  $defs: {\n    memory_status: {\n      type: 'object',\n      title: 'DocumentStatusResponse',\n      properties: {\n        resource_id: {\n          type: 'string',\n          title: 'Resource Id'\n        },\n        source: {\n          type: 'string',\n          title: 'DocumentProviders',\n          enum: [            'collections',\n            'vault',\n            'web_crawler',\n            'notion',\n            'slack',\n            'google_calendar',\n            'reddit',\n            'box',\n            'google_drive',\n            'airtable',\n            'algolia',\n            'amplitude',\n            'asana',\n            'ashby',\n            'bamboohr',\n            'basecamp',\n            'bubbles',\n            'calendly',\n            'confluence',\n            'clickup',\n            'datadog',\n            'deel',\n            'discord',\n            'dropbox',\n            'exa',\n            'facebook',\n            'front',\n            'github',\n            'gitlab',\n            'google_docs',\n            'google_mail',\n            'google_sheet',\n            'hubspot',\n            'jira',\n            'linear',\n            'microsoft_teams',\n            'mixpanel',\n            'monday',\n            'outlook',\n            'perplexity',\n            'rippling',\n            'salesforce',\n            'segment',\n            'todoist',\n            'twitter',\n            'zoom'\n          ]\n        },\n        status: {\n          type: 'string',\n          title: 'DocumentStatus',\n          enum: [            'pending',\n            'processing',\n            'completed',\n            'failed'\n          ]\n        }\n      },\n      required: [        'resource_id',\n        'source',\n        'status'\n      ]\n    }\n  }\n}\n```",
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
      collection: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
            additionalProperties: true,
          },
        ],
        title: 'Collection',
        description: 'The collection to move the document to. Set to null to remove the collection.',
      },
      metadata: {
        anyOf: [
          {
            type: 'object',
            additionalProperties: true,
          },
          {
            type: 'object',
            additionalProperties: true,
          },
        ],
        title: 'Metadata',
        description:
          'Custom metadata for filtering. Keys must be alphanumeric with underscores, max 64 chars. Values must be string, number, or boolean. Will be merged with existing metadata.',
      },
      text: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
            additionalProperties: true,
          },
        ],
        title: 'Text',
        description: 'Full text of the document. If provided, the document will be re-indexed.',
      },
      title: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
            additionalProperties: true,
          },
        ],
        title: 'Title',
        description: 'Title of the document.',
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
  annotations: {},
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const { resource_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.memories.update(resource_id, body)));
  } catch (error) {
    if (error instanceof Hyperspell.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
