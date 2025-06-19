// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'integrations.web_crawler',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/integrations/web_crawler/index',
  operationId: 'crawl_website_integrations_web_crawler_index_get',
};

export const tool: Tool = {
  name: 'index_integrations_web_crawler',
  description: 'Recursively crawl a website to make it available for indexed search.',
  inputSchema: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        title: 'Url',
      },
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.integrations.webCrawler.index(body));
};

export default { metadata, tool, handler };
