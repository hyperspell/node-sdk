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
  httpPath: '/documents/add',
  operationId: 'add_documents_add_post',
};

export const tool: Tool = {
  name: 'add_documents',
  description:
    'Adds an arbitrary document to the index. This can be any text, email,\ncall transcript, etc. The document will be processed and made available for\nquerying once the processing is complete.',
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
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.documents.add(body));
};

export default { metadata, tool, handler };
