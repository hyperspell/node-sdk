// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell, { toFile } from 'hyperspell';
import { Response } from 'node-fetch';

const client = new Hyperspell({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('list: only required params', async () => {
    const responsePromise = client.documents.list({ collection: 'collection' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.documents.list({ collection: 'collection', cursor: 'cursor', size: 0 });
  });

  test('add: only required params', async () => {
    const responsePromise = client.documents.add({ collection: 'collection', text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.documents.add({
      collection: 'collection',
      text: 'text',
      date: '2019-12-27T18:11:19.117Z',
      source: 'generic',
      title: 'title',
    });
  });

  test('addURL: only required params', async () => {
    const responsePromise = client.documents.addURL({ collection: 'collection', url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addURL: required and optional params', async () => {
    const response = await client.documents.addURL({ collection: 'collection', url: 'url' });
  });

  test('get', async () => {
    const responsePromise = client.documents.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.documents.get(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hyperspell.NotFoundError,
    );
  });

  test('upload: only required params', async () => {
    const responsePromise = client.documents.upload({
      collection: 'collection',
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

  test('upload: required and optional params', async () => {
    const response = await client.documents.upload({
      collection: 'collection',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
