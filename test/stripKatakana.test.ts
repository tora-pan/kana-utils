import { stripKatakana } from "../src";

describe("stripKatakana", () => {
  it("should return input string with all katakana removed", () => {
    const input = "これはテストです";
    const expected = "これはです";

    const result = stripKatakana(input);

    expect(result).toEqual(expected);
  });
});
