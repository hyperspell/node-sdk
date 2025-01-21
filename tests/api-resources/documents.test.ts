// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell from 'hyperspell';
import { Response } from 'node-fetch';

const client = new Hyperspell({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('retrieve', async () => {
    const responsePromise = client.documents.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.documents.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hyperspell.NotFoundError,
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.documents.list({ collections: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.documents.list({
      collections: [0],
      filter: {
        chunk_type: ['text'],
        end_date: '2019-12-27T18:11:19.117Z',
        source: ['generic'],
        start_date: '2019-12-27T18:11:19.117Z',
      },
      limit: 0,
      page: 2,
    });
  });
});
