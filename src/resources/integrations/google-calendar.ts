// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class GoogleCalendar extends APIResource {
  /**
   * List available calendars for a user. This can be used to ie. populate a dropdown
   * for the user to select a calendar.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<GoogleCalendarListResponse> {
    return this._client.get('/integrations/google_calendar/list', options);
  }
}

export interface GoogleCalendarListResponse {
  items: Array<GoogleCalendarListResponse.Item>;
}

export namespace GoogleCalendarListResponse {
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
  export { type GoogleCalendarListResponse as GoogleCalendarListResponse };
}
