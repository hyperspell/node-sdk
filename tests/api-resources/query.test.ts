// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell from 'hyperspell';
import { Response } from 'node-fetch';

const client = new Hyperspell({
  apiKey: 'My API Key',
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
      collections: 'string',
      filter: {
        end_date: '2019-12-27T18:11:19.117Z',
        source: ['generic'],
        start_date: '2019-12-27T18:11:19.117Z',
        types: ['generic'],
      },
      include_elements: true,
      max_results: 0,
      query_type: 'auto',
    });
  });
});
