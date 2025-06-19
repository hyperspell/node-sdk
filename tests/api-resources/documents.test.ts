// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell, { toFile } from 'hyperspell';
import { Response } from 'node-fetch';

const client = new Hyperspell({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource documents', () => {
  test('list', async () => {
    const responsePromise = client.documents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.documents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hyperspell.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.documents.list(
        { collection: 'collection', cursor: 'cursor', size: 0, source: 'collections' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hyperspell.NotFoundError);
  });

  test('add: only required params', async () => {
    const responsePromise = client.documents.add({ text: 'text' });
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
      text: 'text',
      collection: 'collection',
      date: '2019-12-27T18:11:19.117Z',
      resource_id: 'resource_id',
      title: 'title',
    });
  });

  test('get', async () => {
    const responsePromise = client.documents.get('collections', 'resource_id');
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
    await expect(
      client.documents.get('collections', 'resource_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hyperspell.NotFoundError);
  });

  test('status', async () => {
    const responsePromise = client.documents.status();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.documents.status({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hyperspell.NotFoundError,
    );
  });

  test('upload: only required params', async () => {
    const responsePromise = client.documents.upload({
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
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      collection: 'collection',
    });
  });
});
