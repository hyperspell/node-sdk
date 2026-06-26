// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell from '@hyperspell/hyperspell';

const client = new Hyperspell({
  apiKey: 'My API Key',
  userID: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('sendMessage: only required params', async () => {
    const responsePromise = client.actions.sendMessage({ provider: 'reddit', text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sendMessage: required and optional params', async () => {
    const response = await client.actions.sendMessage({
      provider: 'reddit',
      text: 'text',
      channel: 'channel',
      connection: 'connection',
      parent: 'parent',
    });
  });

  test('addReaction: only required params', async () => {
    const responsePromise = client.actions.addReaction({
      channel: 'channel',
      name: 'name',
      provider: 'reddit',
      timestamp: 'timestamp',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addReaction: required and optional params', async () => {
    const response = await client.actions.addReaction({
      channel: 'channel',
      name: 'name',
      provider: 'reddit',
      timestamp: 'timestamp',
      connection: 'connection',
    });
  });
});
