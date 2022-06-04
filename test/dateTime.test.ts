import { DateTime } from "luxon";
import { assert, expect, test } from "vitest";
import { dateTimeHelper, IDateTimeHelper } from "../src/utils/dateTime";

// Edit an assertion and save to see HMR in action

test("dateTimeHelper 2022-06-03T00:00:00", () => {
  const result: IDateTimeHelper = dateTimeHelper("2022-06-03T00:00:00");
  const expected: IDateTimeHelper = {
    received: "2022-06-03T00:00:00.000+10:00",
    formatted: "03-06-2022",
    relative: "yesterday",
  };
  expect(result).toMatchObject(expected);
});

test("dateTimeHelper today", () => {
  const today = DateTime.now();
  const result: IDateTimeHelper = dateTimeHelper(today.toString());
  const expected: IDateTimeHelper = {
    received: today.toString(),
    formatted: today.toFormat("dd-MM-yyyy"),
    relative: "today",
  };
  expect(result).toMatchObject(expected);
});
