// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class GoogleCalendar extends APIResource {
  /**
   * List available calendars for a user. This can be used to ie. populate a dropdown
   * for the user to select a calendar.
   *
   * @example
   * ```ts
   * const calendar =
   *   await client.integrations.googleCalendar.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<Calendar> {
    return this._client.get('/integrations/google_calendar/list', options);
  }
}

export interface Calendar {
  items: Array<Calendar.Item>;
}

export namespace Calendar {
  export interface Item {
    /**
     * The ID of the calendar
     */
    id: string;

    /**
     * The name of the calendar
     */
    name: string;

    /**
     * Whether the calendar is the primary calendar of the user
     */
    primary: boolean;

    /**
     * Default timezone of the calendar
     */
    timezone: string | null;
  }
}

export declare namespace GoogleCalendar {
  export { type Calendar as Calendar };
}
