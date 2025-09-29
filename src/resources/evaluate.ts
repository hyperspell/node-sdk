// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MemoriesAPI from './memories';

export class Evaluate extends APIResource {}

export interface Query {
  documents: Array<MemoriesAPI.Memory>;

  /**
   * The answer to the query, if the request was set to answer.
   */
  answer?: string | null;

  /**
   * Errors that occurred during the query. These are meant to help the developer
   * debug the query, and are not meant to be shown to the user.
   */
  errors?: Array<{ [key: string]: string }> | null;

  /**
   * The ID of the query. This can be used to retrieve the query later, or add
   * feedback to it. If the query failed, this will be None.
   */
  query_id?: string | null;

  /**
   * The average score of the query feedback, if any.
   */
  score?: number | null;
}

export declare namespace Evaluate {
  export { type Query as Query };
}
