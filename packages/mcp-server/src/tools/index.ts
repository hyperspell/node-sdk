// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import revoke_integrations from './integrations/revoke-integrations';
import list_integrations_google_calendar from './integrations/google-calendar/list-integrations-google-calendar';
import index_integrations_web_crawler from './integrations/web-crawler/index-integrations-web-crawler';
import list_documents from './documents/list-documents';
import add_documents from './documents/add-documents';
import get_documents from './documents/get-documents';
import status_documents from './documents/status-documents';
import upload_documents from './documents/upload-documents';
import list_collections from './collections/list-collections';
import search_query from './query/search-query';
import me_auth from './auth/me-auth';
import user_token_auth from './auth/user-token-auth';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(revoke_integrations);
addEndpoint(list_integrations_google_calendar);
addEndpoint(index_integrations_web_crawler);
addEndpoint(list_documents);
addEndpoint(add_documents);
addEndpoint(get_documents);
addEndpoint(status_documents);
addEndpoint(upload_documents);
addEndpoint(list_collections);
addEndpoint(search_query);
addEndpoint(me_auth);
addEndpoint(user_token_auth);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
