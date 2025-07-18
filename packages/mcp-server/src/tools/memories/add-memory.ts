// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperspell-mcp/filtering';
import { Metadata, asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'memories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/memories/add',
  operationId: 'add_memories_add_post',
};

export const tool: Tool = {
  name: 'add_memory',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis tool lets you add text, markdown, or JSON to the Hyperspell index so it can be searched later. It will return the `source` and `resource_id` that can be used to later retrieve the processed memory.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/memory_status',\n  $defs: {\n    memory_status: {\n      type: 'object',\n      title: 'DocumentStatusResponse',\n      properties: {\n        id: {\n          type: 'integer',\n          title: 'Id',\n          description: 'Deprecated: refer to documents by source and resource_id instead'\n        },\n        resource_id: {\n          type: 'string',\n          title: 'Resource Id'\n        },\n        source: {\n          type: 'string',\n          title: 'DocumentProviders',\n          enum: [            'collections',\n            'vault',\n            'web_crawler',\n            'notion',\n            'slack',\n            'google_calendar',\n            'reddit',\n            'box',\n            'google_drive',\n            'airtable',\n            'algolia',\n            'amplitude',\n            'asana',\n            'ashby',\n            'bamboohr',\n            'basecamp',\n            'bubbles',\n            'calendly',\n            'confluence',\n            'clickup',\n            'datadog',\n            'deel',\n            'discord',\n            'dropbox',\n            'exa',\n            'facebook',\n            'front',\n            'github',\n            'gitlab',\n            'google_docs',\n            'google_mail',\n            'google_sheet',\n            'hubspot',\n            'jira',\n            'linear',\n            'microsoft_teams',\n            'mixpanel',\n            'monday',\n            'outlook',\n            'perplexity',\n            'rippling',\n            'salesforce',\n            'segment',\n            'todoist',\n            'twitter',\n            'zoom'\n          ]\n        },\n        status: {\n          type: 'string',\n          title: 'DocumentStatus',\n          enum: [            'pending',\n            'processing',\n            'completed',\n            'failed'\n          ]\n        }\n      },\n      required: [        'id',\n        'resource_id',\n        'source',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        title: 'Text',
        description: 'Full text of the document.',
      },
      collection: {
        type: 'string',
        title: 'Collection',
        description: 'The collection to add the document to for easier retrieval.',
      },
      date: {
        type: 'string',
        title: 'Date',
        description:
          'Date of the document. Depending on the document, this could be the creation date or date the document was last updated (eg. for a chat transcript, this would be the date of the last message). This helps the ranking algorithm and allows you to filter by date range.',
        format: 'date-time',
      },
      resource_id: {
        type: 'string',
        title: 'Resource Id',
        description:
          'The resource ID to add the document to. If not provided, a new resource ID will be generated. If provided, the document will be updated if it already exists.',
      },
      title: {
        type: 'string',
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
    required: ['text'],
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.memories.add(body)));
};

export default { metadata, tool, handler };
