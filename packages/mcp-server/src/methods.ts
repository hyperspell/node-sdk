import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.connections.list',
    fullyQualifiedName: 'connections.list',
    httpMethod: 'get',
    httpPath: '/connections/list',
  },
  {
    clientCallName: 'client.connections.revoke',
    fullyQualifiedName: 'connections.revoke',
    httpMethod: 'delete',
    httpPath: '/connections/{connection_id}/revoke',
  },
  {
    clientCallName: 'client.integrations.list',
    fullyQualifiedName: 'integrations.list',
    httpMethod: 'get',
    httpPath: '/integrations/list',
  },
  {
    clientCallName: 'client.integrations.connect',
    fullyQualifiedName: 'integrations.connect',
    httpMethod: 'get',
    httpPath: '/integrations/{integration_id}/connect',
  },
  {
    clientCallName: 'client.integrations.googleCalendar.list',
    fullyQualifiedName: 'integrations.googleCalendar.list',
    httpMethod: 'get',
    httpPath: '/integrations/google_calendar/list',
  },
  {
    clientCallName: 'client.integrations.webCrawler.index',
    fullyQualifiedName: 'integrations.webCrawler.index',
    httpMethod: 'get',
    httpPath: '/integrations/web_crawler/index',
  },
  {
    clientCallName: 'client.integrations.slack.list',
    fullyQualifiedName: 'integrations.slack.list',
    httpMethod: 'get',
    httpPath: '/integrations/slack/list',
  },
  {
    clientCallName: 'client.memories.update',
    fullyQualifiedName: 'memories.update',
    httpMethod: 'post',
    httpPath: '/memories/update/{source}/{resource_id}',
  },
  {
    clientCallName: 'client.memories.list',
    fullyQualifiedName: 'memories.list',
    httpMethod: 'get',
    httpPath: '/memories/list',
  },
  {
    clientCallName: 'client.memories.delete',
    fullyQualifiedName: 'memories.delete',
    httpMethod: 'delete',
    httpPath: '/memories/delete/{source}/{resource_id}',
  },
  {
    clientCallName: 'client.memories.add',
    fullyQualifiedName: 'memories.add',
    httpMethod: 'post',
    httpPath: '/memories/add',
  },
  {
    clientCallName: 'client.memories.addBulk',
    fullyQualifiedName: 'memories.addBulk',
    httpMethod: 'post',
    httpPath: '/memories/add/bulk',
  },
  {
    clientCallName: 'client.memories.get',
    fullyQualifiedName: 'memories.get',
    httpMethod: 'get',
    httpPath: '/memories/get/{source}/{resource_id}',
  },
  {
    clientCallName: 'client.memories.search',
    fullyQualifiedName: 'memories.search',
    httpMethod: 'post',
    httpPath: '/memories/query',
  },
  {
    clientCallName: 'client.memories.status',
    fullyQualifiedName: 'memories.status',
    httpMethod: 'get',
    httpPath: '/memories/status',
  },
  {
    clientCallName: 'client.memories.upload',
    fullyQualifiedName: 'memories.upload',
    httpMethod: 'post',
    httpPath: '/memories/upload',
  },
  {
    clientCallName: 'client.evaluate.getQuery',
    fullyQualifiedName: 'evaluate.getQuery',
    httpMethod: 'get',
    httpPath: '/evaluate/query/{query_id}',
  },
  {
    clientCallName: 'client.evaluate.scoreHighlight',
    fullyQualifiedName: 'evaluate.scoreHighlight',
    httpMethod: 'post',
    httpPath: '/evaluate/highlight/{highlight_id}',
  },
  {
    clientCallName: 'client.evaluate.scoreQuery',
    fullyQualifiedName: 'evaluate.scoreQuery',
    httpMethod: 'post',
    httpPath: '/evaluate/query/{query_id}',
  },
  {
    clientCallName: 'client.vaults.list',
    fullyQualifiedName: 'vaults.list',
    httpMethod: 'get',
    httpPath: '/vault/list',
  },
  {
    clientCallName: 'client.auth.deleteUser',
    fullyQualifiedName: 'auth.deleteUser',
    httpMethod: 'delete',
    httpPath: '/auth/delete',
  },
  {
    clientCallName: 'client.auth.me',
    fullyQualifiedName: 'auth.me',
    httpMethod: 'get',
    httpPath: '/auth/me',
  },
  {
    clientCallName: 'client.auth.userToken',
    fullyQualifiedName: 'auth.userToken',
    httpMethod: 'post',
    httpPath: '/auth/user_token',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
