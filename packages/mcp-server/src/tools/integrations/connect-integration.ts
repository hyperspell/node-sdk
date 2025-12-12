// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'hyperspell-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/integrations/{integration_id}/connect',
  operationId: 'connect_integration_integrations__integration_id__connect_get',
};

export const tool: Tool = {
  name: 'connect_integration',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a signed url to connect to a given integration. Use the `list_integrations` tool to find the correct `integration_id` for the required provider.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/integration_connect_response',\n  $defs: {\n    integration_connect_response: {\n      type: 'object',\n      title: 'ConnectResponse',\n      properties: {\n        expires_at: {\n          type: 'string',\n          title: 'Expires At',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string',\n          title: 'Url'\n        }\n      },\n      required: [        'expires_at',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      integration_id: {
        type: 'string',
        title: 'Integration Id',
      },
      redirect_url: {
        type: 'string',
        title: 'Redirect Url',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['integration_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const { integration_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.integrations.connect(integration_id, body)),
    );
  } catch (error) {
    if (error instanceof Hyperspell.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
