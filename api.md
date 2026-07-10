# Shared

Types:

- <code><a href="./src/resources/shared.ts">Blob</a></code>
- <code><a href="./src/resources/shared.ts">Callout</a></code>
- <code><a href="./src/resources/shared.ts">Chunk</a></code>
- <code><a href="./src/resources/shared.ts">Code</a></code>
- <code><a href="./src/resources/shared.ts">Comment</a></code>
- <code><a href="./src/resources/shared.ts">Company</a></code>
- <code><a href="./src/resources/shared.ts">Conversation</a></code>
- <code><a href="./src/resources/shared.ts">Deal</a></code>
- <code><a href="./src/resources/shared.ts">Divider</a></code>
- <code><a href="./src/resources/shared.ts">Document</a></code>
- <code><a href="./src/resources/shared.ts">Equation</a></code>
- <code><a href="./src/resources/shared.ts">Event</a></code>
- <code><a href="./src/resources/shared.ts">File</a></code>
- <code><a href="./src/resources/shared.ts">Footnote</a></code>
- <code><a href="./src/resources/shared.ts">Heading</a></code>
- <code><a href="./src/resources/shared.ts">Image</a></code>
- <code><a href="./src/resources/shared.ts">LineBreak</a></code>
- <code><a href="./src/resources/shared.ts">Link</a></code>
- <code><a href="./src/resources/shared.ts">List</a></code>
- <code><a href="./src/resources/shared.ts">ListItem</a></code>
- <code><a href="./src/resources/shared.ts">Message</a></code>
- <code><a href="./src/resources/shared.ts">Metadata</a></code>
- <code><a href="./src/resources/shared.ts">Paragraph</a></code>
- <code><a href="./src/resources/shared.ts">Person</a></code>
- <code><a href="./src/resources/shared.ts">Provenance</a></code>
- <code><a href="./src/resources/shared.ts">ProvenanceEntity</a></code>
- <code><a href="./src/resources/shared.ts">ProvenanceSource</a></code>
- <code><a href="./src/resources/shared.ts">ProvenanceStep</a></code>
- <code><a href="./src/resources/shared.ts">QueryResult</a></code>
- <code><a href="./src/resources/shared.ts">Quote</a></code>
- <code><a href="./src/resources/shared.ts">ScoredDocumentResponse</a></code>
- <code><a href="./src/resources/shared.ts">Table</a></code>
- <code><a href="./src/resources/shared.ts">TableCell</a></code>
- <code><a href="./src/resources/shared.ts">TableRow</a></code>
- <code><a href="./src/resources/shared.ts">Task</a></code>
- <code><a href="./src/resources/shared.ts">Text</a></code>
- <code><a href="./src/resources/shared.ts">ToDo</a></code>
- <code><a href="./src/resources/shared.ts">ToolCall</a></code>
- <code><a href="./src/resources/shared.ts">ToolResult</a></code>
- <code><a href="./src/resources/shared.ts">Trace</a></code>
- <code><a href="./src/resources/shared.ts">TraceMessage</a></code>
- <code><a href="./src/resources/shared.ts">Transcript</a></code>
- <code><a href="./src/resources/shared.ts">Utterance</a></code>
- <code><a href="./src/resources/shared.ts">Website</a></code>

# Connections

Types:

- <code><a href="./src/resources/connections.ts">ConnectionListResponse</a></code>
- <code><a href="./src/resources/connections.ts">ConnectionRevokeResponse</a></code>

Methods:

- <code title="delete /connections/{connection_id}/revoke">client.connections.<a href="./src/resources/connections.ts">revoke</a>(connectionID) -> ConnectionRevokeResponse</code>
- <code title="get /connections/list">client.connections.<a href="./src/resources/connections.ts">list</a>() -> ConnectionListResponse</code>

# Folders

Types:

- <code><a href="./src/resources/folders.ts">FolderListResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderDeletePolicyResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderListPoliciesResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderSetPoliciesResponse</a></code>

Methods:

- <code title="get /connections/{connection_id}/folders">client.folders.<a href="./src/resources/folders.ts">list</a>(connectionID, { ...params }) -> FolderListResponse</code>
- <code title="get /connections/{connection_id}/folder-policies">client.folders.<a href="./src/resources/folders.ts">listPolicies</a>(connectionID) -> FolderListPoliciesResponse</code>
- <code title="post /connections/{connection_id}/folder-policies">client.folders.<a href="./src/resources/folders.ts">setPolicies</a>(connectionID, { ...params }) -> FolderSetPoliciesResponse</code>
- <code title="delete /connections/{connection_id}/folder-policies/{policy_id}">client.folders.<a href="./src/resources/folders.ts">deletePolicy</a>(policyID, { ...params }) -> FolderDeletePolicyResponse</code>

# Integrations

Types:

- <code><a href="./src/resources/integrations/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/integrations/integrations.ts">IntegrationConnectResponse</a></code>

Methods:

- <code title="get /integrations/list">client.integrations.<a href="./src/resources/integrations/integrations.ts">list</a>() -> IntegrationListResponse</code>
- <code title="get /integrations/{integration_id}/connect">client.integrations.<a href="./src/resources/integrations/integrations.ts">connect</a>(integrationID, { ...params }) -> IntegrationConnectResponse</code>

