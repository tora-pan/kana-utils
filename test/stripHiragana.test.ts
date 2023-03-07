import { stripHiragana } from "../src";

describe("stripHiragana", () => {
  it("should return input string with all hiragana removed", () => {
    const input = "これはテストです";
    const expected = "テスト";

    const result = stripHiragana(input);

    expect(result).toEqual(expected);
  });
});
