import { stripHiragana } from "../src";

describe("normalizeText", () => {
  it("should return input string with all spaces and NWJ removed", () => {
    const input = "これはテストです";
    const expected = "テスト";

    const result = stripHiragana(input);

    expect(stripHiragana(result)).toEqual(expected);
  });
});
