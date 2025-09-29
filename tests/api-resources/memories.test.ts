// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell, { toFile } from 'hyperspell';

const client = new Hyperspell({
  apiKey: 'My API Key',
  userID: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource memories', () => {
  test('list', async () => {
    const responsePromise = client.memories.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.memories.list(
        { collection: 'collection', cursor: 'cursor', size: 0, source: 'collections' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hyperspell.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.memories.delete('resource_id', { source: 'collections' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.memories.delete('resource_id', { source: 'collections' });
  });

  test('add: only required params', async () => {
    const responsePromise = client.memories.add({ text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.memories.add({
      text: 'text',
      collection: 'collection',
      date: '2019-12-27T18:11:19.117Z',
      resource_id: 'resource_id',
      title: 'title',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.memories.get('resource_id', { source: 'collections' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.memories.get('resource_id', { source: 'collections' });
  });

  test('search: only required params', async () => {
    const responsePromise = client.memories.search({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.memories.search({
      query: 'query',
      answer: true,
      max_results: 0,
      options: {
        after: '2019-12-27T18:11:19.117Z',
        answer_model: 'llama-3.1',
        before: '2019-12-27T18:11:19.117Z',
        box: { after: '2019-12-27T18:11:19.117Z', before: '2019-12-27T18:11:19.117Z', weight: 0 },
        collections: { after: '2019-12-27T18:11:19.117Z', before: '2019-12-27T18:11:19.117Z', weight: 0 },
        google_calendar: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          calendar_id: 'calendar_id',
          weight: 0,
        },
        google_drive: { after: '2019-12-27T18:11:19.117Z', before: '2019-12-27T18:11:19.117Z', weight: 0 },
        google_mail: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          label_ids: ['string'],
          weight: 0,
        },
        max_results: 0,
        notion: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          notion_page_ids: ['string'],
          weight: 0,
        },
        reddit: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          period: 'hour',
          sort: 'relevance',
          subreddit: 'subreddit',
          weight: 0,
        },
        slack: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          channels: ['string'],
          exclude_archived: true,
          include_dms: true,
          include_group_dms: true,
          include_private: true,
          weight: 0,
        },
        web_crawler: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          max_depth: 0,
          url: 'string',
          weight: 0,
        },
      },
      sources: ['collections'],
    });
  });

  test('status', async () => {
    const responsePromise = client.memories.status();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: only required params', async () => {
    const responsePromise = client.memories.upload({
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
    const response = await client.memories.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      collection: 'collection',
    });
  });
});
