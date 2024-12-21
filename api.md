# Ingest

Types:

- <code><a href="./src/resources/ingest.ts">IngestAddResponse</a></code>
- <code><a href="./src/resources/ingest.ts">IngestFileResponse</a></code>

Methods:

- <code title="post /ingest">client.ingest.<a href="./src/resources/ingest.ts">add</a>({ ...params }) -> IngestAddResponse</code>
- <code title="post /ingest_file">client.ingest.<a href="./src/resources/ingest.ts">file</a>({ ...params }) -> unknown</code>

# Query

Types:

- <code><a href="./src/resources/query.ts">QueryRetrieveResponse</a></code>

Methods:

- <code title="post /query">client.query.<a href="./src/resources/query.ts">retrieve</a>({ ...params }) -> unknown</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">Document</a></code>
- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="get /documents/get/{document_id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(documentId) -> Document</code>
- <code title="post /documents/list">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentListResponse</code>
