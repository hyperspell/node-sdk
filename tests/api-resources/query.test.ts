// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell from 'hyperspell';
import { Response } from 'node-fetch';

const client = new Hyperspell({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.query.retrieve({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.query.retrieve({
      query: 'query',
      collections: ['string'],
      filter: {
        chunk_type: ['text'],
        end_date: '2019-12-27T18:11:19.117Z',
        source: ['generic'],
        start_date: '2019-12-27T18:11:19.117Z',
      },
      max_results: 0,
      query_type: 'auto',
    });
  });
});
