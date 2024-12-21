// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell, { toFile } from 'hyperspell';
import { Response } from 'node-fetch';

const client = new Hyperspell({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ingest', () => {
  test('add', async () => {
    const responsePromise = client.ingest.add({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('file: only required params', async () => {
    const responsePromise = client.ingest.file({
      data: {},
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('file: required and optional params', async () => {
    const response = await client.ingest.file({
      data: {
        date: '2019-12-27T18:11:19.117Z',
        metadata: { foo: 'string' },
        namespace: 'chat-8213',
        org_id: 'org_id',
        text: 'text',
        title: 'title',
        type: 'chat',
        url: 'url',
        user_id: 'user-1231',
        visibility: 'user',
      },
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
