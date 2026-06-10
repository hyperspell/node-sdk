// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

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
  perLanguage?: Record<string, PerLanguageData>;
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
      "## revoke\n\n`client.connections.revoke(connection_id: string): { message: string; success: boolean; }`\n\n**delete** `/connections/{connection_id}/revoke`\n\nRevokes Hyperspell's access the given provider and deletes all stored credentials and indexed data.\n\n### Parameters\n\n- `connection_id: string`\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.connections.revoke('connection_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.connections.revoke',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.connections.revoke('connection_id');\n\nconsole.log(response.message);",
      },
      python: {
        method: 'connections.revoke',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.connections.revoke(\n    "connection_id",\n)\nprint(response.message)',
      },
      go: {
        method: 'client.Connections.Revoke',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Connections.Revoke(context.TODO(), "connection_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'connections revoke',
        example:
          "hyperspell connections revoke \\\n  --api-key 'My API Key' \\\n  --connection-id connection_id",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/connections/$CONNECTION_ID/revoke \\\n    -X DELETE \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/connections/list',
    httpMethod: 'get',
    summary: 'List connections',
    description: 'List all connections for the user.',
    stainlessPath: '(resource) connections > (method) list',
    qualified: 'client.connections.list',
    response:
      '{ connections: { id: string; integration_id: string; label: string; provider: string; selected_count?: number; }[]; }',
    markdown:
      "## list\n\n`client.connections.list(): { connections: object[]; }`\n\n**get** `/connections/list`\n\nList all connections for the user.\n\n### Returns\n\n- `{ connections: { id: string; integration_id: string; label: string; provider: string; selected_count?: number; }[]; }`\n\n  - `connections: { id: string; integration_id: string; label: string; provider: string; selected_count?: number; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst connections = await client.connections.list();\n\nconsole.log(connections);\n```",
    perLanguage: {
      typescript: {
        method: 'client.connections.list',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst connections = await client.connections.list();\n\nconsole.log(connections.connections);",
      },
      python: {
        method: 'connections.list',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nconnections = client.connections.list()\nprint(connections.connections)',
      },
      go: {
        method: 'client.Connections.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tconnections, err := client.Connections.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", connections.Connections)\n}\n',
      },
      cli: {
        method: 'connections list',
        example: "hyperspell connections list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/connections/list \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## list\n\n`client.folders.list(connection_id: string, parent_id?: string): { folders: object[]; }`\n\n**get** `/connections/{connection_id}/folders`\n\nList one level of folders from the user's connected source.\n\nReturns folders decorated with their explicit folder policy (if any).\nUse parent_id to drill into subfolders.\n\n### Parameters\n\n- `connection_id: string`\n\n- `parent_id?: string`\n  Parent folder ID. Omit for root-level folders.\n\n### Returns\n\n- `{ folders: { has_children: boolean; name: string; provider_folder_id: string; parent_folder_id?: string; policy?: { id: string; sync_mode: 'sync' | 'skip' | 'manual'; }; }[]; }`\n\n  - `folders: { has_children: boolean; name: string; provider_folder_id: string; parent_folder_id?: string; policy?: { id: string; sync_mode: 'sync' | 'skip' | 'manual'; }; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst folders = await client.folders.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(folders);\n```",
    perLanguage: {
      typescript: {
        method: 'client.folders.list',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst folders = await client.folders.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(folders.folders);",
      },
      python: {
        method: 'folders.list',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nfolders = client.folders.list(\n    connection_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(folders.folders)',
      },
      go: {
        method: 'client.Folders.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfolders, err := client.Folders.List(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\thyperspell.FolderListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", folders.Folders)\n}\n',
      },
      cli: {
        method: 'folders list',
        example:
          "hyperspell folders list \\\n  --api-key 'My API Key' \\\n  --connection-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/connections/$CONNECTION_ID/folders \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## list_policies\n\n`client.folders.listPolicies(connection_id: string): { policies: object[]; }`\n\n**get** `/connections/{connection_id}/folder-policies`\n\nList all folder policies for a specific connection.\n\n### Parameters\n\n- `connection_id: string`\n\n### Returns\n\n- `{ policies: { id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }[]; }`\n\n  - `policies: { id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.folders.listPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.folders.listPolicies',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.folders.listPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.policies);",
      },
      python: {
        method: 'folders.list_policies',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.folders.list_policies(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.policies)',
      },
      go: {
        method: 'client.Folders.ListPolicies',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Folders.ListPolicies(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Policies)\n}\n',
      },
      cli: {
        method: 'folders list_policies',
        example:
          "hyperspell folders list-policies \\\n  --api-key 'My API Key' \\\n  --connection-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/connections/$CONNECTION_ID/folder-policies \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## set_policies\n\n`client.folders.setPolicies(connection_id: string, provider_folder_id: string, sync_mode: 'sync' | 'skip' | 'manual', folder_name?: string, folder_path?: string, parent_folder_id?: string): { id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }`\n\n**post** `/connections/{connection_id}/folder-policies`\n\nCreate or update a folder policy for a specific connection.\n\n### Parameters\n\n- `connection_id: string`\n\n- `provider_folder_id: string`\n  Folder ID from the source provider\n\n- `sync_mode: 'sync' | 'skip' | 'manual'`\n  Sync mode for this folder\n\n- `folder_name?: string`\n  Display name of the folder\n\n- `folder_path?: string`\n  Display path of the folder\n\n- `parent_folder_id?: string`\n  Parent folder's provider ID for inheritance resolution\n\n### Returns\n\n- `{ id: string; provider_folder_id: string; sync_mode: 'sync' | 'skip' | 'manual'; connection_id?: string; folder_name?: string; folder_path?: string; parent_folder_id?: string; }`\n\n  - `id: string`\n  - `provider_folder_id: string`\n  - `sync_mode: 'sync' | 'skip' | 'manual'`\n  - `connection_id?: string`\n  - `folder_name?: string`\n  - `folder_path?: string`\n  - `parent_folder_id?: string`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.folders.setPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { provider_folder_id: 'provider_folder_id', sync_mode: 'sync' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.folders.setPolicies',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.folders.setPolicies('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  provider_folder_id: 'provider_folder_id',\n  sync_mode: 'sync',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'folders.set_policies',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.folders.set_policies(\n    connection_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    provider_folder_id="provider_folder_id",\n    sync_mode="sync",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Folders.SetPolicies',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Folders.SetPolicies(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\thyperspell.FolderSetPoliciesParams{\n\t\t\tProviderFolderID: "provider_folder_id",\n\t\t\tSyncMode:         hyperspell.FolderSetPoliciesParamsSyncModeSync,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'folders set_policies',
        example:
          "hyperspell folders set-policies \\\n  --api-key 'My API Key' \\\n  --connection-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --provider-folder-id provider_folder_id \\\n  --sync-mode sync",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/connections/$CONNECTION_ID/folder-policies \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY" \\\n    -d \'{\n          "provider_folder_id": "provider_folder_id",\n          "sync_mode": "sync"\n        }\'',
      },
    },
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
      "## delete_policy\n\n`client.folders.deletePolicy(connection_id: string, policy_id: string): { success: boolean; }`\n\n**delete** `/connections/{connection_id}/folder-policies/{policy_id}`\n\nDelete a folder policy for a specific connection.\n\n### Parameters\n\n- `connection_id: string`\n\n- `policy_id: string`\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.folders.deletePolicy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { connection_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.folders.deletePolicy',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.folders.deletePolicy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  connection_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.success);",
      },
      python: {
        method: 'folders.delete_policy',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.folders.delete_policy(\n    policy_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    connection_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.success)',
      },
      go: {
        method: 'client.Folders.DeletePolicy',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Folders.DeletePolicy(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\thyperspell.FolderDeletePolicyParams{\n\t\t\tConnectionID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Success)\n}\n',
      },
      cli: {
        method: 'folders delete_policy',
        example:
          "hyperspell folders delete-policy \\\n  --api-key 'My API Key' \\\n  --connection-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --policy-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/connections/$CONNECTION_ID/folder-policies/$POLICY_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "{ integrations: { id: string; allow_multiple_connections: boolean; auth_provider: 'nango' | 'unified' | 'whitelabel'; icon: string; name: string; provider: string; actions_only?: boolean; requires_channel_selection?: boolean; }[]; }",
    markdown:
      "## list\n\n`client.integrations.list(): { integrations: object[]; }`\n\n**get** `/integrations/list`\n\nList all integrations for the user.\n\n### Returns\n\n- `{ integrations: { id: string; allow_multiple_connections: boolean; auth_provider: 'nango' | 'unified' | 'whitelabel'; icon: string; name: string; provider: string; actions_only?: boolean; requires_channel_selection?: boolean; }[]; }`\n\n  - `integrations: { id: string; allow_multiple_connections: boolean; auth_provider: 'nango' | 'unified' | 'whitelabel'; icon: string; name: string; provider: string; actions_only?: boolean; requires_channel_selection?: boolean; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst integrations = await client.integrations.list();\n\nconsole.log(integrations);\n```",
    perLanguage: {
      typescript: {
        method: 'client.integrations.list',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst integrations = await client.integrations.list();\n\nconsole.log(integrations.integrations);",
      },
      python: {
        method: 'integrations.list',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nintegrations = client.integrations.list()\nprint(integrations.integrations)',
      },
      go: {
        method: 'client.Integrations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tintegrations, err := client.Integrations.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", integrations.Integrations)\n}\n',
      },
      cli: {
        method: 'integrations list',
        example: "hyperspell integrations list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/integrations/list \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## connect\n\n`client.integrations.connect(integration_id: string, redirect_url?: string): { expires_at: string; url: string; }`\n\n**get** `/integrations/{integration_id}/connect`\n\nRedirects to the connect URL to link an integration.\n\n### Parameters\n\n- `integration_id: string`\n\n- `redirect_url?: string`\n\n### Returns\n\n- `{ expires_at: string; url: string; }`\n\n  - `expires_at: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.integrations.connect('integration_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.integrations.connect',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.integrations.connect('integration_id');\n\nconsole.log(response.expires_at);",
      },
      python: {
        method: 'integrations.connect',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.integrations.connect(\n    integration_id="integration_id",\n)\nprint(response.expires_at)',
      },
      go: {
        method: 'client.Integrations.Connect',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Integrations.Connect(\n\t\tcontext.TODO(),\n\t\t"integration_id",\n\t\thyperspell.IntegrationConnectParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ExpiresAt)\n}\n',
      },
      cli: {
        method: 'integrations connect',
        example:
          "hyperspell integrations connect \\\n  --api-key 'My API Key' \\\n  --integration-id integration_id",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/integrations/$INTEGRATION_ID/connect \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## list\n\n`client.integrations.googleCalendar.list(): { items: object[]; }`\n\n**get** `/integrations/google_calendar/list`\n\nList available calendars for a user. This can be used to ie. populate a dropdown for the user to select a calendar.\n\n### Returns\n\n- `{ items: { id: string; name: string; primary: boolean; timezone: string; }[]; }`\n\n  - `items: { id: string; name: string; primary: boolean; timezone: string; }[]`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst calendar = await client.integrations.googleCalendar.list();\n\nconsole.log(calendar);\n```",
    perLanguage: {
      typescript: {
        method: 'client.integrations.googleCalendar.list',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst calendar = await client.integrations.googleCalendar.list();\n\nconsole.log(calendar.items);",
      },
      python: {
        method: 'integrations.google_calendar.list',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\ncalendar = client.integrations.google_calendar.list()\nprint(calendar.items)',
      },
      go: {
        method: 'client.Integrations.GoogleCalendar.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcalendar, err := client.Integrations.GoogleCalendar.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", calendar.Items)\n}\n',
      },
      cli: {
        method: 'google_calendar list',
        example: "hyperspell integrations:google-calendar list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/integrations/google_calendar/list \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## index\n\n`client.integrations.webCrawler.index(url: string, limit?: number, max_depth?: number): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**get** `/integrations/web_crawler/index`\n\nRecursively crawl a website to make it available for indexed search.\n\n### Parameters\n\n- `url: string`\n  The base URL of the website to crawl\n\n- `limit?: number`\n  Maximum number of pages to crawl in total\n\n- `max_depth?: number`\n  Maximum depth of links to follow during crawling\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.integrations.webCrawler.index({ url: 'url' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.integrations.webCrawler.index',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.integrations.webCrawler.index({ url: 'url' });\n\nconsole.log(response.resource_id);",
      },
      python: {
        method: 'integrations.web_crawler.index',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.integrations.web_crawler.index(\n    url="url",\n)\nprint(response.resource_id)',
      },
      go: {
        method: 'client.Integrations.WebCrawler.Index',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Integrations.WebCrawler.Index(context.TODO(), hyperspell.IntegrationWebCrawlerIndexParams{\n\t\tURL: "url",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ResourceID)\n}\n',
      },
      cli: {
        method: 'web_crawler index',
        example: "hyperspell integrations:web-crawler index \\\n  --api-key 'My API Key' \\\n  --url url",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/integrations/web_crawler/index \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## list\n\n`client.integrations.slack.list(channels?: string[], exclude_archived?: boolean, include_dms?: boolean, include_group_dms?: boolean, include_private?: boolean): object`\n\n**get** `/integrations/slack/list`\n\nList Slack conversations accessible to the user via the live Nango connection.\n\nReturns minimal channel metadata suitable for selection UIs. If required\nscopes are missing, Slack's error is propagated with details.\n\nSupports filtering by channels, including/excluding private channels, DMs,\ngroup DMs, and archived channels based on the provided search options.\n\n### Parameters\n\n- `channels?: string[]`\n  List of Slack channels to include (by id, name, or #name).\n\n- `exclude_archived?: boolean`\n  If set, pass 'exclude_archived' to Slack. If None, omit the param.\n\n- `include_dms?: boolean`\n  Include direct messages (im) when listing conversations.\n\n- `include_group_dms?: boolean`\n  Include group DMs (mpim) when listing conversations.\n\n- `include_private?: boolean`\n  Include private channels when constructing Slack 'types'.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst slacks = await client.integrations.slack.list();\n\nconsole.log(slacks);\n```",
    perLanguage: {
      typescript: {
        method: 'client.integrations.slack.list',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst slacks = await client.integrations.slack.list();\n\nconsole.log(slacks);",
      },
      python: {
        method: 'integrations.slack.list',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nslacks = client.integrations.slack.list()\nprint(slacks)',
      },
      go: {
        method: 'client.Integrations.Slack.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tslacks, err := client.Integrations.Slack.List(context.TODO(), hyperspell.IntegrationSlackListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", slacks)\n}\n',
      },
      cli: {
        method: 'slack list',
        example: "hyperspell integrations:slack list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/integrations/slack/list \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## add\n\n`client.memories.add(text: string, collection?: string, date?: string, metadata?: object, resource_id?: string, title?: string): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**post** `/memories/add`\n\nAdds an arbitrary document to the index. This can be any text, email,\ncall transcript, etc. The document will be processed and made available for\nquerying once the processing is complete.\n\n### Parameters\n\n- `text: string`\n  Full text of the document.\n\n- `collection?: string`\n  The collection to add the document to — deprecated, set the collection using metadata instead.\n\n- `date?: string`\n  Date of the document. Depending on the document, this could be the creation date or date the document was last updated (eg. for a chat transcript, this would be the date of the last message). This helps the ranking algorithm and allows you to filter by date range.\n\n- `metadata?: object`\n  Custom metadata for filtering. Keys must be alphanumeric with underscores, max 64 chars. Values must be string, number, boolean, or null.\n\n- `resource_id?: string`\n  The resource ID to add the document to. If not provided, a new resource ID will be generated. If provided, the document will be updated if it already exists.\n\n- `title?: string`\n  Title of the document.\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst memoryStatus = await client.memories.add({ text: '...' });\n\nconsole.log(memoryStatus);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.add',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst memoryStatus = await client.memories.add({ text: '...' });\n\nconsole.log(memoryStatus.resource_id);",
      },
      python: {
        method: 'memories.add',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nmemory_status = client.memories.add(\n    text="...",\n)\nprint(memory_status.resource_id)',
      },
      go: {
        method: 'client.Memories.Add',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmemoryStatus, err := client.Memories.Add(context.TODO(), hyperspell.MemoryAddParams{\n\t\tText: "...",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", memoryStatus.ResourceID)\n}\n',
      },
      cli: {
        method: 'memories add',
        example: "hyperspell memories add \\\n  --api-key 'My API Key' \\\n  --text ...",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/memories/add \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY" \\\n    -d \'{\n          "text": "...",\n          "collection": "my-collection",\n          "metadata": {\n            "author": "John Doe",\n            "date": "2025-05-20T02:31:00Z",\n            "rating": 3\n          },\n          "title": "My Document"\n        }\'',
      },
    },
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
      "## add_bulk\n\n`client.memories.addBulk(items: { text: string; collection?: string; date?: string; metadata?: object; resource_id?: string; title?: string; }[]): { count: number; items: memory_status[]; success?: boolean; }`\n\n**post** `/memories/add/bulk`\n\nAdds multiple documents to the index in a single request.\n\nAll items are validated before any database operations occur. If any item\nfails validation, the entire batch is rejected with a 422 error detailing\nwhich items failed and why.\n\nMaximum 100 items per request. Each item follows the same schema as the\nsingle-item /memories/add endpoint.\n\n### Parameters\n\n- `items: { text: string; collection?: string; date?: string; metadata?: object; resource_id?: string; title?: string; }[]`\n  List of memories to ingest. Maximum 100 items.\n\n### Returns\n\n- `{ count: number; items: { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }[]; success?: boolean; }`\n  Response schema for successful bulk ingestion.\n\n  - `count: number`\n  - `items: { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }[]`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.memories.addBulk({ items: [{ text: '...' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.addBulk',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.memories.addBulk({ items: [{ text: '...' }] });\n\nconsole.log(response.count);",
      },
      python: {
        method: 'memories.add_bulk',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.memories.add_bulk(\n    items=[{\n        "text": "..."\n    }],\n)\nprint(response.count)',
      },
      go: {
        method: 'client.Memories.AddBulk',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Memories.AddBulk(context.TODO(), hyperspell.MemoryAddBulkParams{\n\t\tItems: []hyperspell.MemoryAddBulkParamsItem{{\n\t\t\tText: "...",\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Count)\n}\n',
      },
      cli: {
        method: 'memories add_bulk',
        example: "hyperspell memories add-bulk \\\n  --api-key 'My API Key' \\\n  --item '{text: ...}'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/memories/add/bulk \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY" \\\n    -d \'{\n          "items": [\n            {\n              "text": "...",\n              "collection": "my-collection",\n              "metadata": {\n                "author": "John Doe",\n                "date": "2025-05-20T02:31:00Z",\n                "rating": 3\n              },\n              "title": "My Document"\n            }\n          ]\n        }\'',
      },
    },
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
      "## upload\n\n`client.memories.upload(file: string, collection?: string, metadata?: string): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**post** `/memories/upload`\n\nThis endpoint will upload a file to the index and return a resource_id.\nThe file will be processed in the background and the memory will be available for querying once the processing is complete.\nYou can use the `resource_id` to query the memory later, and check the status of the memory.\n\n### Parameters\n\n- `file: string`\n  The file to ingest.\n\n- `collection?: string`\n  The collection to add the document to — deprecated, set the collection using metadata instead.\n\n- `metadata?: string`\n  Custom metadata as JSON string for filtering. Keys must be alphanumeric with underscores, max 64 chars. Values must be string, number, or boolean.\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst memoryStatus = await client.memories.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(memoryStatus);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.upload',
        example:
          "import fs from 'fs';\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst memoryStatus = await client.memories.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(memoryStatus.resource_id);",
      },
      python: {
        method: 'memories.upload',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nmemory_status = client.memories.upload(\n    file=b"Example data",\n)\nprint(memory_status.resource_id)',
      },
      go: {
        method: 'client.Memories.Upload',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmemoryStatus, err := client.Memories.Upload(context.TODO(), hyperspell.MemoryUploadParams{\n\t\tFile: io.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", memoryStatus.ResourceID)\n}\n',
      },
      cli: {
        method: 'memories upload',
        example: "hyperspell memories upload \\\n  --api-key 'My API Key' \\\n  --file 'Example data'",
      },
      http: {
        example:
          "curl https://api.hyperspell.com/memories/upload \\\n    -H 'Content-Type: multipart/form-data' \\\n    -H \"Authorization: Bearer $HYPERSPELL_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
    },
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
      'date?: string | object;',
      'metadata?: object | object;',
      'text?: string | object;',
      'title?: string | object;',
    ],
    response:
      "{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }",
    markdown:
      "## update\n\n`client.memories.update(source: string, resource_id: string, collection?: string | object, date?: string | object, metadata?: object | object, text?: string | object, title?: string | object): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**post** `/memories/update/{source}/{resource_id}`\n\nUpdates an existing document in the index. You can update the text, collection,\ntitle, and metadata. The document must already exist or a 404 will be returned.\nThis works for documents from any source (vault, slack, gmail, etc.).\n\nTo remove a collection, set it to null explicitly.\n\n### Parameters\n\n- `source: string`\n\n- `resource_id: string`\n\n- `collection?: string | object`\n  The collection to move the document to — deprecated, set the collection using metadata instead.\n\n- `date?: string | object`\n  Date of the document for ranking and filtering.\n\n- `metadata?: object | object`\n  Custom metadata for filtering. Keys must be alphanumeric with underscores, max 64 chars. Values must be string, number, boolean, or null. Will be merged with existing metadata.\n\n- `text?: string | object`\n  Full text of the document. If provided, the document will be re-indexed.\n\n- `title?: string | object`\n  Title of the document.\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst memoryStatus = await client.memories.update('resource_id', { source: 'reddit' });\n\nconsole.log(memoryStatus);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.update',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst memoryStatus = await client.memories.update('resource_id', { source: 'reddit' });\n\nconsole.log(memoryStatus.resource_id);",
      },
      python: {
        method: 'memories.update',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nmemory_status = client.memories.update(\n    resource_id="resource_id",\n    source="reddit",\n)\nprint(memory_status.resource_id)',
      },
      go: {
        method: 'client.Memories.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmemoryStatus, err := client.Memories.Update(\n\t\tcontext.TODO(),\n\t\t"resource_id",\n\t\thyperspell.MemoryUpdateParams{\n\t\t\tSource: hyperspell.MemoryUpdateParamsSourceReddit,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", memoryStatus.ResourceID)\n}\n',
      },
      cli: {
        method: 'memories update',
        example:
          "hyperspell memories update \\\n  --api-key 'My API Key' \\\n  --source reddit \\\n  --resource-id resource_id",
      },
      http: {
        example:
          "curl https://api.hyperspell.com/memories/update/$SOURCE/$RESOURCE_ID \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $HYPERSPELL_API_KEY\" \\\n    -d '{}'",
      },
    },
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
      "{ resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; parent_folder_id?: string; score?: number; title?: string; }",
    markdown:
      "## list\n\n`client.memories.list(collection?: string, cursor?: string, filter?: string, size?: number, source?: string, status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'): { resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }`\n\n**get** `/memories/list`\n\nThis endpoint allows you to paginate through all documents in the index.\nYou can filter the documents by title, date, metadata, etc.\n\n### Parameters\n\n- `collection?: string`\n  Filter documents by collection.\n\n- `cursor?: string`\n\n- `filter?: string`\n  Filter documents by metadata using MongoDB-style operators. Example: {\"department\": \"engineering\", \"priority\": {\"$gt\": 3}}\n\n- `size?: number`\n\n- `source?: string`\n  Filter documents by source.\n\n- `status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n  Filter documents by status.\n\n### Returns\n\n- `{ resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; parent_folder_id?: string; score?: number; title?: string; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `folder_ancestors?: string[]`\n  - `folder_id?: string`\n  - `metadata?: { created_at?: string; events?: { message: string; type: 'error' | 'warning' | 'info' | 'success'; time?: string; }[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }`\n  - `parent_folder_id?: string`\n  - `score?: number`\n  - `title?: string`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\n// Automatically fetches more pages as needed.\nfor await (const resource of client.memories.list()) {\n  console.log(resource);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.list',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const resource of client.memories.list()) {\n  console.log(resource.resource_id);\n}",
      },
      python: {
        method: 'memories.list',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\npage = client.memories.list()\npage = page.items[0]\nprint(page.resource_id)',
      },
      go: {
        method: 'client.Memories.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Memories.List(context.TODO(), hyperspell.MemoryListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      cli: {
        method: 'memories list',
        example: "hyperspell memories list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/memories/list \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## status\n\n`client.memories.status(): { providers: object; total: object; }`\n\n**get** `/memories/status`\n\nThis endpoint shows the indexing progress of documents, both by provider and total.\n\n### Returns\n\n- `{ providers: object; total: object; }`\n\n  - `providers: object`\n  - `total: object`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.memories.status();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.status',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.memories.status();\n\nconsole.log(response.providers);",
      },
      python: {
        method: 'memories.status',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.memories.status()\nprint(response.providers)',
      },
      go: {
        method: 'client.Memories.Status',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Memories.Status(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Providers)\n}\n',
      },
      cli: {
        method: 'memories status',
        example: "hyperspell memories status \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/memories/status \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## get\n\n`client.memories.get(source: string, resource_id: string): { resource_id: string; source: string; type: string; data?: object[]; memories?: string[]; metadata?: metadata; title?: string; }`\n\n**get** `/memories/get/{source}/{resource_id}`\n\nRetrieves a document by provider and resource_id.\n\n### Parameters\n\n- `source: string`\n\n- `resource_id: string`\n\n### Returns\n\n- `{ resource_id: string; source: string; type: string; data?: object[]; memories?: string[]; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; title?: string; }`\n  Response model for the GET /memories/get endpoint.\n\n  - `resource_id: string`\n  - `source: string`\n  - `type: string`\n  - `data?: object[]`\n  - `memories?: string[]`\n  - `metadata?: { created_at?: string; events?: { message: string; type: 'error' | 'warning' | 'info' | 'success'; time?: string; }[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }`\n  - `title?: string`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst memory = await client.memories.get('resource_id', { source: 'reddit' });\n\nconsole.log(memory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.get',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst memory = await client.memories.get('resource_id', { source: 'reddit' });\n\nconsole.log(memory.resource_id);",
      },
      python: {
        method: 'memories.get',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nmemory = client.memories.get(\n    resource_id="resource_id",\n    source="reddit",\n)\nprint(memory.resource_id)',
      },
      go: {
        method: 'client.Memories.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmemory, err := client.Memories.Get(\n\t\tcontext.TODO(),\n\t\t"resource_id",\n\t\thyperspell.MemoryGetParams{\n\t\t\tSource: hyperspell.MemoryGetParamsSourceReddit,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", memory.ResourceID)\n}\n',
      },
      cli: {
        method: 'memories get',
        example:
          "hyperspell memories get \\\n  --api-key 'My API Key' \\\n  --source reddit \\\n  --resource-id resource_id",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/memories/get/$SOURCE/$RESOURCE_ID \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "effort?: 'minimal' | 'low' | 'medium' | 'high' | 'very_high';",
      'max_results?: number;',
      "options?: { after?: string; answer_model?: string; before?: string; box?: { weight?: number; }; filter?: object; google_calendar?: { calendar_id?: string; weight?: number; }; google_drive?: { weight?: number; }; google_mail?: { label_ids?: string[]; weight?: number; }; max_results?: number; memory_types?: 'procedure' | 'memory' | 'mood'[]; notion?: { notion_page_ids?: string[]; weight?: number; }; recency_half_life_days?: number; reddit?: { period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'; sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments'; subreddit?: string; weight?: number; }; resource_ids?: string[]; slack?: { channels?: string[]; exclude_archived?: boolean; include_dms?: boolean; include_group_dms?: boolean; include_private?: boolean; weight?: number; }; vault?: { weight?: number; }; web_crawler?: { max_depth?: number; url?: string; weight?: number; }; };",
      'provenance?: boolean;',
      'sources?: string[];',
    ],
    response:
      '{ documents: { resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }[]; answer?: string; errors?: object[]; provenance?: { entities?: { id: string; name: string; type: string; }[]; failed_sources?: string[]; sources?: { resource_id: string; source: string; score?: number; title?: string; }[]; steps?: { iteration: number; status: string; tool: string; query?: string; result_count?: number; source?: string; }[]; }; query?: string; query_id?: string; score?: number; }',
    markdown:
      "## search\n\n`client.memories.search(query: string, answer?: boolean, effort?: 'minimal' | 'low' | 'medium' | 'high' | 'very_high', max_results?: number, options?: { after?: string; answer_model?: string; before?: string; box?: { weight?: number; }; filter?: object; google_calendar?: { calendar_id?: string; weight?: number; }; google_drive?: { weight?: number; }; google_mail?: { label_ids?: string[]; weight?: number; }; max_results?: number; memory_types?: 'procedure' | 'memory' | 'mood'[]; notion?: { notion_page_ids?: string[]; weight?: number; }; recency_half_life_days?: number; reddit?: { period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'; sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments'; subreddit?: string; weight?: number; }; resource_ids?: string[]; slack?: { channels?: string[]; exclude_archived?: boolean; include_dms?: boolean; include_group_dms?: boolean; include_private?: boolean; weight?: number; }; vault?: { weight?: number; }; web_crawler?: { max_depth?: number; url?: string; weight?: number; }; }, provenance?: boolean, sources?: string[]): { documents: resource[]; answer?: string; errors?: object[]; provenance?: object; query?: string; query_id?: string; score?: number; }`\n\n**post** `/memories/query`\n\nRetrieves documents matching the query.\n\n### Parameters\n\n- `query: string`\n  Query to run.\n\n- `answer?: boolean`\n  If true, the query will be answered along with matching source documents.\n\n- `effort?: 'minimal' | 'low' | 'medium' | 'high' | 'very_high'`\n  How much compute to spend on retrieval. Mirrors the dial popularized by frontier-model APIs (OpenAI reasoning_effort, etc.). 'minimal' = verbatim single-shot retrieval (fastest). 'low' = LLM rewrites the query for better retrieval and extracts date filters. 'medium' = rewrite + agentic refinement loop (the answer LLM may request additional retrieval rounds, up to 3). 'high' = rewrite + extended refinement (up to 6 rounds). Higher = better recall, more latency, more cost.\n\n- `max_results?: number`\n  Maximum number of results to return.\n\n- `options?: { after?: string; answer_model?: string; before?: string; box?: { weight?: number; }; filter?: object; google_calendar?: { calendar_id?: string; weight?: number; }; google_drive?: { weight?: number; }; google_mail?: { label_ids?: string[]; weight?: number; }; max_results?: number; memory_types?: 'procedure' | 'memory' | 'mood'[]; notion?: { notion_page_ids?: string[]; weight?: number; }; recency_half_life_days?: number; reddit?: { period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'; sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments'; subreddit?: string; weight?: number; }; resource_ids?: string[]; slack?: { channels?: string[]; exclude_archived?: boolean; include_dms?: boolean; include_group_dms?: boolean; include_private?: boolean; weight?: number; }; vault?: { weight?: number; }; web_crawler?: { max_depth?: number; url?: string; weight?: number; }; }`\n  Search options for the query.\n  - `after?: string`\n    Only query documents created on or after this date.\n  - `answer_model?: string`\n    Model to use for answer generation when answer=True\n  - `before?: string`\n    Only query documents created before this date.\n  - `box?: { weight?: number; }`\n    Search options for Box\n  - `filter?: object`\n    Metadata filters using MongoDB-style operators. Example: {'status': 'published', 'priority': {'$gt': 3}}\n  - `google_calendar?: { calendar_id?: string; weight?: number; }`\n    Search options for Google Calendar\n  - `google_drive?: { weight?: number; }`\n    Search options for Google Drive\n  - `google_mail?: { label_ids?: string[]; weight?: number; }`\n    Search options for Gmail\n  - `max_results?: number`\n    Maximum number of results to return.\n  - `memory_types?: 'procedure' | 'memory' | 'mood'[]`\n    Filter by memory type. Defaults to generic memories only. Pass multiple types to include procedures, etc.\n  - `notion?: { notion_page_ids?: string[]; weight?: number; }`\n    Search options for Notion\n  - `recency_half_life_days?: number`\n    When set, multiplies each result's score by an exponential-decay factor based on the document's most recent activity timestamp (source-reported last_modified, falling back to document_date). A document one half-life old gets its score halved. Resources with no recency timestamp are passed through unchanged. Leave unset to disable.\n  - `reddit?: { period?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'; sort?: 'relevance' | 'new' | 'hot' | 'top' | 'comments'; subreddit?: string; weight?: number; }`\n    Search options for Reddit\n  - `resource_ids?: string[]`\n    Only return results from these specific resource IDs. Useful for scoping searches to specific documents (e.g., a specific email thread or uploaded file).\n  - `slack?: { channels?: string[]; exclude_archived?: boolean; include_dms?: boolean; include_group_dms?: boolean; include_private?: boolean; weight?: number; }`\n    Search options for Slack\n  - `vault?: { weight?: number; }`\n    Search options for vault\n  - `web_crawler?: { max_depth?: number; url?: string; weight?: number; }`\n    Search options for Web Crawler\n\n- `provenance?: boolean`\n  If true (effort='very_high' only), attach a provenance record to the response: the source documents and entities the answer was grounded in, the agent's search trajectory, and any sources that failed. Adds one indexed lookup; intended for auditability / compliance use cases.\n\n- `sources?: string[]`\n  Only query documents from these sources.\n\n### Returns\n\n- `{ documents: { resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }[]; answer?: string; errors?: object[]; provenance?: { entities?: { id: string; name: string; type: string; }[]; failed_sources?: string[]; sources?: { resource_id: string; source: string; score?: number; title?: string; }[]; steps?: { iteration: number; status: string; tool: string; query?: string; result_count?: number; source?: string; }[]; }; query?: string; query_id?: string; score?: number; }`\n\n  - `documents: { resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; parent_folder_id?: string; score?: number; title?: string; }[]`\n  - `answer?: string`\n  - `errors?: object[]`\n  - `provenance?: { entities?: { id: string; name: string; type: string; }[]; failed_sources?: string[]; sources?: { resource_id: string; source: string; score?: number; title?: string; }[]; steps?: { iteration: number; status: string; tool: string; query?: string; result_count?: number; source?: string; }[]; }`\n  - `query?: string`\n  - `query_id?: string`\n  - `score?: number`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst queryResult = await client.memories.search({ query: 'What does Hyperspell do?' });\n\nconsole.log(queryResult);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.search',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst queryResult = await client.memories.search({ query: 'What does Hyperspell do?' });\n\nconsole.log(queryResult.query_id);",
      },
      python: {
        method: 'memories.search',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nquery_result = client.memories.search(\n    query="What does Hyperspell do?",\n)\nprint(query_result.query_id)',
      },
      go: {
        method: 'client.Memories.Search',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tqueryResult, err := client.Memories.Search(context.TODO(), hyperspell.MemorySearchParams{\n\t\tQuery: "What does Hyperspell do?",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", queryResult.QueryID)\n}\n',
      },
      cli: {
        method: 'memories search',
        example:
          "hyperspell memories search \\\n  --api-key 'My API Key' \\\n  --query 'What does Hyperspell do?'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/memories/query \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY" \\\n    -d \'{\n          "query": "What does Hyperspell do?",\n          "answer": true,\n          "options": {\n            "filter": {}\n          },\n          "sources": [\n            "vault"\n          ]\n        }\'',
      },
    },
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
      "## delete\n\n`client.memories.delete(source: string, resource_id: string): { chunks_deleted: number; message: string; resource_id: string; source: string; success: boolean; }`\n\n**delete** `/memories/delete/{source}/{resource_id}`\n\nDelete a memory and its associated chunks from the index.\n\nThis removes the memory completely from the vector index and database.\nThe operation deletes:\n1. All chunks associated with the resource (including embeddings)\n2. The resource record itself\n\nArgs:\n    source: The document provider (e.g., gmail, notion, vault)\n    resource_id: The unique identifier of the resource to delete\n    api_token: Authentication token\n\nReturns:\n    MemoryDeletionResponse with deletion details\n\nRaises:\n    DocumentNotFound: If the resource doesn't exist or user doesn't have access\n\n### Parameters\n\n- `source: string`\n\n- `resource_id: string`\n\n### Returns\n\n- `{ chunks_deleted: number; message: string; resource_id: string; source: string; success: boolean; }`\n\n  - `chunks_deleted: number`\n  - `message: string`\n  - `resource_id: string`\n  - `source: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst memory = await client.memories.delete('resource_id', { source: 'reddit' });\n\nconsole.log(memory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.delete',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst memory = await client.memories.delete('resource_id', { source: 'reddit' });\n\nconsole.log(memory.resource_id);",
      },
      python: {
        method: 'memories.delete',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nmemory = client.memories.delete(\n    resource_id="resource_id",\n    source="reddit",\n)\nprint(memory.resource_id)',
      },
      go: {
        method: 'client.Memories.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmemory, err := client.Memories.Delete(\n\t\tcontext.TODO(),\n\t\t"resource_id",\n\t\thyperspell.MemoryDeleteParams{\n\t\t\tSource: hyperspell.MemoryDeleteParamsSourceReddit,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", memory.ResourceID)\n}\n',
      },
      cli: {
        method: 'memories delete',
        example:
          "hyperspell memories delete \\\n  --api-key 'My API Key' \\\n  --source reddit \\\n  --resource-id resource_id",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/memories/delete/$SOURCE/$RESOURCE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
  },
  {
    name: 'list_queries',
    endpoint: '/evaluate/queries',
    httpMethod: 'get',
    summary: 'List prior queries',
    description:
      'Paginate through all prior queries for the app, newest first.\n\nUser tokens only see their own queries; admin tokens see every query in the\napp and can narrow to a single user with the `user_id` filter.',
    stainlessPath: '(resource) evaluate > (method) list_queries',
    qualified: 'client.evaluate.listQueries',
    params: ['cursor?: string;', 'size?: number;', 'user_id?: string;'],
    response: '{ query: string; query_id: string; time: string; user_id?: string; }',
    markdown:
      "## list_queries\n\n`client.evaluate.listQueries(cursor?: string, size?: number, user_id?: string): { query: string; query_id: string; time: string; user_id?: string; }`\n\n**get** `/evaluate/queries`\n\nPaginate through all prior queries for the app, newest first.\n\nUser tokens only see their own queries; admin tokens see every query in the\napp and can narrow to a single user with the `user_id` filter.\n\n### Parameters\n\n- `cursor?: string`\n\n- `size?: number`\n\n- `user_id?: string`\n  Filter queries by the user that issued them.\n\n### Returns\n\n- `{ query: string; query_id: string; time: string; user_id?: string; }`\n\n  - `query: string`\n  - `query_id: string`\n  - `time: string`\n  - `user_id?: string`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\n// Automatically fetches more pages as needed.\nfor await (const evaluateListQueriesResponse of client.evaluate.listQueries()) {\n  console.log(evaluateListQueriesResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.evaluate.listQueries',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const evaluateListQueriesResponse of client.evaluate.listQueries()) {\n  console.log(evaluateListQueriesResponse.query_id);\n}",
      },
      python: {
        method: 'evaluate.list_queries',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\npage = client.evaluate.list_queries()\npage = page.items[0]\nprint(page.query_id)',
      },
      go: {
        method: 'client.Evaluate.ListQueries',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Evaluate.ListQueries(context.TODO(), hyperspell.EvaluateListQueriesParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      cli: {
        method: 'evaluate list_queries',
        example: "hyperspell evaluate list-queries \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/evaluate/queries \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      '{ documents: { resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }[]; answer?: string; errors?: object[]; provenance?: { entities?: { id: string; name: string; type: string; }[]; failed_sources?: string[]; sources?: { resource_id: string; source: string; score?: number; title?: string; }[]; steps?: { iteration: number; status: string; tool: string; query?: string; result_count?: number; source?: string; }[]; }; query?: string; query_id?: string; score?: number; }',
    markdown:
      "## get_query\n\n`client.evaluate.getQuery(query_id: string): { documents: resource[]; answer?: string; errors?: object[]; provenance?: object; query?: string; query_id?: string; score?: number; }`\n\n**get** `/evaluate/query/{query_id}`\n\nRetrieve the result of a previous query.\n\n### Parameters\n\n- `query_id: string`\n\n### Returns\n\n- `{ documents: { resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: metadata; parent_folder_id?: string; score?: number; title?: string; }[]; answer?: string; errors?: object[]; provenance?: { entities?: { id: string; name: string; type: string; }[]; failed_sources?: string[]; sources?: { resource_id: string; source: string; score?: number; title?: string; }[]; steps?: { iteration: number; status: string; tool: string; query?: string; result_count?: number; source?: string; }[]; }; query?: string; query_id?: string; score?: number; }`\n\n  - `documents: { resource_id: string; source: string; folder_ancestors?: string[]; folder_id?: string; metadata?: { created_at?: string; events?: notification[]; indexed_at?: string; last_modified?: string; status?: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; url?: string; }; parent_folder_id?: string; score?: number; title?: string; }[]`\n  - `answer?: string`\n  - `errors?: object[]`\n  - `provenance?: { entities?: { id: string; name: string; type: string; }[]; failed_sources?: string[]; sources?: { resource_id: string; source: string; score?: number; title?: string; }[]; steps?: { iteration: number; status: string; tool: string; query?: string; result_count?: number; source?: string; }[]; }`\n  - `query?: string`\n  - `query_id?: string`\n  - `score?: number`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst queryResult = await client.evaluate.getQuery('query_id');\n\nconsole.log(queryResult);\n```",
    perLanguage: {
      typescript: {
        method: 'client.evaluate.getQuery',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst queryResult = await client.evaluate.getQuery('query_id');\n\nconsole.log(queryResult.query_id);",
      },
      python: {
        method: 'evaluate.get_query',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nquery_result = client.evaluate.get_query(\n    "query_id",\n)\nprint(query_result.query_id)',
      },
      go: {
        method: 'client.Evaluate.GetQuery',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tqueryResult, err := client.Evaluate.GetQuery(context.TODO(), "query_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", queryResult.QueryID)\n}\n',
      },
      cli: {
        method: 'evaluate get_query',
        example: "hyperspell evaluate get-query \\\n  --api-key 'My API Key' \\\n  --query-id query_id",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/evaluate/query/$QUERY_ID \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## score_query\n\n`client.evaluate.scoreQuery(query_id: string, score?: number): { message: string; success: boolean; }`\n\n**post** `/evaluate/query/{query_id}`\n\nScore the result of a query.\n\n### Parameters\n\n- `query_id: string`\n\n- `score?: number`\n  Rating of the query result from -1 (bad) to +1 (good).\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.evaluate.scoreQuery('query_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.evaluate.scoreQuery',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.evaluate.scoreQuery('query_id');\n\nconsole.log(response.message);",
      },
      python: {
        method: 'evaluate.score_query',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.evaluate.score_query(\n    query_id="query_id",\n)\nprint(response.message)',
      },
      go: {
        method: 'client.Evaluate.ScoreQuery',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Evaluate.ScoreQuery(\n\t\tcontext.TODO(),\n\t\t"query_id",\n\t\thyperspell.EvaluateScoreQueryParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'evaluate score_query',
        example: "hyperspell evaluate score-query \\\n  --api-key 'My API Key' \\\n  --query-id query_id",
      },
      http: {
        example:
          "curl https://api.hyperspell.com/evaluate/query/$QUERY_ID \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $HYPERSPELL_API_KEY\" \\\n    -d '{}'",
      },
    },
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
      "## score_highlight\n\n`client.evaluate.scoreHighlight(highlight_id: string, comment?: string, score?: number): { message: string; success: boolean; }`\n\n**post** `/evaluate/highlight/{highlight_id}`\n\nScore an individual highlight.\n\n### Parameters\n\n- `highlight_id: string`\n\n- `comment?: string`\n  Comment on the chunk\n\n- `score?: number`\n  Rating of the chunk from -1 (bad) to +1 (good).\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.evaluate.scoreHighlight('highlight_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.evaluate.scoreHighlight',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.evaluate.scoreHighlight('highlight_id');\n\nconsole.log(response.message);",
      },
      python: {
        method: 'evaluate.score_highlight',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.evaluate.score_highlight(\n    highlight_id="highlight_id",\n)\nprint(response.message)',
      },
      go: {
        method: 'client.Evaluate.ScoreHighlight',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Evaluate.ScoreHighlight(\n\t\tcontext.TODO(),\n\t\t"highlight_id",\n\t\thyperspell.EvaluateScoreHighlightParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'evaluate score_highlight',
        example:
          "hyperspell evaluate score-highlight \\\n  --api-key 'My API Key' \\\n  --highlight-id highlight_id",
      },
      http: {
        example:
          "curl https://api.hyperspell.com/evaluate/highlight/$HIGHLIGHT_ID \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $HYPERSPELL_API_KEY\" \\\n    -d '{}'",
      },
    },
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
      "## send_message\n\n`client.actions.sendMessage(provider: string, text: string, channel?: string, connection?: string, parent?: string): { success: boolean; error?: string; provider_response?: object; }`\n\n**post** `/actions/send_message`\n\nSend a message to a channel or conversation on a connected integration.\n\n### Parameters\n\n- `provider: string`\n  Integration provider (e.g., slack)\n\n- `text: string`\n  Message text\n\n- `channel?: string`\n  Channel ID (required for Slack)\n\n- `connection?: string`\n  Connection ID. If omitted, auto-resolved from provider + user.\n\n- `parent?: string`\n  Parent message ID for threading (thread_ts for Slack)\n\n### Returns\n\n- `{ success: boolean; error?: string; provider_response?: object; }`\n  Result from executing an integration action.\n\n  - `success: boolean`\n  - `error?: string`\n  - `provider_response?: object`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.actions.sendMessage({ provider: 'reddit', text: 'text' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.actions.sendMessage',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.actions.sendMessage({ provider: 'reddit', text: 'text' });\n\nconsole.log(response.provider_response);",
      },
      python: {
        method: 'actions.send_message',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.actions.send_message(\n    provider="reddit",\n    text="text",\n)\nprint(response.provider_response)',
      },
      go: {
        method: 'client.Actions.SendMessage',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Actions.SendMessage(context.TODO(), hyperspell.ActionSendMessageParams{\n\t\tProvider: hyperspell.ActionSendMessageParamsProviderReddit,\n\t\tText:     "text",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ProviderResponse)\n}\n',
      },
      cli: {
        method: 'actions send_message',
        example:
          "hyperspell actions send-message \\\n  --api-key 'My API Key' \\\n  --provider reddit \\\n  --text text",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/actions/send_message \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY" \\\n    -d \'{\n          "provider": "reddit",\n          "text": "text"\n        }\'',
      },
    },
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
      "## add_reaction\n\n`client.actions.addReaction(channel: string, name: string, provider: string, timestamp: string, connection?: string): { success: boolean; error?: string; provider_response?: object; }`\n\n**post** `/actions/add_reaction`\n\nAdd an emoji reaction to a message on a connected integration.\n\n### Parameters\n\n- `channel: string`\n  Channel ID containing the message\n\n- `name: string`\n  Emoji name without colons (e.g., thumbsup)\n\n- `provider: string`\n  Integration provider (e.g., slack)\n\n- `timestamp: string`\n  Message timestamp to react to\n\n- `connection?: string`\n  Connection ID. If omitted, auto-resolved from provider + user.\n\n### Returns\n\n- `{ success: boolean; error?: string; provider_response?: object; }`\n  Result from executing an integration action.\n\n  - `success: boolean`\n  - `error?: string`\n  - `provider_response?: object`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.actions.addReaction({\n  channel: 'channel',\n  name: 'name',\n  provider: 'reddit',\n  timestamp: 'timestamp',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.actions.addReaction',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.actions.addReaction({\n  channel: 'channel',\n  name: 'name',\n  provider: 'reddit',\n  timestamp: 'timestamp',\n});\n\nconsole.log(response.provider_response);",
      },
      python: {
        method: 'actions.add_reaction',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.actions.add_reaction(\n    channel="channel",\n    name="name",\n    provider="reddit",\n    timestamp="timestamp",\n)\nprint(response.provider_response)',
      },
      go: {
        method: 'client.Actions.AddReaction',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Actions.AddReaction(context.TODO(), hyperspell.ActionAddReactionParams{\n\t\tChannel:   "channel",\n\t\tName:      "name",\n\t\tProvider:  hyperspell.ActionAddReactionParamsProviderReddit,\n\t\tTimestamp: "timestamp",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ProviderResponse)\n}\n',
      },
      cli: {
        method: 'actions add_reaction',
        example:
          "hyperspell actions add-reaction \\\n  --api-key 'My API Key' \\\n  --channel channel \\\n  --name name \\\n  --provider reddit \\\n  --timestamp timestamp",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/actions/add_reaction \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY" \\\n    -d \'{\n          "channel": "channel",\n          "name": "name",\n          "provider": "reddit",\n          "timestamp": "timestamp"\n        }\'',
      },
    },
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
      "extract?: 'procedure' | 'memory' | 'mood'[];",
      "format?: 'vercel' | 'hyperdoc' | 'openclaw';",
      'metadata?: object;',
      'session_id?: string;',
      'title?: string;',
    ],
    response:
      "{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }",
    markdown:
      "## add\n\n`client.sessions.add(history: string, date?: string, extract?: 'procedure' | 'memory' | 'mood'[], format?: 'vercel' | 'hyperdoc' | 'openclaw', metadata?: object, session_id?: string, title?: string): { resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n**post** `/trace/add`\n\nAdd an agent trace/transcript to the index.\n\nAccepts traces as a string in Hyperdoc format (native), Vercel AI SDK format,\nor OpenClaw JSONL format. The format is auto-detected if not specified.\n\n**Hyperdoc format** (JSON array, snake_case with type discriminators):\n```json\n{\"history\": \"[{\\\"type\\\": \\\"trace_message\\\", \\\"role\\\": \\\"user\\\", \\\"text\\\": \\\"Hello\\\"}]\"}\n```\n\n**Vercel AI SDK format** (JSON array, camelCase):\n```json\n{\"history\": \"[{\\\"role\\\": \\\"user\\\", \\\"content\\\": \\\"Hello\\\"}]\"}\n```\n\n**OpenClaw JSONL format** (newline-delimited JSON):\n```json\n{\"history\": \"{\\\"type\\\":\\\"session\\\",\\\"id\\\":\\\"abc\\\"}\\n{\\\"type\\\":\\\"message\\\",\\\"message\\\":{\\\"role\\\":\\\"user\\\",...}}\"}\n```\n\n### Parameters\n\n- `history: string`\n  The trace history as a string. Can be a JSON array of Hyperdoc steps, a JSON array of Vercel AI SDK steps, or OpenClaw JSONL.\n\n- `date?: string`\n  Date of the trace\n\n- `extract?: 'procedure' | 'memory' | 'mood'[]`\n  What kind of memories to extract from the trace\n\n- `format?: 'vercel' | 'hyperdoc' | 'openclaw'`\n  Trace format: 'vercel', 'hyperdoc', or 'openclaw'. Auto-detected if not set.\n\n- `metadata?: object`\n  Custom metadata for filtering. Keys must be alphanumeric with underscores, max 64 chars.\n\n- `session_id?: string`\n  Resource identifier for the trace.\n\n- `title?: string`\n  Title of the trace\n\n### Returns\n\n- `{ resource_id: string; source: string; status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'; }`\n\n  - `resource_id: string`\n  - `source: string`\n  - `status: 'pending' | 'processing' | 'completed' | 'failed' | 'pending_review' | 'skipped'`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst memoryStatus = await client.sessions.add({ history: 'history' });\n\nconsole.log(memoryStatus);\n```",
    perLanguage: {
      typescript: {
        method: 'client.sessions.add',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst memoryStatus = await client.sessions.add({ history: 'history' });\n\nconsole.log(memoryStatus.resource_id);",
      },
      python: {
        method: 'sessions.add',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nmemory_status = client.sessions.add(\n    history="history",\n)\nprint(memory_status.resource_id)',
      },
      go: {
        method: 'client.Sessions.Add',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmemoryStatus, err := client.Sessions.Add(context.TODO(), hyperspell.SessionAddParams{\n\t\tHistory: "history",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", memoryStatus.ResourceID)\n}\n',
      },
      cli: {
        method: 'sessions add',
        example: "hyperspell sessions add \\\n  --api-key 'My API Key' \\\n  --history history",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/trace/add \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY" \\\n    -d \'{\n          "history": "history"\n        }\'',
      },
    },
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
      "## list\n\n`client.vaults.list(cursor?: string, size?: number): { collection: string; document_count: number; }`\n\n**get** `/vault/list`\n\nThis endpoint lists all collections, and how many documents are in each collection.\nAll documents that do not have a collection assigned are in the `null` collection.\n\n### Parameters\n\n- `cursor?: string`\n\n- `size?: number`\n\n### Returns\n\n- `{ collection: string; document_count: number; }`\n\n  - `collection: string`\n  - `document_count: number`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\n// Automatically fetches more pages as needed.\nfor await (const vaultListResponse of client.vaults.list()) {\n  console.log(vaultListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.vaults.list',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const vaultListResponse of client.vaults.list()) {\n  console.log(vaultListResponse.collection);\n}",
      },
      python: {
        method: 'vaults.list',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\npage = client.vaults.list()\npage = page.items[0]\nprint(page.collection)',
      },
      go: {
        method: 'client.Vaults.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Vaults.List(context.TODO(), hyperspell.VaultListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      cli: {
        method: 'vaults list',
        example: "hyperspell vaults list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/vault/list \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## user_token\n\n`client.auth.userToken(user_id: string, expires_in?: string, origin?: string): { token: string; expires_at: string; }`\n\n**post** `/auth/user_token`\n\nUse this endpoint to create a user token for a specific user.\nThis token can be safely passed to your user-facing front-end.\n\n### Parameters\n\n- `user_id: string`\n\n- `expires_in?: string`\n  Token lifetime, e.g., '30m', '2h', '1d'. Defaults to 24 hours if not provided.\n\n- `origin?: string`\n  Origin of the request, used for CSRF protection. If set, the token will only be valid for requests originating from this origin.\n\n### Returns\n\n- `{ token: string; expires_at: string; }`\n\n  - `token: string`\n  - `expires_at: string`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst token = await client.auth.userToken({ user_id: 'user_id' });\n\nconsole.log(token);\n```",
    perLanguage: {
      typescript: {
        method: 'client.auth.userToken',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst token = await client.auth.userToken({ user_id: 'user_id' });\n\nconsole.log(token.token);",
      },
      python: {
        method: 'auth.user_token',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\ntoken = client.auth.user_token(\n    user_id="user_id",\n)\nprint(token.token)',
      },
      go: {
        method: 'client.Auth.UserToken',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttoken, err := client.Auth.UserToken(context.TODO(), hyperspell.AuthUserTokenParams{\n\t\tUserID: "user_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", token.Token)\n}\n',
      },
      cli: {
        method: 'auth user_token',
        example: "hyperspell auth user-token \\\n  --api-key 'My API Key' \\\n  --user-id user_id",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/auth/user_token \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY" \\\n    -d \'{\n          "user_id": "user_id",\n          "expires_in": "30m"\n        }\'',
      },
    },
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
      "## me\n\n`client.auth.me(): { id: string; app: object; available_integrations: string[]; installed_integrations: string[]; token_expiration: string; }`\n\n**get** `/auth/me`\n\nEndpoint to get basic user data.\n\n### Returns\n\n- `{ id: string; app: { id: string; icon_url: string; name: string; redirect_url: string; }; available_integrations: string[]; installed_integrations: string[]; token_expiration: string; }`\n\n  - `id: string`\n  - `app: { id: string; icon_url: string; name: string; redirect_url: string; }`\n  - `available_integrations: string[]`\n  - `installed_integrations: string[]`\n  - `token_expiration: string`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.auth.me();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.auth.me',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.auth.me();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'auth.me',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.auth.me()\nprint(response.id)',
      },
      go: {
        method: 'client.Auth.Me',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Auth.Me(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'auth me',
        example: "hyperspell auth me \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/auth/me \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
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
      "## delete_user\n\n`client.auth.deleteUser(): { message: string; success: boolean; }`\n\n**delete** `/auth/delete`\n\nEndpoint to delete user.\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\nconst response = await client.auth.deleteUser();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.auth.deleteUser',
        example:
          "import Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.auth.deleteUser();\n\nconsole.log(response.message);",
      },
      python: {
        method: 'auth.delete_user',
        example:
          'import os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.auth.delete_user()\nprint(response.message)',
      },
      go: {
        method: 'client.Auth.DeleteUser',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Auth.DeleteUser(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'auth delete_user',
        example: "hyperspell auth delete-user \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.hyperspell.com/auth/delete \\\n    -X DELETE \\\n    -H "Authorization: Bearer $HYPERSPELL_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'cli',
    content:
      "# Hyperspell CLI\n\nThe official CLI for the [Hyperspell REST API](https://docs.hyperspell.com/).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Homebrew\n\n~~~sh\nbrew install hyperspell/tools/hyperspell\n~~~\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/hyperspell/hyperspell-cli/cmd/hyperspell@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nhyperspell [resource] <command> [flags...]\n~~~\n\n~~~sh\nhyperspell memories add \\\n  --api-key 'My API Key' \\\n  --text ...\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Description                                                                  | Required |\n| -------------------- | ---------------------------------------------------------------------------- | -------- |\n| `HYPERSPELL_API_KEY` | Either an API Key or User Token to authenticate a specific user of your app. | yes      |\n\n### Global flags\n\n- `--api-key` - Either an API Key or User Token to authenticate a specific user of your app. (can also be set with `HYPERSPELL_API_KEY` env var)\n- `--user-id` - The id of the user making this request. Optional.\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nhyperspell <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nhyperspell <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nhyperspell <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nhyperspell <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nhyperspell <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Hyperspell Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/hyperspell-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../hyperspell-go`.\n",
  },
  {
    language: 'go',
    content:
      '# Hyperspell Go API Library\n\n<a href="https://pkg.go.dev/github.com/hyperspell/hyperspell-go"><img src="https://pkg.go.dev/badge/github.com/hyperspell/hyperspell-go.svg" alt="Go Reference"></a>\n\nThe Hyperspell Go library provides convenient access to the [Hyperspell REST API](https://docs.hyperspell.com/)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hyperspell MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40hyperspell%2Fhyperspell-mcp&config=eyJuYW1lIjoiQGh5cGVyc3BlbGwvaHlwZXJzcGVsbC1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9oeXBlcnNwZWxsLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtaHlwZXJzcGVsbC1hcGkta2V5IjoiTXkgQVBJIEtleSIsIlgtQXMtVXNlciI6Ik15IFVzZXIgSUQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40hyperspell%2Fhyperspell-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhyperspell.stlmcp.com%22%2C%22headers%22%3A%7B%22x-hyperspell-api-key%22%3A%22My%20API%20Key%22%2C%22X-As-User%22%3A%22My%20User%20ID%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/hyperspell/hyperspell-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/hyperspell/hyperspell-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/hyperspell/hyperspell-go"\n\t"github.com/hyperspell/hyperspell-go/option"\n)\n\nfunc main() {\n\tclient := hyperspell.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("HYPERSPELL_API_KEY")\n\t)\n\tmemoryStatus, err := client.Memories.Add(context.TODO(), hyperspell.MemoryAddParams{\n\t\tText: "...",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", memoryStatus.ResourceID)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Memories.Add(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/hyperspell/hyperspell-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.Memories.ListAutoPaging(context.TODO(), hyperspell.MemoryListParams{})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\tresource := iter.Current()\n\tfmt.Printf("%+v\\n", resource)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.Memories.List(context.TODO(), hyperspell.MemoryListParams{})\nfor page != nil {\n\tfor _, memory := range page.Items {\n\t\tfmt.Printf("%+v\\n", memory)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Memories.Add(context.TODO(), hyperspell.MemoryAddParams{\n\tText: "...",\n})\nif err != nil {\n\tvar apierr *hyperspell.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/memories/add": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Memories.Add(\n\tctx,\n\thyperspell.MemoryAddParams{\n\t\tText: "...",\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n```go\n// A file from the file system\nfile, err := os.Open("/path/to/file")\nhyperspell.MemoryUploadParams{\n\tFile: file,\n}\n\n// A file from a string\nhyperspell.MemoryUploadParams{\n\tFile: strings.NewReader("my file contents"),\n}\n\n// With a custom filename and contentType\nhyperspell.MemoryUploadParams{\n\tFile: hyperspell.File(strings.NewReader(`{"hello": "foo"}`), "file.go", "application/json"),\n}\n```\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := hyperspell.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Memories.Add(\n\tcontext.TODO(),\n\thyperspell.MemoryAddParams{\n\t\tText: "...",\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nmemoryStatus, err := client.Memories.Add(\n\tcontext.TODO(),\n\thyperspell.MemoryAddParams{\n\t\tText: "...",\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", memoryStatus)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/hyperspell/hyperspell-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'python',
    content:
      '# Hyperspell Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/hyperspell.svg?label=pypi%20(stable))](https://pypi.org/project/hyperspell/)\n\nThe Hyperspell Python library provides convenient access to the Hyperspell REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hyperspell MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40hyperspell%2Fhyperspell-mcp&config=eyJuYW1lIjoiQGh5cGVyc3BlbGwvaHlwZXJzcGVsbC1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9oeXBlcnNwZWxsLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtaHlwZXJzcGVsbC1hcGkta2V5IjoiTXkgQVBJIEtleSIsIlgtQXMtVXNlciI6Ik15IFVzZXIgSUQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40hyperspell%2Fhyperspell-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhyperspell.stlmcp.com%22%2C%22headers%22%3A%7B%22x-hyperspell-api-key%22%3A%22My%20API%20Key%22%2C%22X-As-User%22%3A%22My%20User%20ID%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.hyperspell.com](https://docs.hyperspell.com/). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install hyperspell\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\n\nmemory_status = client.memories.add(\n    text="...",\n)\nprint(memory_status.resource_id)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `HYPERSPELL_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncHyperspell` instead of `Hyperspell` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom hyperspell import AsyncHyperspell\n\nclient = AsyncHyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  memory_status = await client.memories.add(\n      text="...",\n  )\n  print(memory_status.resource_id)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install hyperspell[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom hyperspell import DefaultAioHttpClient\nfrom hyperspell import AsyncHyperspell\n\nasync def main() -> None:\n  async with AsyncHyperspell(\n    api_key=os.environ.get("HYPERSPELL_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    memory_status = await client.memories.add(\n        text="...",\n    )\n    print(memory_status.resource_id)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Hyperspell API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell()\n\nall_memories = []\n# Automatically fetches more pages as needed.\nfor memory in client.memories.list():\n    # Do something with memory here\n    all_memories.append(memory)\nprint(all_memories)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom hyperspell import AsyncHyperspell\n\nclient = AsyncHyperspell()\n\nasync def main() -> None:\n    all_memories = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for memory in client.memories.list():\n        all_memories.append(memory)\n    print(all_memories)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.memories.list()\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.items)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.memories.list()\n\nprint(f"next page cursor: {first_page.next_cursor}") # => "next page cursor: ..."\nfor memory in first_page.items:\n    print(memory.resource_id)\n\n# Remove `await` for non-async usage.\n```\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell()\n\nquery_result = client.memories.search(\n    query="What does Hyperspell do?",\n    options={\n        "filter": {}\n    },\n)\nprint(query_result.options)\n```\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed as `bytes`, or a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.\n\n```python\nfrom pathlib import Path\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell()\n\nclient.memories.upload(\n    file=Path("/path/to/file"),\n)\n```\n\nThe async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `hyperspell.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `hyperspell.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `hyperspell.APIError`.\n\n```python\nimport hyperspell\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell()\n\ntry:\n    client.memories.add(\n        text="...",\n    )\nexcept hyperspell.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept hyperspell.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept hyperspell.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom hyperspell import Hyperspell\n\n# Configure the default for all requests:\nclient = Hyperspell(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).memories.add(\n    text="...",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom hyperspell import Hyperspell\n\n# Configure the default for all requests:\nclient = Hyperspell(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Hyperspell(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).memories.add(\n    text="...",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `HYPERSPELL_LOG` to `info`.\n\n```shell\n$ export HYPERSPELL_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom hyperspell import Hyperspell\n\nclient = Hyperspell()\nresponse = client.memories.with_raw_response.add(\n    text="...",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nmemory = response.parse()  # get the object that `memories.add()` would have returned\nprint(memory.resource_id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/hyperspell/python-sdk/tree/main/src/hyperspell/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/hyperspell/python-sdk/tree/main/src/hyperspell/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.memories.with_streaming_response.add(\n    text="...",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom hyperspell import Hyperspell, DefaultHttpxClient\n\nclient = Hyperspell(\n    # Or use the `HYPERSPELL_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom hyperspell import Hyperspell\n\nwith Hyperspell() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/hyperspell/python-sdk/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport hyperspell\nprint(hyperspell.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Hyperspell TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@hyperspell/hyperspell.svg?label=npm%20(stable))](https://npmjs.org/package/@hyperspell/hyperspell) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@hyperspell/hyperspell)\n\nThis library provides convenient access to the Hyperspell REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.hyperspell.com](https://docs.hyperspell.com/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hyperspell MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40hyperspell%2Fhyperspell-mcp&config=eyJuYW1lIjoiQGh5cGVyc3BlbGwvaHlwZXJzcGVsbC1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9oeXBlcnNwZWxsLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtaHlwZXJzcGVsbC1hcGkta2V5IjoiTXkgQVBJIEtleSIsIlgtQXMtVXNlciI6Ik15IFVzZXIgSUQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40hyperspell%2Fhyperspell-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhyperspell.stlmcp.com%22%2C%22headers%22%3A%7B%22x-hyperspell-api-key%22%3A%22My%20API%20Key%22%2C%22X-As-User%22%3A%22My%20User%20ID%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @hyperspell/hyperspell\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst memoryStatus = await client.memories.add({ text: '...' });\n\nconsole.log(memoryStatus.resource_id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  apiKey: process.env['HYPERSPELL_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: Hyperspell.MemoryAddParams = { text: '...' };\nconst memoryStatus: Hyperspell.MemoryStatus = await client.memories.add(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport Hyperspell, { toFile } from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.memories.upload({ file: fs.createReadStream('/path/to/file') });\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.memories.upload({ file: new File(['my bytes'], 'file') });\n\n// You can also pass a `fetch` `Response`:\nawait client.memories.upload({ file: await fetch('https://somesite/file') });\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.memories.upload({ file: await toFile(Buffer.from('my bytes'), 'file') });\nawait client.memories.upload({ file: await toFile(new Uint8Array([0, 1, 2]), 'file') });\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst memoryStatus = await client.memories.add({ text: '...' }).catch(async (err) => {\n  if (err instanceof Hyperspell.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Hyperspell({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.memories.add({ text: '...' }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Hyperspell({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.memories.add({ text: '...' }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Hyperspell API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllResources(params) {\n  const allResources = [];\n  // Automatically fetches more pages as needed.\n  for await (const resource of client.memories.list()) {\n    allResources.push(resource);\n  }\n  return allResources;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.memories.list();\nfor (const resource of page.items) {\n  console.log(resource);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Hyperspell();\n\nconst response = await client.memories.add({ text: '...' }).asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: memoryStatus, response: raw } = await client.memories\n  .add({ text: '...' })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(memoryStatus.resource_id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `HYPERSPELL_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Hyperspell from '@hyperspell/hyperspell';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Hyperspell({\n  logger: logger.child({ name: 'Hyperspell' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.memories.add({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Hyperspell from '@hyperspell/hyperspell';\nimport fetch from 'my-fetch';\n\nconst client = new Hyperspell({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Hyperspell from '@hyperspell/hyperspell';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Hyperspell({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Hyperspell from '@hyperspell/hyperspell';\n\nconst client = new Hyperspell({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Hyperspell from 'npm:@hyperspell/hyperspell';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Hyperspell({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/hyperspell/node-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
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
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
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
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
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
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
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

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
