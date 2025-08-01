// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hyperspell-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperspell from 'hyperspell';

export const metadata: Metadata = {
  resource: 'memories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/memories/query',
  operationId: 'query_memories_memories_query_post',
};

export const tool: Tool = {
  name: 'search',
  description:
    "Search all memories indexed by Hyperspell. Set 'answer' to true to directly answer the query, or to 'false' to simply get all memories related to the query.",
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        title: 'Query',
        description: 'Query to run.',
      },
      answer: {
        type: 'boolean',
        title: 'Answer',
        description: 'If true, the query will be answered along with matching source documents.',
      },
      max_results: {
        type: 'integer',
        title: 'Max Results',
        description: 'Maximum number of results to return.',
      },
      options: {
        type: 'object',
        title: 'QueryOptions',
        description: 'Search options for the query.',
        properties: {
          after: {
            type: 'string',
            title: 'After',
            description: 'Only query documents created on or after this date.',
            format: 'date-time',
          },
          answer_model: {
            type: 'string',
            title: 'AnswerModel',
            description: 'Model to use for answer generation when answer=True',
            enum: ['llama-3.1', 'gemma2', 'qwen-qwq', 'mistral-saba', 'llama-4-scout', 'deepseek-r1'],
          },
          before: {
            type: 'string',
            title: 'Before',
            description: 'Only query documents created before this date.',
            format: 'date-time',
          },
          box: {
            type: 'object',
            title: 'BoxSearchOptions',
            description: 'Search options for Box',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
          collections: {
            type: 'object',
            title: 'VaultSearchOptions',
            description: 'Search options for vault',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
          google_calendar: {
            type: 'object',
            title: 'GoogleCalendarSearchOptions',
            description: 'Search options for Google Calendar',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              calendar_id: {
                type: 'string',
                title: 'Calendar Id',
                description:
                  'The ID of the calendar to search. If not provided, it will use the ID of the default calendar. You can get the list of calendars with the `/integrations/google_calendar/list` endpoint.',
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
          google_drive: {
            type: 'object',
            title: 'GoogleDriveSearchOptions',
            description: 'Search options for Google Drive',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
          google_mail: {
            type: 'object',
            title: 'GmailSearchOptions',
            description: 'Search options for Gmail',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              label_ids: {
                type: 'array',
                title: 'Label Ids',
                description:
                  "List of label IDs to filter messages (e.g., ['INBOX', 'SENT', 'DRAFT']). Multiple labels are combined with OR logic - messages matching ANY specified label will be returned. If empty, no label filtering is applied (searches all accessible messages).",
                items: {
                  type: 'string',
                },
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
          max_results: {
            type: 'integer',
            title: 'Max Results',
            description: 'Maximum number of results to return.',
          },
          notion: {
            type: 'object',
            title: 'NotionSearchOptions',
            description: 'Search options for Notion',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              notion_page_ids: {
                type: 'array',
                title: 'Notion Page Ids',
                description:
                  'List of Notion page IDs to search. If not provided, all pages in the workspace will be searched.',
                items: {
                  type: 'string',
                },
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
          reddit: {
            type: 'object',
            title: 'RedditSearchOptions',
            description: 'Search options for Reddit',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              period: {
                type: 'string',
                title: 'Period',
                description: "The time period to search. Defaults to 'month'.",
                enum: ['hour', 'day', 'week', 'month', 'year', 'all'],
              },
              sort: {
                type: 'string',
                title: 'Sort',
                description: "The sort order of the posts. Defaults to 'relevance'.",
                enum: ['relevance', 'new', 'hot', 'top', 'comments'],
              },
              subreddit: {
                type: 'string',
                title: 'Subreddit',
                description:
                  'The subreddit to search. If not provided, the query will be searched for in all subreddits.',
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
          slack: {
            type: 'object',
            title: 'SlackSearchOptions',
            description: 'Search options for Slack',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              channels: {
                type: 'array',
                title: 'Channels',
                description:
                  'List of Slack channels to search. If not provided, all channels in the workspace will be searched.',
                items: {
                  type: 'string',
                },
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
          web_crawler: {
            type: 'object',
            title: 'WebCrawlerSearchOptions',
            description: 'Search options for Web Crawler',
            properties: {
              after: {
                type: 'string',
                title: 'After',
                description: 'Only query documents created on or after this date.',
                format: 'date-time',
              },
              before: {
                type: 'string',
                title: 'Before',
                description: 'Only query documents created before this date.',
                format: 'date-time',
              },
              max_depth: {
                type: 'integer',
                title: 'Max Depth',
                description: 'Maximum depth to crawl from the starting URL',
              },
              url: {
                anyOf: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'object',
                    title: 'NotGiven',
                    description: 'Sentinel object to indicate that a search option is not set',
                  },
                ],
                title: 'Url',
                description: 'The URL to crawl',
              },
              weight: {
                type: 'number',
                title: 'Weight',
                description:
                  'Weight of results from this source. A weight greater than 1.0 means more results from this source will be returned, a weight less than 1.0 means fewer results will be returned. This will only affect results if multiple sources are queried at the same time.',
              },
            },
          },
        },
      },
      sources: {
        type: 'array',
        title: 'Sources',
        description: 'Only query documents from these sources.',
        items: {
          type: 'string',
          title: 'DocumentProviders',
          enum: [
            'collections',
            'vault',
            'web_crawler',
            'notion',
            'slack',
            'google_calendar',
            'reddit',
            'box',
            'google_drive',
            'airtable',
            'algolia',
            'amplitude',
            'asana',
            'ashby',
            'bamboohr',
            'basecamp',
            'bubbles',
            'calendly',
            'confluence',
            'clickup',
            'datadog',
            'deel',
            'discord',
            'dropbox',
            'exa',
            'facebook',
            'front',
            'github',
            'gitlab',
            'google_docs',
            'google_mail',
            'google_sheet',
            'hubspot',
            'jira',
            'linear',
            'microsoft_teams',
            'mixpanel',
            'monday',
            'outlook',
            'perplexity',
            'rippling',
            'salesforce',
            'segment',
            'todoist',
            'twitter',
            'zoom',
          ],
        },
      },
    },
    required: ['query'],
  },
  annotations: {},
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.memories.search(body));
};

export default { metadata, tool, handler };
