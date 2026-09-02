import { IncomingMessage } from 'node:http';
import { parseClientAuthHeaders } from '../src/auth';

describe('parseClientAuthHeaders', () => {
  it('forwards X-As-User to the SDK client', () => {
    const req = {
      headers: {
        'x-hyperspell-api-key': 'test-key',
        'x-as-user': 'user@example.com',
      },
    } as IncomingMessage;

    expect(parseClientAuthHeaders(req)).toEqual({
      apiKey: 'test-key',
      userID: 'user@example.com',
    });
  });

  it('uses the first value from repeated headers', () => {
    const req = {
      headers: {
        'x-hyperspell-api-key': ['first-key', 'second-key'],
        'x-as-user': ['first@example.com', 'second@example.com'],
      },
    } as IncomingMessage;

    expect(parseClientAuthHeaders(req)).toEqual({
      apiKey: 'first-key',
      userID: 'first@example.com',
    });
  });
});
