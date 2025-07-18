# Integrations

Types:

- <code><a href="./src/resources/integrations/integrations.ts">IntegrationRevokeResponse</a></code>

Methods:

- <code title="get /integrations/{provider}/revoke">client.integrations.<a href="./src/resources/integrations/integrations.ts">revoke</a>(provider) -> IntegrationRevokeResponse</code>

## GoogleCalendar

Types:

- <code><a href="./src/resources/integrations/google-calendar.ts">Calendar</a></code>

Methods:

- <code title="get /integrations/google_calendar/list">client.integrations.googleCalendar.<a href="./src/resources/integrations/google-calendar.ts">list</a>() -> Calendar</code>

## WebCrawler

Types:

- <code><a href="./src/resources/integrations/web-crawler.ts">WebCrawlerIndexResponse</a></code>

Methods:

- <code title="get /integrations/web_crawler/index">client.integrations.webCrawler.<a href="./src/resources/integrations/web-crawler.ts">index</a>({ ...params }) -> WebCrawlerIndexResponse</code>

# Memories

Types:

- <code><a href="./src/resources/memories.ts">Memory</a></code>
- <code><a href="./src/resources/memories.ts">MemoryStatus</a></code>
- <code><a href="./src/resources/memories.ts">MemorySearchResponse</a></code>
- <code><a href="./src/resources/memories.ts">MemoryStatusResponse</a></code>

Methods:

- <code title="get /memories/list">client.memories.<a href="./src/resources/memories.ts">list</a>({ ...params }) -> MemoriesCursorPage</code>
- <code title="post /memories/add">client.memories.<a href="./src/resources/memories.ts">add</a>({ ...params }) -> MemoryStatus</code>
- <code title="get /memories/get/{source}/{resource_id}">client.memories.<a href="./src/resources/memories.ts">get</a>(source, resourceId) -> Memory</code>
- <code title="post /memories/query">client.memories.<a href="./src/resources/memories.ts">search</a>({ ...params }) -> MemorySearchResponse</code>
- <code title="get /memories/status">client.memories.<a href="./src/resources/memories.ts">status</a>() -> MemoryStatusResponse</code>
- <code title="post /memories/upload">client.memories.<a href="./src/resources/memories.ts">upload</a>({ ...params }) -> MemoryStatus</code>

# Vaults

Types:

- <code><a href="./src/resources/vaults.ts">VaultListResponse</a></code>

Methods:

- <code title="get /vault/list">client.vaults.<a href="./src/resources/vaults.ts">list</a>({ ...params }) -> VaultListResponsesCursorPage</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">Token</a></code>
- <code><a href="./src/resources/auth.ts">AuthMeResponse</a></code>

Methods:

- <code title="get /auth/me">client.auth.<a href="./src/resources/auth.ts">me</a>() -> AuthMeResponse</code>
- <code title="post /auth/user_token">client.auth.<a href="./src/resources/auth.ts">userToken</a>({ ...params }) -> Token</code>
