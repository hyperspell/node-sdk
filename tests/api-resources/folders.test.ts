// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperspell from '@hyperspell/hyperspell';

const client = new Hyperspell({
  apiKey: 'My API Key',
  userID: 'My User ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource folders', () => {
  test('list', async () => {
    const responsePromise = client.folders.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.folders.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { parent_id: 'parent_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hyperspell.NotFoundError);
  });

  test('deletePolicy: only required params', async () => {
    const responsePromise = client.folders.deletePolicy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      connection_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deletePolicy: required and optional params', async () => {
    const response = await client.folders.deletePolicy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      connection_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('listPolicies', async () => {
    const responsePromise = client.folders.listPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setPolicies: only required params', async () => {
    const responsePromise = client.folders.setPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      provider_folder_id: 'provider_folder_id',
      sync_mode: 'sync',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setPolicies: required and optional params', async () => {
    const response = await client.folders.setPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      provider_folder_id: 'provider_folder_id',
      sync_mode: 'sync',
      folder_name: 'folder_name',
      folder_path: 'folder_path',
      parent_folder_id: 'parent_folder_id',
    });
  });
});
