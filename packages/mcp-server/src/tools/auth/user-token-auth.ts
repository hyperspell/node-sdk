// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/user_token',
  operationId: 'generate_user_token_auth_user_token_post',
};

export const tool: Tool = {
  name: 'user_token_auth',
  description:
    'Use this endpoint to create a user token for a specific user.\nThis token can be safely passed to your user-facing front-end.',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
      },
      expires_in: {
        type: 'string',
        title: 'Expires In',
        description: "Token lifetime, e.g., '30m', '2h', '1d'. Defaults to 24 hours if not provided.",
      },
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.auth.userToken(body));
};

export default { metadata, tool, handler };
