// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'collections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/collections/list',
  operationId: 'list_documents_collections_list_get',
};

export const tool: Tool = {
  name: 'list_collections',
  description:
    'This endpoint lists all collections, and how many documents are in each collection.\nAll documents that do not have a collection assigned are in the `null` collection.',
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        title: 'Cursor',
      },
      size: {
        type: 'integer',
        title: 'Size',
      },
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.collections.list(body));
};

export default { metadata, tool, handler };
