// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/documents/status',
  operationId: 'get_indexing_status_documents_status_get',
};

export const tool: Tool = {
  name: 'status_documents',
  description: 'This endpoint shows the indexing progress of documents, both by provider and total.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.documents.status());
};

export default { metadata, tool, handler };
