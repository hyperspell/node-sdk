// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell from 'hyperspell';

const client = new Hyperspell({
  apiKey: 'My API Key',
  userID: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('add: only required params', async () => {
    const responsePromise = client.sessions.add({ history: 'history' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.sessions.add({
      history: 'history',
      date: '2019-12-27T18:11:19.117Z',
      extract: ['procedure'],
      format: 'vercel',
      metadata: { foo: 'string' },
      session_id: 'session_id',
      title: 'title',
    });
  });
});