## WebCrawler

Types:

- <code><a href="./src/resources/integrations/web-crawler.ts">WebCrawlerIndexResponse</a></code>

Methods:

- <code title="get /integrations/web_crawler/index">client.integrations.webCrawler.<a href="./src/resources/integrations/web-crawler.ts">index</a>({ ...params }) -> WebCrawlerIndexResponse</code>

## Slack

# Memories

Types:

- <code><a href="./src/resources/memories.ts">MemoryStatus</a></code>
- <code><a href="./src/resources/memories.ts">MemoryListResponse</a></code>
- <code><a href="./src/resources/memories.ts">MemoryDeleteResponse</a></code>
- <code><a href="./src/resources/memories.ts">MemoryAddBulkResponse</a></code>
- <code><a href="./src/resources/memories.ts">MemoryGetResponse</a></code>
- <code><a href="./src/resources/memories.ts">MemoryStatusResponse</a></code>

Methods:

- <code title="post /memories/add">client.memories.<a href="./src/resources/memories.ts">add</a>({ ...params }) -> MemoryStatus</code>
- <code title="post /memories/add/bulk">client.memories.<a href="./src/resources/memories.ts">addBulk</a>({ ...params }) -> MemoryAddBulkResponse</code>
- <code title="post /memories/upload">client.memories.<a href="./src/resources/memories.ts">upload</a>({ ...params }) -> MemoryStatus</code>
- <code title="post /memories/update/{source}/{resource_id}">client.memories.<a href="./src/resources/memories.ts">update</a>(resourceID, { ...params }) -> MemoryStatus</code>
- <code title="get /memories/list">client.memories.<a href="./src/resources/memories.ts">list</a>({ ...params }) -> MemoryListResponsesCursorPage</code>
- <code title="get /memories/status">client.memories.<a href="./src/resources/memories.ts">status</a>() -> MemoryStatusResponse</code>
- <code title="get /memories/get/{source}/{resource_id}">client.memories.<a href="./src/resources/memories.ts">get</a>(resourceID, { ...params }) -> MemoryGetResponse</code>
- <code title="post /memories/query">client.memories.<a href="./src/resources/memories.ts">search</a>({ ...params }) -> QueryResult</code>
- <code title="delete /memories/delete/{source}/{resource_id}">client.memories.<a href="./src/resources/memories.ts">delete</a>(resourceID, { ...params }) -> MemoryDeleteResponse</code>

# Evaluate

Types:

- <code><a href="./src/resources/evaluate.ts">EvaluateListQueriesResponse</a></code>
- <code><a href="./src/resources/evaluate.ts">EvaluateScoreHighlightResponse</a></code>
- <code><a href="./src/resources/evaluate.ts">EvaluateScoreQueryResponse</a></code>

Methods:

- <code title="get /evaluate/queries">client.evaluate.<a href="./src/resources/evaluate.ts">listQueries</a>({ ...params }) -> EvaluateListQueriesResponsesCursorPage</code>
- <code title="get /evaluate/query/{query_id}">client.evaluate.<a href="./src/resources/evaluate.ts">getQuery</a>(queryID) -> QueryResult</code>
- <code title="post /evaluate/query/{query_id}">client.evaluate.<a href="./src/resources/evaluate.ts">scoreQuery</a>(queryID, { ...params }) -> EvaluateScoreQueryResponse</code>
- <code title="post /evaluate/highlight/{highlight_id}">client.evaluate.<a href="./src/resources/evaluate.ts">scoreHighlight</a>(highlightID, { ...params }) -> EvaluateScoreHighlightResponse</code>

# Actions

Types:

- <code><a href="./src/resources/actions.ts">ActionAddReactionResponse</a></code>
- <code><a href="./src/resources/actions.ts">ActionSendMessageResponse</a></code>

Methods:

- <code title="post /actions/send_message">client.actions.<a href="./src/resources/actions.ts">sendMessage</a>({ ...params }) -> ActionSendMessageResponse</code>
- <code title="post /actions/add_reaction">client.actions.<a href="./src/resources/actions.ts">addReaction</a>({ ...params }) -> ActionAddReactionResponse</code>

# Sessions

Methods:

- <code title="post /trace/add">client.sessions.<a href="./src/resources/sessions.ts">add</a>({ ...params }) -> MemoryStatus</code>

# Vaults

Types:

- <code><a href="./src/resources/vaults.ts">VaultListResponse</a></code>

Methods:

- <code title="get /vault/list">client.vaults.<a href="./src/resources/vaults.ts">list</a>({ ...params }) -> VaultListResponsesCursorPage</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">Token</a></code>
- <code><a href="./src/resources/auth.ts">AuthDeleteUserResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthMeResponse</a></code>

Methods:

- <code title="post /auth/user_token">client.auth.<a href="./src/resources/auth.ts">userToken</a>({ ...params }) -> Token</code>
- <code title="get /auth/me">client.auth.<a href="./src/resources/auth.ts">me</a>() -> AuthMeResponse</code>
- <code title="delete /auth/delete">client.auth.<a href="./src/resources/auth.ts">deleteUser</a>() -> AuthDeleteUserResponse</code>
