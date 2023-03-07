import { stripKanji } from "../src";

describe("normalizeText", () => {
  test.skip("should return input string with all spaces and NWJ removed", () => {
    const input = "これ素晴らしいテストです";
    const expected = "これらしいテストです";

    const result = stripKanji(input);

    expect(stripKanji(result)).toEqual(expected);
  });
});
