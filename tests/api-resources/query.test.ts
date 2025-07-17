// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell from 'hyperspell';
import { Response } from 'node-fetch';

const client = new Hyperspell({
  apiKey: 'My API Key',
  userId: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  test('search: only required params', async () => {
    const responsePromise = client.query.search({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.query.search({
      query: 'query',
      answer: true,
      filter: {
        after: '2019-12-27T18:11:19.117Z',
        before: '2019-12-27T18:11:19.117Z',
        box: {},
        collections: {},
        google_calendar: { calendar_id: 'calendar_id' },
        google_drive: {},
        google_mail: { label_ids: ['string'] },
        notion: { notion_page_ids: ['string'] },
        reddit: { period: 'hour', sort: 'relevance', subreddit: 'subreddit' },
        slack: { channels: ['string'] },
        web_crawler: { max_depth: 0, url: 'string' },
      },
      max_results: 0,
      options: {
        after: '2019-12-27T18:11:19.117Z',
        before: '2019-12-27T18:11:19.117Z',
        box: {},
        collections: {},
        google_calendar: { calendar_id: 'calendar_id' },
        google_drive: {},
        google_mail: { label_ids: ['string'] },
        notion: { notion_page_ids: ['string'] },
        reddit: { period: 'hour', sort: 'relevance', subreddit: 'subreddit' },
        slack: { channels: ['string'] },
        web_crawler: { max_depth: 0, url: 'string' },
      },
      sources: ['collections'],
    });
  });
});
