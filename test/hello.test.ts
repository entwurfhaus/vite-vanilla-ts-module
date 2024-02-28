import { expect, test } from "vitest";
import { hello } from "../src/main";

test("say hello", () => {
  const result = hello("Brian");
  expect(result).toBe("Hello, Brian!");
});
