// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell from 'hyperspell';
import { Response } from 'node-fetch';

const client = new Hyperspell({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource auth', () => {
  test('me', async () => {
    const responsePromise = client.auth.me();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('me: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.auth.me({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hyperspell.NotFoundError,
    );
  });

  test('userToken: only required params', async () => {
    const responsePromise = client.auth.userToken({ user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('userToken: required and optional params', async () => {
    const response = await client.auth.userToken({ user_id: 'user_id', expires_in: '30m' });
  });
});
