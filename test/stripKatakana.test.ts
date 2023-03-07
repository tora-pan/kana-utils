import { stripKatakana } from "../src";

describe("normalizeText", () => {
  test.skip("should return input string with all spaces and NWJ removed", () => {
    const input = "これはテストです";
    const expected = "これはです";

    const result = stripKatakana(input);

    expect(stripKatakana(result)).toEqual(expected);
  });
});
