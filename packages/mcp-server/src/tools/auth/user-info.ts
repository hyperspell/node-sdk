// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperspell-mcp/filtering';
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
  name: 'user_info',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet basic info about the current user, including which integrations are currently enabled and which ones are available.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'User',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id',\n      description: 'The user\\'s id'\n    },\n    app: {\n      type: 'string',\n      title: 'App',\n      description: 'The Hyperspell app\\'s id this user belongs to'\n    },\n    available_integrations: {\n      type: 'array',\n      title: 'Available Integrations',\n      description: 'All integrations available for the app',\n      items: {\n        type: 'string',\n        title: 'DocumentProviders',\n        enum: [          'collections',\n          'web_crawler',\n          'notion',\n          'slack',\n          'google_calendar',\n          'reddit',\n          'box',\n          'google_drive',\n          'airtable',\n          'algolia',\n          'amplitude',\n          'asana',\n          'ashby',\n          'bamboohr',\n          'basecamp',\n          'bubbles',\n          'calendly',\n          'confluence',\n          'clickup',\n          'datadog',\n          'deel',\n          'discord',\n          'dropbox',\n          'exa',\n          'facebook',\n          'front',\n          'github',\n          'gitlab',\n          'google_docs',\n          'google_mail',\n          'google_sheet',\n          'hubspot',\n          'jira',\n          'linear',\n          'microsoft_teams',\n          'mixpanel',\n          'monday',\n          'outlook',\n          'perplexity',\n          'rippling',\n          'salesforce',\n          'segment',\n          'todoist',\n          'twitter',\n          'zoom'\n        ]\n      }\n    },\n    installed_integrations: {\n      type: 'array',\n      title: 'Installed Integrations',\n      description: 'All integrations installed for the user',\n      items: {\n        type: 'string',\n        title: 'DocumentProviders',\n        enum: [          'collections',\n          'web_crawler',\n          'notion',\n          'slack',\n          'google_calendar',\n          'reddit',\n          'box',\n          'google_drive',\n          'airtable',\n          'algolia',\n          'amplitude',\n          'asana',\n          'ashby',\n          'bamboohr',\n          'basecamp',\n          'bubbles',\n          'calendly',\n          'confluence',\n          'clickup',\n          'datadog',\n          'deel',\n          'discord',\n          'dropbox',\n          'exa',\n          'facebook',\n          'front',\n          'github',\n          'gitlab',\n          'google_docs',\n          'google_mail',\n          'google_sheet',\n          'hubspot',\n          'jira',\n          'linear',\n          'microsoft_teams',\n          'mixpanel',\n          'monday',\n          'outlook',\n          'perplexity',\n          'rippling',\n          'salesforce',\n          'segment',\n          'todoist',\n          'twitter',\n          'zoom'\n        ]\n      }\n    },\n    token_expiration: {\n      type: 'string',\n      title: 'Token Expiration',\n      description: 'The expiration time of the user token used to make the request',\n      format: 'date-time'\n    }\n  },\n  required: [    'id',\n    'app',\n    'available_integrations',\n    'installed_integrations',\n    'token_expiration'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.auth.me()));
};

export default { metadata, tool, handler };
