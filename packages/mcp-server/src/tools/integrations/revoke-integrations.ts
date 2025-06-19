// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/integrations/{provider}/revoke',
  operationId: 'revoke_integration_integrations__provider__revoke_get',
};

export const tool: Tool = {
  name: 'revoke_integrations',
  description:
    "Revokes Hyperspell's access the given provider and deletes all stored credentials. It does not delete any cached or synced data.",
  inputSchema: {
    type: 'object',
    properties: {
      provider: {
        type: 'string',
        title: 'Provider',
      },
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const { provider, ...body } = args as any;
  return asTextContentResult(await client.integrations.revoke(provider));
};

export default { metadata, tool, handler };
