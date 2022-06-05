import { DateTime } from "luxon";

export interface IDateTimeHelper {
  /**
   * Show ISO format DateTime.
   */
  received: string;
  /**
   * Show formatted date, such as '25-12-2022'.
   */
  formatted: string;
  /**
   * Show human-readable string, such as 'two days ago' or 'today'.
   * @default null
   */
  relative: string | null;
}

/**
 * Receives ISO format 2022-01-22T00:00:00, and returns yesterday DateTime object.
 * For example: Receive  2022-01-22T00:00:00, returns { }
 *
 * Note: Only Australia/Melbourne
 *
 * @param {string} dateFromISO
 * @param {string} zone
 * @returns {IDateTimeHelper} {received,formatted,relative}
 */
export const dateTimeHelper = (
  dateFromISO: string,
  zone: string
): IDateTimeHelper => {
  const receivedDate = DateTime.fromISO(dateFromISO, {
    zone: zone,
  });
  const receivedDateToString = receivedDate.toString();

  const receivedDateFormatted = receivedDate.toFormat("dd-MM-yyyy");

  const receivedDateRelative = receivedDate.toRelativeCalendar();

  return {
    received: receivedDateToString,
    formatted: receivedDateFormatted,
    relative: receivedDateRelative,
  };
};
