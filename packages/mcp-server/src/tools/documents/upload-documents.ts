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
  name: 'upload_documents',
  description:
    'This endpoint will upload a file to the index and return a document ID.\nThe file will be processed in the background and the document will be available for querying once the processing is complete.\nYou can use the `document_id` to query the document later, and check the status of the document.',
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
