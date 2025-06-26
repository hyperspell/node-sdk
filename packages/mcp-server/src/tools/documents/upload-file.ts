// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/documents/upload',
  operationId: 'upload_documents_upload_post',
};

export const tool: Tool = {
  name: 'upload_file',
  description:
    'This tool lets you upload a file to the Hyperspell index. It will return the `source` and `resource_id` that can be used to later retrieve the processed document.',
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        title: 'File',
        description: 'The file to ingest.',
      },
      collection: {
        type: 'string',
        title: 'Collection',
        description: 'The collection to add the document to.',
      },
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.documents.upload(body));
};

export default { metadata, tool, handler };
