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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch all memories indexed by Hyperspell. Set 'answer' to true to directly answer the query, or to 'false' to simply get all memories related to the query.",
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
      filter: {
        type: 'object',
        title: 'QueryOptions',
        description: 'DEPRECATED: Use options instead. This field will be removed in a future version.',
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
          },
          collections: {
            type: 'object',
            title: 'VaultSearchOptions',
            description: 'Search options for vault',
          },
          google_calendar: {
            type: 'object',
            title: 'GoogleCalendarSearchOptions',
            description: 'Search options for Google Calendar',
            properties: {
              calendar_id: {
                type: 'string',
                title: 'Calendar Id',
                description:
                  'The ID of the calendar to search. If not provided, it will use the ID of the default calendar. You can get the list of calendars with the `/integrations/google_calendar/list` endpoint.',
              },
            },
          },
          google_drive: {
            type: 'object',
            title: 'GoogleDriveSearchOptions',
            description: 'Search options for Google Drive',
          },
          google_mail: {
            type: 'object',
            title: 'GmailSearchOptions',
            description: 'Search options for Gmail',
            properties: {
              label_ids: {
                type: 'array',
                title: 'Label Ids',
                description:
                  "List of label IDs to filter messages (e.g., ['INBOX', 'SENT', 'DRAFT']). Multiple labels are combined with OR logic - messages matching ANY specified label will be returned. If empty, no label filtering is applied (searches all accessible messages).",
                items: {
                  type: 'string',
                },
              },
            },
          },
          notion: {
            type: 'object',
            title: 'NotionSearchOptions',
            description: 'Search options for Notion',
            properties: {
              notion_page_ids: {
                type: 'array',
                title: 'Notion Page Ids',
                description:
                  'List of Notion page IDs to search. If not provided, all pages in the workspace will be searched.',
                items: {
                  type: 'string',
                },
              },
            },
          },
          reddit: {
            type: 'object',
            title: 'RedditSearchOptions',
            description: 'Search options for Reddit',
            properties: {
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
            },
          },
          slack: {
            type: 'object',
            title: 'SlackSearchOptions',
            description: 'Search options for Slack',
            properties: {
              channels: {
                type: 'array',
                title: 'Channels',
                description:
                  'List of Slack channels to search. If not provided, all channels in the workspace will be searched.',
                items: {
                  type: 'string',
                },
              },
            },
          },
          web_crawler: {
            type: 'object',
            title: 'WebCrawlerSearchOptions',
            description: 'Search options for Web Crawler',
            properties: {
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
            },
          },
        },
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
          },
          collections: {
            type: 'object',
            title: 'VaultSearchOptions',
            description: 'Search options for vault',
          },
          google_calendar: {
            type: 'object',
            title: 'GoogleCalendarSearchOptions',
            description: 'Search options for Google Calendar',
            properties: {
              calendar_id: {
                type: 'string',
                title: 'Calendar Id',
                description:
                  'The ID of the calendar to search. If not provided, it will use the ID of the default calendar. You can get the list of calendars with the `/integrations/google_calendar/list` endpoint.',
              },
            },
          },
          google_drive: {
            type: 'object',
            title: 'GoogleDriveSearchOptions',
            description: 'Search options for Google Drive',
          },
          google_mail: {
            type: 'object',
            title: 'GmailSearchOptions',
            description: 'Search options for Gmail',
            properties: {
              label_ids: {
                type: 'array',
                title: 'Label Ids',
                description:
                  "List of label IDs to filter messages (e.g., ['INBOX', 'SENT', 'DRAFT']). Multiple labels are combined with OR logic - messages matching ANY specified label will be returned. If empty, no label filtering is applied (searches all accessible messages).",
                items: {
                  type: 'string',
                },
              },
            },
          },
          notion: {
            type: 'object',
            title: 'NotionSearchOptions',
            description: 'Search options for Notion',
            properties: {
              notion_page_ids: {
                type: 'array',
                title: 'Notion Page Ids',
                description:
                  'List of Notion page IDs to search. If not provided, all pages in the workspace will be searched.',
                items: {
                  type: 'string',
                },
              },
            },
          },
          reddit: {
            type: 'object',
            title: 'RedditSearchOptions',
            description: 'Search options for Reddit',
            properties: {
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
            },
          },
          slack: {
            type: 'object',
            title: 'SlackSearchOptions',
            description: 'Search options for Slack',
            properties: {
              channels: {
                type: 'array',
                title: 'Channels',
                description:
                  'List of Slack channels to search. If not provided, all channels in the workspace will be searched.',
                items: {
                  type: 'string',
                },
              },
            },
          },
          web_crawler: {
            type: 'object',
            title: 'WebCrawlerSearchOptions',
            description: 'Search options for Web Crawler',
            properties: {
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
};

export const handler = async (client: Hyperspell, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.memories.search(body));
};

export default { metadata, tool, handler };
