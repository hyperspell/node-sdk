# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentAddResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentAddURLResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentGetResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentUploadResponse</a></code>

Methods:

- <code title="get /documents/list">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentListResponsesCursorPage</code>
- <code title="post /documents/add">client.documents.<a href="./src/resources/documents.ts">add</a>({ ...params }) -> DocumentAddResponse</code>
- <code title="post /documents/scrape">client.documents.<a href="./src/resources/documents.ts">addURL</a>({ ...params }) -> DocumentAddURLResponse</code>
- <code title="get /documents/get/{document_id}">client.documents.<a href="./src/resources/documents.ts">get</a>(documentId) -> DocumentGetResponse</code>
- <code title="post /documents/upload">client.documents.<a href="./src/resources/documents.ts">upload</a>({ ...params }) -> DocumentUploadResponse</code>

# Collections

Types:

- <code><a href="./src/resources/collections.ts">CollectionCreateResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionListResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionGetResponse</a></code>

Methods:

- <code title="post /collections/add">client.collections.<a href="./src/resources/collections.ts">create</a>({ ...params }) -> CollectionCreateResponse</code>
- <code title="get /collections/list">client.collections.<a href="./src/resources/collections.ts">list</a>({ ...params }) -> CollectionListResponsesCursorPage</code>
- <code title="get /collections/get/{name}">client.collections.<a href="./src/resources/collections.ts">get</a>(name) -> CollectionGetResponse</code>

# Query

Types:

- <code><a href="./src/resources/query.ts">QuerySearchResponse</a></code>

Methods:

- <code title="post /query">client.query.<a href="./src/resources/query.ts">search</a>({ ...params }) -> QuerySearchResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthUserTokenResponse</a></code>

Methods:

- <code title="post /auth/user_token">client.auth.<a href="./src/resources/auth.ts">userToken</a>({ ...params }) -> AuthUserTokenResponse</code>
