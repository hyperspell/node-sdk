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

# Documents

Types:

- <code><a href="./src/resources/documents.ts">Document</a></code>
- <code><a href="./src/resources/documents.ts">DocumentStatus</a></code>

# Collections

# Query

# Auth

Types:

- <code><a href="./src/resources/auth.ts">Token</a></code>
- <code><a href="./src/resources/auth.ts">AuthMeResponse</a></code>

Methods:

- <code title="get /auth/me">client.auth.<a href="./src/resources/auth.ts">me</a>() -> AuthMeResponse</code>
- <code title="post /auth/user_token">client.auth.<a href="./src/resources/auth.ts">userToken</a>({ ...params }) -> Token</code>
