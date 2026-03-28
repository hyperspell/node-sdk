// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/connections/list',
    httpMethod: 'get',
    summary: 'List connections',
    description: 'List all connections for the user.',
    stainlessPath: '(resource) connections > (method) list',
    qualified: 'client.connections.list',
    response: '{ connections: { id: string; integration_id: string; label: string; provider: string; }[]; }',
    markdown:
      "## list\n\n`client.connections.list(): { connections: object[]; }`\n\n**get** `/connections/list`\n\nList all connections for the user.\n\n### Returns\n\n- `{ connections: { id: string; integration_id: string; label: string; provider: string; }[]; }`\n\n  - `connections: { id: string; integration_id: string; label: string; provider: string; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst connections = await client.connections.list();\n\nconsole.log(connections);\n```",
  },
  {
    name: 'revoke',
    endpoint: '/connections/{connection_id}/revoke',
    httpMethod: 'delete',
    summary: 'Revoke connection',
    description:
      "Revokes Hyperspell's access the given provider and deletes all stored credentials and indexed data.",
    stainlessPath: '(resource) connections > (method) revoke',
    qualified: 'client.connections.revoke',
    params: ['connection_id: string;'],
    response: '{ message: string; success: boolean; }',
    markdown:
      "## revoke\n\n`client.connections.revoke(connection_id: string): { message: string; success: boolean; }`\n\n**delete** `/connections/{connection_id}/revoke`\n\nRevokes Hyperspell's access the given provider and deletes all stored credentials and indexed data.\n\n### Parameters\n\n- `connection_id: string`\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.connections.revoke('connection_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/connections/{connection_id}/folders',
    httpMethod: 'get',
    summary: 'List folders for a connection',
    description:
      "List one level of folders from the user's connected source.\n\nReturns folders decorated with their explicit folder policy (if any).\nUse parent_id to drill into subfolders.",
    stainlessPath: '(resource) folders > (method) list',
    qualified: 'client.folders.list',
    params: ['connection_id: string;', 'parent_id?: string;'],
    response:
      "{ folders: { has_children: boolean; name: string; provider_folder_id: string; parent_folder_id?: string; policy?: { id: string; sync_mode: 'sync' | 'skip' | 'manual'; }; }[]; }",
    markdown:
      "## list\n\n`client.folders.list(connection_id: string, parent_id?: string): { folders: object[]; }`\n\n**get** `/connections/{connection_id}/folders`\n\nList one level of folders from the user's connected source.\n\nReturns folders decorated with their explicit folder policy (if any).\nUse parent_id to drill into subfolders.\n\n### Parameters\n\n- `connection_id: string`\n\n- `parent_id?: string`\n  Parent folder ID. Omit for root-level folders.\n\n### Returns\n\n- `{ folders: { has_children: boolean; name: string; provider_folder_id: string; parent_folder_id?: string; policy?: { id: string; sync_mode: 'sync' | 'skip' | 'manual'; }; }[]; }`\n\n  - `folders: { has_children: boolean; name: string; provider_folder_id: string; parent_folder_id?: string; policy?: { id: string; sync_mode: 'sync' | 'skip' | 'manual'; }; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst folders = await client.folders.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(folders);\n```",
  },
  {
    name: 'delete_policy',
    endpoint: '/connections/{connection_id}/folder-policies/{policy_id}',
    httpMethod: 'delete',
    summary: 'Delete a folder policy',
    description: 'Delete a folder policy for a specific connection.',
    stainlessPath: '(resource) folders > (method) delete_policy',
    qualified: 'client.folders.deletePolicy',
    params: ['connection_id: string;', 'policy_id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## delete_policy\n\n`client.folders.deletePolicy(connection_id: string, policy_id: string): { success: boolean; }`\n\n**delete** `/connections/{connection_id}/folder-policies/{policy_id}`\n\nDelete a folder policy for a specific connection.\n\n### Parameters\n\n- `connection_id: string`\n\n- `policy_id: string`\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.folders.deletePolicy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { connection_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_policies',
    endpoint: '/connections/{connection_id}/folder-policies',
    httpMethod: 'get',
    summary: 'List folder policies for a connection',
    description: 'List all folder policies for a specific connection.',
    stainlessPath: '(resource) folders > (method) list_policies',
    qualified: 'client.folders.listPolicies',
    params: ['connection_id: string;'],
    response:
      "{ policies: { id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }[]; }",
    markdown:
      "## list_policies\n\n`client.folders.listPolicies(connection_id: string): { policies: object[]; }`\n\n**get** `/connections/{connection_id}/folder-policies`\n\nList all folder policies for a specific connection.\n\n### Parameters\n\n- `connection_id: string`\n\n### Returns\n\n- `{ policies: { id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }[]; }`\n\n  - `policies: { id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.folders.listPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'set_policies',
    endpoint: '/connections/{connection_id}/folder-policies',
    httpMethod: 'post',
    summary: 'Create a folder policy for a connection',
    description: 'Create or update a folder policy for a specific connection.',
    stainlessPath: '(resource) folders > (method) set_policies',
    qualified: 'client.folders.setPolicies',
    params: [
      'connection_id: string;',
      'provider_folder_id: string;',
      "sync_mode: 'sync' | 'skip' | 'manual';",
      'folder_name?: string;',
      'folder_path?: string;',
      'parent_folder_id?: string;',
    ],
    response:
      "{ id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }",
    markdown:
      "## set_policies\n\n`client.folders.setPolicies(connection_id: string, provider_folder_id: string, sync_mode: 'sync' | 'skip' | 'manual', folder_name?: string, folder_path?: string, parent_folder_id?: string): { id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }`\n\n**post** `/connections/{connection_id}/folder-policies`\n\nCreate or update a folder policy for a specific connection.\n\n### Parameters\n\n- `connection_id: string`\n\n- `provider_folder_id: string`\n  Folder ID from the source provider\n\n- `sync_mode: 'sync' | 'skip' | 'manual'`\n  Sync mode for this folder\n\n- `folder_name?: string`\n  Display name of the folder\n\n- `folder_path?: string`\n  Display path of the folder\n\n- `parent_folder_id?: string`\n  Parent folder's provider ID for inheritance resolution\n\n### Returns\n\n- `{ id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }`\n\n  - `id: string`\n  - `provider_folder_id: string`\n  - `sync_mode: 'sync' | 'skip' | 'manual'`\n  - `connection_id?: string`\n  - `folder_name?: string`\n  - `folder_path?: string`\n  - `parent_folder_id?: string`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.folders.setPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { provider_folder_id: 'provider_folder_id', sync_mode: 'sync' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/integrations/list',
    httpMethod: 'get',
    summary: 'List all integrations',
    description: 'List all integrations for the user.',
    stainlessPath: '(resource) integrations > (method) list',
    qualified: 'client.integrations.list',
    response:
      "{ integrations: { id: string; allow_multiple_connections: boolean; auth_provider: 'nango' | 'unified' | 'whitelabel'; icon: string; name: string; provider: string; actions_only?: boolean; }[]; }",
    markdown:
      "## list\n\n`client.integrations.list(): { integrations: object[]; }`\n\n**get** `/integrations/list`\n\nList all integrations for the user.\n\n### Returns\n\n- `{ integrations: { id: string; allow_multiple_connections: boolean; auth_provider: 'nango' | 'unified' | 'whitelabel'; icon: string; name: string; provider: string; actions_only?: boolean; }[]; }`\n\n  - `integrations: { id: string; allow_multiple_connections: boolean; auth_provider: 'nango' | 'unified' | 'whitelabel'; icon: string; name: string; provider: string; actions_only?: boolean; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst integrations = await client.integrations.list();\n\nconsole.log(integrations);\n```",
  },
  {
    name: 'connect',
    endpoint: '/integrations/{integration_id}/connect',
    httpMethod: 'get',
    summary: 'Link an integration',
    description: 'Redirects to the connect URL to link an integration.',
    stainlessPath: '(resource) integrations > (method) connect',
    qualified: 'client.integrations.connect',
    params: ['integration_id: string;', 'redirect_url?: string;'],
    response: '{ expires_at: string; url: string; }',
    markdown:
      "## connect\n\n`client.integrations.connect(integration_id: string, redirect_url?: string): { expires_at: string; url: string; }`\n\n**get** `/integrations/{integration_id}/connect`\n\nRedirects to the connect URL to link an integration.\n\n### Parameters\n\n- `integration_id: string`\n\n- `redirect_url?: string`\n\n### Returns\n\n- `{ expires_at: string; url: string; }`\n\n  - `expires_at: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.integrations.connect('integration_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/integrations/google_calendar/list',
    httpMethod: 'get',
    summary: 'List available calendars',
    description:
      'List available calendars for a user. This can be used to ie. populate a dropdown for the user to select a calendar.',
    stainlessPath: '(resource) integrations.google_calendar > (method) list',
    qualified: 'client.integrations.googleCalendar.list',
    response: '{ items: { id: string; name: string; primary: boolean; timezone: string; }[]; }',
    markdown:
      "## list\n\n`client.integrations.googleCalendar.list(): { items: object[]; }`\n\n**get** `/integrations/google_calendar/list`\n\nList available calendars for a user. This can be used to ie. populate a dropdown for the user to select a calendar.\n\n### Returns\n\n- `{ items: { id: string; name: string; primary: boolean; timezone: string; }[]; }`\n\n  - `items: { id: string; name: string; primary: boolean; timezone: string; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst calendar = await client.integrations.googleCalendar.list();\n\nconsole.log(calendar);\n```",
  },
  {
    name: 'index',
    endpoint: '/integrations/web_crawler/index',
    httpMethod: 'get',
    summary: 'Crawl a website for indexed search',
    description: 'Recursively crawl a website to make it available for indexed search.',
    stainlessPath: '(resource) integrations.web_crawler > (method) index',
    qualified: 'client.integrations.webCrawler.index',
    params: ['url: string;', 'limit?: number;', 'max_depth?: number;'],
    response:
      "{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }",
    markdown:
      "## index\n\n`client.integrations.webCrawler.index(url: string, limit?: number, max_depth?: number): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**get** `/integrations/web_crawler/index`\n\nRecursively crawl a website to make it available for indexed search.\n\n### Parameters\n\n- `url: string`\n  The base URL of the website to crawl\n\n- `limit?: number`\n  Maximum number of pages to crawl in total\n\n- `max_depth?: number`\n  Maximum depth of links to follow during crawling\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.integrations.webCrawler.index({ url: 'url' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/integrations/slack/list',
    httpMethod: 'get',
    summary: 'List available Slack conversations',
    description:
      "List Slack conversations accessible to the user via the live Nango connection.\n\nReturns minimal channel metadata suitable for selection UIs. If required\nscopes are missing, Slack's error is propagated with details.\n\nSupports filtering by channels, including/excluding private channels, DMs,\ngroup DMs, and archived channels based on the provided search options.",
    stainlessPath: '(resource) integrations.slack > (method) list',
    qualified: 'client.integrations.slack.list',
    params: [
      'channels?: string[];',
      'exclude_archived?: boolean;',
      'include_dms?: boolean;',
      'include_group_dms?: boolean;',
      'include_private?: boolean;',
    ],
    response: 'object',
    markdown:
      "## list\n\n`client.integrations.slack.list(channels?: string[], exclude_archived?: boolean, include_dms?: boolean, include_group_dms?: boolean, include_private?: boolean): object`\n\n**get** `/integrations/slack/list`\n\nList Slack conversations accessible to the user via the live Nango connection.\n\nReturns minimal channel metadata suitable for selection UIs. If required\nscopes are missing, Slack's error is propagated with details.\n\nSupports filtering by channels, including/excluding private channels, DMs,\ngroup DMs, and archived channels based on the provided search options.\n\n### Parameters\n\n- `channels?: string[]`\n  List of Slack channels to include (by id, name, or #name).\n\n- `exclude_archived?: boolean`\n  If set, pass 'exclude_archived' to Slack. If None, omit the param.\n\n- `include_dms?: boolean`\n  Include direct messages (im) when listing conversations.\n\n- `include_group_dms?: boolean`\n  Include group DMs (mpim) when listing conversations.\n\n- `include_private?: boolean`\n  Include private channels when constructing Slack 'types'.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst slacks = await client.integrations.slack.list();\n\nconsole.log(slacks);\n```",
  },
  {
    name: 'update',
    endpoint: '/memories/update/{source}/{resource_id}',
    httpMethod: 'post',
    summary: 'Update a memory',
    description:
      'Updates an existing document in the index. You can update the text, collection,\ntitle, and metadata. The document must already exist or a 404 will be returned.\nThis works for documents from any source (vault, slack, gmail, etc.).\n\nTo remove a collection, set it to null explicitly.',
    stainlessPath: '(resource) memories > (method) update',
    qualified: 'client.memories.update',
    params: [
      'source: string;',
      'resource_id: string;',
      'collection?: string | object;',
      'metadata?: object | object;',
      'text?: string | object;',
      'title?: string | object;',
    ],
    response:
      "{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }",
    markdown:
      "## update\n\n`client.memories.update(source: string, resource_id: string, collection?: string | object, metadata?: object | object, text?: string | object, title?: string | object): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**post** `/memories/update/{source}/{resource_id}`\n\nUpdates an existing document in the index. You can update the text, collection,\ntitle, and metadata. The document must already exist or a 404 will be returned.\nThis works for documents from any source (vault, slack, gmail, etc.).\n\nTo remove a collection, set it to null explicitly.\n\n### Parameters\n\n- `source: string`\n\n- `resource_id: string`\n\n- `collection?: string | object`\n  The collection to move the document to — deprecated, set the collection using metadata instead.\n\n- `metadata?: object | object`\n  Custom metadata for filtering. Keys must be alphanumeric with underscores, max 64 chars. Values must be string, number, boolean, or null. Will be merged with existing metadata.\n\n- `text?: string | object`\n  Full text of the document. If provided, the document will be re-indexed.\n\n- `title?: string | object`\n  Title of the document.\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst memoryStatus = await client.memories.update('resource_id', { source: 'reddit' });\n\nconsole.log(memoryStatus);\n```",
  },
  {
    name: 'list',
    endpoint: '/memories/list',
    httpMethod: 'get',
    summary: 'List memories',
    description:
      'This endpoint allows you to paginate through all documents in the index.\nYou can filter the documents by title, date, metadata, etc.',
    stainlessPath: '(resource) memories > (method) list',
    qualified: 'client.memories.list',
    params: [
      'collection?: string;',
      'cursor?: string;',
      'filter?: string;',
      'size?: number;',
      'source?: string;',
      "status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped';",
    ],
    response:
      "{ resource_id: string; source: string; folder_id?: string; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; parent_folder_id?: string; score?: number; title?: string; }",
    markdown:
      "## list\n\n`client.memories.list(collection?: string, cursor?: string, filter?: string, size?: number, source?: string, status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'): { resource_id: string; source: string; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }`\n\n**get** `/memories/list`\n\nThis endpoint allows you to paginate through all documents in the index.\nYou can filter the documents by title, date, metadata, etc.\n\n### Parameters\n\n- `collection?: string`\n  Filter documents by collection.\n\n- `cursor?: string`\n\n- `filter?: string`\n  Filter documents by metadata using MongoDB-style operators. Example: {\"department\": \"engineering\", \"priority\": {\"$gt\": 3}}\n\n- `size?: number`\n\n- `source?: string`\n  Filter documents by source.\n\n- `status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n  Filter documents by status.\n\n### Returns\n\n- `{ resource_id: string; source: string; folder_id?: string; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; parent_folder_id?: string; score?: number; title?: string; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `folder_id?: string`\n  - `metadata?: { created_at?: string; events?: { message: string; type: 'error' | 'warning' | 'info' | 'success'; time?: string; }[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }`\n  - `parent_folder_id?: string`\n  - `score?: number`\n  - `title?: string`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\n// Automatically fetches more pages as needed.\nfor await (const resource of client.memories.list()) {\n  console.log(resource);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/memories/delete/{source}/{resource_id}',
    httpMethod: 'delete',
    summary: 'Delete memory',
    description:
      "Delete a memory and its associated chunks from the index.\n\nThis removes the memory completely from the vector index and database.\nThe operation deletes:\n1. All chunks associated with the resource (including embeddings)\n2. The resource record itself\n\nArgs:\n    source: The document provider (e.g., gmail, notion, vault)\n    resource_id: The unique identifier of the resource to delete\n    api_token: Authentication token\n\nReturns:\n    MemoryDeletionResponse with deletion details\n\nRaises:\n    DocumentNotFound: If the resource doesn't exist or user doesn't have access",
    stainlessPath: '(resource) memories > (method) delete',
    qualified: 'client.memories.delete',
    params: ['source: string;', 'resource_id: string;'],
    response:
      '{ chunks_deleted: number; message: string; resource_id: string; source: string; success: boolean; }',
    markdown:
      "## delete\n\n`client.memories.delete(source: string, resource_id: string): { chunks_deleted: number; message: string; resource_id: string; source: string; success: boolean; }`\n\n**delete** `/memories/delete/{source}/{resource_id}`\n\nDelete a memory and its associated chunks from the index.\n\nThis removes the memory completely from the vector index and database.\nThe operation deletes:\n1. All chunks associated with the resource (including embeddings)\n2. The resource record itself\n\nArgs:\n    source: The document provider (e.g., gmail, notion, vault)\n    resource_id: The unique identifier of the resource to delete\n    api_token: Authentication token\n\nReturns:\n    MemoryDeletionResponse with deletion details\n\nRaises:\n    DocumentNotFound: If the resource doesn't exist or user doesn't have access\n\n### Parameters\n\n- `source: string`\n\n- `resource_id: string`\n\n### Returns\n\n- `{ chunks_deleted: number; message: string; resource_id: string; source: string; success: boolean; }`\n\n  - `chunks_deleted: number`\n  - `message: string`\n  - `resource_id: string`\n  - `source: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst memory = await client.memories.delete('resource_id', { source: 'reddit' });\n\nconsole.log(memory);\n```",
  },
  {
    name: 'add',
    endpoint: '/memories/add',
    httpMethod: 'post',
    summary: 'Add a memory',
    description:
      'Adds an arbitrary document to the index. This can be any text, email,\ncall transcript, etc. The document will be processed and made available for\nquerying once the processing is complete.',
    stainlessPath: '(resource) memories > (method) add',
    qualified: 'client.memories.add',
    params: [
      'text: string;',
      'collection?: string;',
      'date?: string;',
      'metadata?: object;',
      'resource_id?: string;',
      'title?: string;',
    ],
    response:
      "{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }",
    markdown:
      "## add\n\n`client.memories.add(text: string, collection?: string, date?: string, metadata?: object, resource_id?: string, title?: string): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**post** `/memories/add`\n\nAdds an arbitrary document to the index. This can be any text, email,\ncall transcript, etc. The document will be processed and made available for\nquerying once the processing is complete.\n\n### Parameters\n\n- `text: string`\n  Full text of the document.\n\n- `collection?: string`\n  The collection to add the document to — deprecated, set the collection using metadata instead.\n\n- `date?: string`\n  Date of the document. Depending on the document, this could be the creation date or date the document was last updated (eg. for a chat transcript, this would be the date of the last message). This helps the ranking algorithm and allows you to filter by date range.\n\n- `metadata?: object`\n  Custom metadata for filtering. Keys must be alphanumeric with underscores, max 64 chars. Values must be string, number, boolean, or null.\n\n- `resource_id?: string`\n  The resource ID to add the document to. If not provided, a new resource ID will be generated. If provided, the document will be updated if it already exists.\n\n- `title?: string`\n  Title of the document.\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst memoryStatus = await client.memories.add({ text: 'text' });\n\nconsole.log(memoryStatus);\n```",
  },
  {
    name: 'add_bulk',
    endpoint: '/memories/add/bulk',
    httpMethod: 'post',
    summary: 'Add multiple memories',
    description:
      'Adds multiple documents to the index in a single request.\n\nAll items are validated before any database operations occur. If any item\nfails validation, the entire batch is rejected with a 422 error detailing\nwhich items failed and why.\n\nMaximum 100 items per request. Each item follows the same schema as the\nsingle-item /memories/add endpoint.',
    stainlessPath: '(resource) memories > (method) add_bulk',
    qualified: 'client.memories.addBulk',
    params: [
      'items: { text: string; collection?: string; date?: string; metadata?: object; resource_id?: string; title?: string; }[];',
    ],
    response:
      "{ count: number; items: { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }[]; success?: boolean; }",
    markdown:
      "## add_bulk\n\n`client.memories.addBulk(items: { text: string; collection?: string; date?: string; metadata?: object; resource_id?: string; title?: string; }[]): { count: number; items: memory_status[]; success?: boolean; }`\n\n**post** `/memories/add/bulk`\n\nAdds multiple documents to the index in a single request.\n\nAll items are validated before any database operations occur. If any item\nfails validation, the entire batch is rejected with a 422 error detailing\nwhich items failed and why.\n\nMaximum 100 items per request. Each item follows the same schema as the\nsingle-item /memories/add endpoint.\n\n### Parameters\n\n- `items: { text: string; collection?: string; date?: string; metadata?: object; resource_id?: string; title?: string; }[]`\n  List of memories to ingest. Maximum 100 items.\n\n### Returns\n\n- `{ count: number; items: { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }[]; success?: boolean; }`\n  Response schema for successful bulk ingestion.\n\n  - `count: number`\n  - `items: { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }[]`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.memories.addBulk({ items: [{ text: '...' }] });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/memories/get/{source}/{resource_id}',
    httpMethod: 'get',
    summary: 'Get memory',
    description: 'Retrieves a document by provider and resource_id.',
    stainlessPath: '(resource) memories > (method) get',
    qualified: 'client.memories.get',
    params: ['source: string;', 'resource_id: string;'],
    response:
      "{ resource_id: string; source: string; type: string; data?: object[]; memories?: string[]; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; title?: string; }",
    markdown:
      "## get\n\n`client.memories.get(source: string, resource_id: string): { resource_id: string; source: string; type: string; data?: object[]; memories?: string[]; metadata?: metadata; title?: string; }`\n\n**get** `/memories/get/{source}/{resource_id}`\n\nRetrieves a document by provider and resource_id.\n\n### Parameters\n\n- `source: string`\n\n- `resource_id: string`\n\n### Returns\n\n- `{ resource_id: string; source: string; type: string; data?: object[]; memories?: string[]; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; title?: string; }`\n  Response model for the GET /memories/get endpoint.\n\n  - `resource_id: string`\n  - `source: string`\n  - `type: string`\n  - `data?: object[]`\n  - `memories?: string[]`\n  - `metadata?: { created_at?: string; events?: { message: string; type: 'error' | 'warning' | 'info' | 'success'; time?: string; }[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }`\n  - `title?: string`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst memory = await client.memories.get('resource_id', { source: 'reddit' });\n\nconsole.log(memory);\n```",
  },
  {
    name: 'search',
    endpoint: '/memories/query',
    httpMethod: 'post',
    summary: 'Query memories',
    description: 'Retrieves documents matching the query.',
    stainlessPath: '(resource) memories > (method) search',
    qualified: 'client.memories.search',
    params: [
      'query: string;',
      'answer?: boolean;',
      'effort?: number;',
      'max_results?: number;',
      "options?: { after?: string; answer_model?: string; before?: string; box?: { weight?: number; }; filter?: object; google_calendar?: { calendar_id?: string; weight?: number; }; google_drive?: { weight?: number; }; google_mail?: { label_ids?: string[]; weight?: number; }; max_results?: number; memory_types?: 'procedure' | 'memory'[]; notion?: { notion_page_ids?: string[]; weight?: number; }; reddit?: { period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'; sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments'; subreddit?: string; weight?: number; }; resource_ids?: string[]; slack?: { channels?: string[]; exclude_archived?: boolean; include_dms?: boolean; include_group_dms?: boolean; include_private?: boolean; weight?: number; }; vault?: { weight?: number; }; web_crawler?: { max_depth?: number; url?: string; weight?: number; }; };",
      'sources?: string[];',
    ],
    response:
      '{ documents: { resource_id: string; source: string; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }[]; answer?: string; errors?: object[]; query_id?: string; score?: number; }',
    markdown:
      "## search\n\n`client.memories.search(query: string, answer?: boolean, effort?: number, max_results?: number, options?: { after?: string; answer_model?: string; before?: string; box?: { weight?: number; }; filter?: object; google_calendar?: { calendar_id?: string; weight?: number; }; google_drive?: { weight?: number; }; google_mail?: { label_ids?: string[]; weight?: number; }; max_results?: number; memory_types?: 'procedure' | 'memory'[]; notion?: { notion_page_ids?: string[]; weight?: number; }; reddit?: { period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'; sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments'; subreddit?: string; weight?: number; }; resource_ids?: string[]; slack?: { channels?: string[]; exclude_archived?: boolean; include_dms?: boolean; include_group_dms?: boolean; include_private?: boolean; weight?: number; }; vault?: { weight?: number; }; web_crawler?: { max_depth?: number; url?: string; weight?: number; }; }, sources?: string[]): { documents: resource[]; answer?: string; errors?: object[]; query_id?: string; score?: number; }`\n\n**post** `/memories/query`\n\nRetrieves documents matching the query.\n\n### Parameters\n\n- `query: string`\n  Query to run.\n\n- `answer?: boolean`\n  If true, the query will be answered along with matching source documents.\n\n- `effort?: number`\n  Effort level. 0 = pass query through verbatim. 1 = LLM rewrites the query for better retrieval and extracts date filters.\n\n- `max_results?: number`\n  Maximum number of results to return.\n\n- `options?: { after?: string; answer_model?: string; before?: string; box?: { weight?: number; }; filter?: object; google_calendar?: { calendar_id?: string; weight?: number; }; google_drive?: { weight?: number; }; google_mail?: { label_ids?: string[]; weight?: number; }; max_results?: number; memory_types?: 'procedure' | 'memory'[]; notion?: { notion_page_ids?: string[]; weight?: number; }; reddit?: { period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'; sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments'; subreddit?: string; weight?: number; }; resource_ids?: string[]; slack?: { channels?: string[]; exclude_archived?: boolean; include_dms?: boolean; include_group_dms?: boolean; include_private?: boolean; weight?: number; }; vault?: { weight?: number; }; web_crawler?: { max_depth?: number; url?: string; weight?: number; }; }`\n  Search options for the query.\n  - `after?: string`\n    Only query documents created on or after this date.\n  - `answer_model?: string`\n    Model to use for answer generation when answer=True\n  - `before?: string`\n    Only query documents created before this date.\n  - `box?: { weight?: number; }`\n    Search options for Box\n  - `filter?: object`\n    Metadata filters using MongoDB-style operators. Example: {'status': 'published', 'priority': {'$gt': 3}}\n  - `google_calendar?: { calendar_id?: string; weight?: number; }`\n    Search options for Google Calendar\n  - `google_drive?: { weight?: number; }`\n    Search options for Google Drive\n  - `google_mail?: { label_ids?: string[]; weight?: number; }`\n    Search options for Gmail\n  - `max_results?: number`\n    Maximum number of results to return.\n  - `memory_types?: 'procedure' | 'memory'[]`\n    Filter by memory type. Defaults to generic memories only. Pass multiple types to include procedures, etc.\n  - `notion?: { notion_page_ids?: string[]; weight?: number; }`\n    Search options for Notion\n  - `reddit?: { period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'; sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments'; subreddit?: string; weight?: number; }`\n    Search options for Reddit\n  - `resource_ids?: string[]`\n    Only return results from these specific resource IDs. Useful for scoping searches to specific documents (e.g., a specific email thread or uploaded file).\n  - `slack?: { channels?: string[]; exclude_archived?: boolean; include_dms?: boolean; include_group_dms?: boolean; include_private?: boolean; weight?: number; }`\n    Search options for Slack\n  - `vault?: { weight?: number; }`\n    Search options for vault\n  - `web_crawler?: { max_depth?: number; url?: string; weight?: number; }`\n    Search options for Web Crawler\n\n- `sources?: string[]`\n  Only query documents from these sources.\n\n### Returns\n\n- `{ documents: { resource_id: string; source: string; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }[]; answer?: string; errors?: object[]; query_id?: string; score?: number; }`\n\n  - `documents: { resource_id: string; source: string; folder_id?: string; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; parent_folder_id?: string; score?: number; title?: string; }[]`\n  - `answer?: string`\n  - `errors?: object[]`\n  - `query_id?: string`\n  - `score?: number`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst queryResult = await client.memories.search({ query: 'query' });\n\nconsole.log(queryResult);\n```",
  },
  {
    name: 'status',
    endpoint: '/memories/status',
    httpMethod: 'get',
    summary: 'Show indexing progress',
    description: 'This endpoint shows the indexing progress of documents, both by provider and total.',
    stainlessPath: '(resource) memories > (method) status',
    qualified: 'client.memories.status',
    response: '{ providers: object; total: object; }',
    markdown:
      "## status\n\n`client.memories.status(): { providers: object; total: object; }`\n\n**get** `/memories/status`\n\nThis endpoint shows the indexing progress of documents, both by provider and total.\n\n### Returns\n\n- `{ providers: object; total: object; }`\n\n  - `providers: object`\n  - `total: object`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.memories.status();\n\nconsole.log(response);\n```",
  },
  {
    name: 'upload',
    endpoint: '/memories/upload',
    httpMethod: 'post',
    summary: 'Upload a file',
    description:
      'This endpoint will upload a file to the index and return a resource_id.\nThe file will be processed in the background and the memory will be available for querying once the processing is complete.\nYou can use the `resource_id` to query the memory later, and check the status of the memory.',
    stainlessPath: '(resource) memories > (method) upload',
    qualified: 'client.memories.upload',
    params: ['file: string;', 'collection?: string;', 'metadata?: string;'],
    response:
      "{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }",
    markdown:
      "## upload\n\n`client.memories.upload(file: string, collection?: string, metadata?: string): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**post** `/memories/upload`\n\nThis endpoint will upload a file to the index and return a resource_id.\nThe file will be processed in the background and the memory will be available for querying once the processing is complete.\nYou can use the `resource_id` to query the memory later, and check the status of the memory.\n\n### Parameters\n\n- `file: string`\n  The file to ingest.\n\n- `collection?: string`\n  The collection to add the document to — deprecated, set the collection using metadata instead.\n\n- `metadata?: string`\n  Custom metadata as JSON string for filtering. Keys must be alphanumeric with underscores, max 64 chars. Values must be string, number, or boolean.\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst memoryStatus = await client.memories.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(memoryStatus);\n```",
  },
  {
    name: 'get_query',
    endpoint: '/evaluate/query/{query_id}',
    httpMethod: 'get',
    summary: 'Get query result',
    description: 'Retrieve the result of a previous query.',
    stainlessPath: '(resource) evaluate > (method) get_query',
    qualified: 'client.evaluate.getQuery',
    params: ['query_id: string;'],
    response:
      '{ documents: { resource_id: string; source: string; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }[]; answer?: string; errors?: object[]; query_id?: string; score?: number; }',
    markdown:
      "## get_query\n\n`client.evaluate.getQuery(query_id: string): { documents: resource[]; answer?: string; errors?: object[]; query_id?: string; score?: number; }`\n\n**get** `/evaluate/query/{query_id}`\n\nRetrieve the result of a previous query.\n\n### Parameters\n\n- `query_id: string`\n\n### Returns\n\n- `{ documents: { resource_id: string; source: string; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }[]; answer?: string; errors?: object[]; query_id?: string; score?: number; }`\n\n  - `documents: { resource_id: string; source: string; folder_id?: string; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; parent_folder_id?: string; score?: number; title?: string; }[]`\n  - `answer?: string`\n  - `errors?: object[]`\n  - `query_id?: string`\n  - `score?: number`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst queryResult = await client.evaluate.getQuery('query_id');\n\nconsole.log(queryResult);\n```",
  },
  {
    name: 'score_highlight',
    endpoint: '/evaluate/highlight/{highlight_id}',
    httpMethod: 'post',
    summary: 'Score a highlight',
    description: 'Score an individual highlight.',
    stainlessPath: '(resource) evaluate > (method) score_highlight',
    qualified: 'client.evaluate.scoreHighlight',
    params: ['highlight_id: string;', 'comment?: string;', 'score?: number;'],
    response: '{ message: string; success: boolean; }',
    markdown:
      "## score_highlight\n\n`client.evaluate.scoreHighlight(highlight_id: string, comment?: string, score?: number): { message: string; success: boolean; }`\n\n**post** `/evaluate/highlight/{highlight_id}`\n\nScore an individual highlight.\n\n### Parameters\n\n- `highlight_id: string`\n\n- `comment?: string`\n  Comment on the chunk\n\n- `score?: number`\n  Rating of the chunk from -1 (bad) to +1 (good).\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.evaluate.scoreHighlight('highlight_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'score_query',
    endpoint: '/evaluate/query/{query_id}',
    httpMethod: 'post',
    summary: 'Score a query result',
    description: 'Score the result of a query.',
    stainlessPath: '(resource) evaluate > (method) score_query',
    qualified: 'client.evaluate.scoreQuery',
    params: ['query_id: string;', 'score?: number;'],
    response: '{ message: string; success: boolean; }',
    markdown:
      "## score_query\n\n`client.evaluate.scoreQuery(query_id: string, score?: number): { message: string; success: boolean; }`\n\n**post** `/evaluate/query/{query_id}`\n\nScore the result of a query.\n\n### Parameters\n\n- `query_id: string`\n\n- `score?: number`\n  Rating of the query result from -1 (bad) to +1 (good).\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.evaluate.scoreQuery('query_id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'add_reaction',
    endpoint: '/actions/add_reaction',
    httpMethod: 'post',
    summary: 'Add a reaction',
    description: 'Add an emoji reaction to a message on a connected integration.',
    stainlessPath: '(resource) actions > (method) add_reaction',
    qualified: 'client.actions.addReaction',
    params: [
      'channel: string;',
      'name: string;',
      'provider: string;',
      'timestamp: string;',
      'connection?: string;',
    ],
    response: '{ success: boolean; error?: string; provider_response?: object; }',
    markdown:
      "## add_reaction\n\n`client.actions.addReaction(channel: string, name: string, provider: string, timestamp: string, connection?: string): { success: boolean; error?: string; provider_response?: object; }`\n\n**post** `/actions/add_reaction`\n\nAdd an emoji reaction to a message on a connected integration.\n\n### Parameters\n\n- `channel: string`\n  Channel ID containing the message\n\n- `name: string`\n  Emoji name without colons (e.g., thumbsup)\n\n- `provider: string`\n  Integration provider (e.g., slack)\n\n- `timestamp: string`\n  Message timestamp to react to\n\n- `connection?: string`\n  Connection ID. If omitted, auto-resolved from provider + user.\n\n### Returns\n\n- `{ success: boolean; error?: string; provider_response?: object; }`\n  Result from executing an integration action.\n\n  - `success: boolean`\n  - `error?: string`\n  - `provider_response?: object`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.actions.addReaction({\n  channel: 'channel',\n  name: 'name',\n  provider: 'reddit',\n  timestamp: 'timestamp',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'send_message',
    endpoint: '/actions/send_message',
    httpMethod: 'post',
    summary: 'Send a message',
    description: 'Send a message to a channel or conversation on a connected integration.',
    stainlessPath: '(resource) actions > (method) send_message',
    qualified: 'client.actions.sendMessage',
    params: [
      'provider: string;',
      'text: string;',
      'channel?: string;',
      'connection?: string;',
      'parent?: string;',
    ],
    response: '{ success: boolean; error?: string; provider_response?: object; }',
    markdown:
      "## send_message\n\n`client.actions.sendMessage(provider: string, text: string, channel?: string, connection?: string, parent?: string): { success: boolean; error?: string; provider_response?: object; }`\n\n**post** `/actions/send_message`\n\nSend a message to a channel or conversation on a connected integration.\n\n### Parameters\n\n- `provider: string`\n  Integration provider (e.g., slack)\n\n- `text: string`\n  Message text\n\n- `channel?: string`\n  Channel ID (required for Slack)\n\n- `connection?: string`\n  Connection ID. If omitted, auto-resolved from provider + user.\n\n- `parent?: string`\n  Parent message ID for threading (thread_ts for Slack)\n\n### Returns\n\n- `{ success: boolean; error?: string; provider_response?: object; }`\n  Result from executing an integration action.\n\n  - `success: boolean`\n  - `error?: string`\n  - `provider_response?: object`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.actions.sendMessage({ provider: 'reddit', text: 'text' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'add',
    endpoint: '/trace/add',
    httpMethod: 'post',
    summary: 'Add an agent trace',
    description:
      'Add an agent trace/transcript to the index.\n\nAccepts traces as a string in Hyperdoc format (native), Vercel AI SDK format,\nor OpenClaw JSONL format. The format is auto-detected if not specified.\n\n**Hyperdoc format** (JSON array, snake_case with type discriminators):\n```json\n{"history": "[{\\"type\\": \\"trace_message\\", \\"role\\": \\"user\\", \\"text\\": \\"Hello\\"}]"}\n```\n\n**Vercel AI SDK format** (JSON array, camelCase):\n```json\n{"history": "[{\\"role\\": \\"user\\", \\"content\\": \\"Hello\\"}]"}\n```\n\n**OpenClaw JSONL format** (newline-delimited JSON):\n```json\n{"history": "{\\"type\\":\\"session\\",\\"id\\":\\"abc\\"}\\n{\\"type\\":\\"message\\",\\"message\\":{\\"role\\":\\"user\\",...}}"}\n```',
    stainlessPath: '(resource) sessions > (method) add',
    qualified: 'client.sessions.add',
    params: [
      'history: string;',
      'date?: string;',
      "extract?: 'procedure' | 'memory'[];",
      "format?: 'vercel' | 'hyperdoc' | 'openclaw';",
      'metadata?: object;',
      'session_id?: string;',
      'title?: string;',
    ],
    response:
      "{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }",
    markdown:
      "## add\n\n`client.sessions.add(history: string, date?: string, extract?: 'procedure' | 'memory'[], format?: 'vercel' | 'hyperdoc' | 'openclaw', metadata?: object, session_id?: string, title?: string): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**post** `/trace/add`\n\nAdd an agent trace/transcript to the index.\n\nAccepts traces as a string in Hyperdoc format (native), Vercel AI SDK format,\nor OpenClaw JSONL format. The format is auto-detected if not specified.\n\n**Hyperdoc format** (JSON array, snake_case with type discriminators):\n```json\n{\"history\": \"[{\\\"type\\\": \\\"trace_message\\\", \\\"role\\\": \\\"user\\\", \\\"text\\\": \\\"Hello\\\"}]\"}\n```\n\n**Vercel AI SDK format** (JSON array, camelCase):\n```json\n{\"history\": \"[{\\\"role\\\": \\\"user\\\", \\\"content\\\": \\\"Hello\\\"}]\"}\n```\n\n**OpenClaw JSONL format** (newline-delimited JSON):\n```json\n{\"history\": \"{\\\"type\\\":\\\"session\\\",\\\"id\\\":\\\"abc\\\"}\\n{\\\"type\\\":\\\"message\\\",\\\"message\\\":{\\\"role\\\":\\\"user\\\",...}}\"}\n```\n\n### Parameters\n\n- `history: string`\n  The trace history as a string. Can be a JSON array of Hyperdoc steps, a JSON array of Vercel AI SDK steps, or OpenClaw JSONL.\n\n- `date?: string`\n  Date of the trace\n\n- `extract?: 'procedure' | 'memory'[]`\n  What kind of memories to extract from the trace\n\n- `format?: 'vercel' | 'hyperdoc' | 'openclaw'`\n  Trace format: 'vercel', 'hyperdoc', or 'openclaw'. Auto-detected if not set.\n\n- `metadata?: object`\n  Custom metadata for filtering. Keys must be alphanumeric with underscores, max 64 chars.\n\n- `session_id?: string`\n  Resource identifier for the trace.\n\n- `title?: string`\n  Title of the trace\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst memoryStatus = await client.sessions.add({ history: 'history' });\n\nconsole.log(memoryStatus);\n```",
  },
  {
    name: 'list',
    endpoint: '/vault/list',
    httpMethod: 'get',
    summary: 'List vaults',
    description:
      'This endpoint lists all collections, and how many documents are in each collection.\nAll documents that do not have a collection assigned are in the `null` collection.',
    stainlessPath: '(resource) vaults > (method) list',
    qualified: 'client.vaults.list',
    params: ['cursor?: string;', 'size?: number;'],
    response: '{ collection: string; document_count: number; }',
    markdown:
      "## list\n\n`client.vaults.list(cursor?: string, size?: number): { collection: string; document_count: number; }`\n\n**get** `/vault/list`\n\nThis endpoint lists all collections, and how many documents are in each collection.\nAll documents that do not have a collection assigned are in the `null` collection.\n\n### Parameters\n\n- `cursor?: string`\n\n- `size?: number`\n\n### Returns\n\n- `{ collection: string; document_count: number; }`\n\n  - `collection: string`\n  - `document_count: number`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\n// Automatically fetches more pages as needed.\nfor await (const vaultListResponse of client.vaults.list()) {\n  console.log(vaultListResponse);\n}\n```",
  },
  {
    name: 'delete_user',
    endpoint: '/auth/delete',
    httpMethod: 'delete',
    summary: 'Delete user',
    description: 'Endpoint to delete user.',
    stainlessPath: '(resource) auth > (method) delete_user',
    qualified: 'client.auth.deleteUser',
    response: '{ message: string; success: boolean; }',
    markdown:
      "## delete_user\n\n`client.auth.deleteUser(): { message: string; success: boolean; }`\n\n**delete** `/auth/delete`\n\nEndpoint to delete user.\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.auth.deleteUser();\n\nconsole.log(response);\n```",
  },
  {
    name: 'me',
    endpoint: '/auth/me',
    httpMethod: 'get',
    summary: 'Get Basic user data',
    description: 'Endpoint to get basic user data.',
    stainlessPath: '(resource) auth > (method) me',
    qualified: 'client.auth.me',
    response:
      '{ id: string; app: { id: string; icon_url: string; name: string; redirect_url: string; }; available_integrations: string[]; installed_integrations: string[]; token_expiration: string; }',
    markdown:
      "## me\n\n`client.auth.me(): { id: string; app: object; available_integrations: string[]; installed_integrations: string[]; token_expiration: string; }`\n\n**get** `/auth/me`\n\nEndpoint to get basic user data.\n\n### Returns\n\n- `{ id: string; app: { id: string; icon_url: string; name: string; redirect_url: string; }; available_integrations: string[]; installed_integrations: string[]; token_expiration: string; }`\n\n  - `id: string`\n  - `app: { id: string; icon_url: string; name: string; redirect_url: string; }`\n  - `available_integrations: string[]`\n  - `installed_integrations: string[]`\n  - `token_expiration: string`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.auth.me();\n\nconsole.log(response);\n```",
  },
  {
    name: 'user_token',
    endpoint: '/auth/user_token',
    httpMethod: 'post',
    summary: 'Get a user token',
    description:
      'Use this endpoint to create a user token for a specific user.\nThis token can be safely passed to your user-facing front-end.',
    stainlessPath: '(resource) auth > (method) user_token',
    qualified: 'client.auth.userToken',
    params: ['user_id: string;', 'expires_in?: string;', 'origin?: string;'],
    response: '{ token: string; expires_at: string; }',
    markdown:
      "## user_token\n\n`client.auth.userToken(user_id: string, expires_in?: string, origin?: string): { token: string; expires_at: string; }`\n\n**post** `/auth/user_token`\n\nUse this endpoint to create a user token for a specific user.\nThis token can be safely passed to your user-facing front-end.\n\n### Parameters\n\n- `user_id: string`\n\n- `expires_in?: string`\n  Token lifetime, e.g., '30m', '2h', '1d'. Defaults to 24 hours if not provided.\n\n- `origin?: string`\n  Origin of the request, used for CSRF protection. If set, the token will only be valid for requests originating from this origin.\n\n### Returns\n\n- `{ token: string; expires_at: string; }`\n\n  - `token: string`\n  - `expires_at: string`\n\n### Example\n\n```typescript\nimport Hyperspell from 'hyperspell';\n\nconst client = new Hyperspell();\n\nconst token = await client.auth.userToken({ user_id: 'user_id' });\n\nconsole.log(token);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
