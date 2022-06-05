import { assert, describe, expect, test } from "vitest";
import { DateTime } from "luxon";
import { dateTimeHelper } from "../src/main";
import { IDateTimeHelper } from "../src/utils/dateTime";

/**
 * as seen in https://codepen.io/brifiction/pen/dyJzPyb
 */
describe("dateTimeHelper", () => {
  test("test 1: 2022-06-03T00:00:00", () => {
    const result: IDateTimeHelper = dateTimeHelper(
      "2022-06-03T00:00:00",
      "Australia/Melbourne"
    );
    const expectedRelative = DateTime.fromISO("2022-06-03T00:00:00", {
      zone: "Australia/Melbourne",
    }).toRelativeCalendar();
    const expected: IDateTimeHelper = {
      received: "2022-06-03T00:00:00.000+10:00",
      formatted: "03-06-2022",
      relative: expectedRelative,
    };
    expect(result).toMatchObject(expected);
  });

  test("test 2: today", () => {
    const today = DateTime.now().setZone("Australia/Melbourne");
    const result: IDateTimeHelper = dateTimeHelper(
      today.toString(),
      "Australia/Melbourne"
    );
    const expected: IDateTimeHelper = {
      received: today.toString(),
      formatted: today.toFormat("dd-MM-yyyy"),
      relative: "today",
    };
    expect(result).toMatchObject(expected);
  });
});
