import { stripKanji } from "../src";

describe("stripKanji", () => {
  it("should return input string with all kanji removed", () => {
    const input = "これ素晴らしいテストです";
    const expected = "これらしいテストです";

    const result = stripKanji(input);

    expect(result).toEqual(expected);
  });
});
