// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/auth/me',
  operationId: 'user_info_auth_me_get',
};

export const tool: Tool = {
  name: 'me_auth',
  description: 'Endpoint to get basic user data.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.auth.me());
};

export default { metadata, tool, handler };
