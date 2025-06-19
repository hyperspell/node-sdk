// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'integrations.google_calendar',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/integrations/google_calendar/list',
  operationId: 'list_calendars_integrations_google_calendar_list_get',
};

export const tool: Tool = {
  name: 'list_integrations_google_calendar',
  description:
    'List available calendars for a user. This can be used to ie. populate a dropdown for the user to select a calendar.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.integrations.googleCalendar.list());
};

export default { metadata, tool, handler };
