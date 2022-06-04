import { DateTime } from "luxon";

export interface IDateTimeHelper {
  received: string;
  formatted: string;
  relative: string | null;
}

/**
 * Receives ISO format 2022-01-22T00:00:00, and returns yesterday DateTime object.
 * For example: Receive  2022-01-22T00:00:00, returns { }
 *
 * @param dateFromISO
 * @returns IDateTimeHelper
 */
export const dateTimeHelper = (dateFromISO: string): IDateTimeHelper => {
  const receivedDate = DateTime.fromISO(dateFromISO);

  const receivedDateFormatted =
    DateTime.fromISO(dateFromISO).toFormat("dd-MM-yyyy");

  const receivedDateToString = receivedDate.toString();
  const receivedDateRelative = receivedDate.toRelativeCalendar();

  return {
    received: receivedDateToString,
    formatted: receivedDateFormatted,
    relative: receivedDateRelative,
  };
};
