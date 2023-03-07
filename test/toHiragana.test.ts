import { toHiragana } from "../src";

describe("toHiragana", () => {
  it("should return input string converted to hiragana", () => {
    const input = "コレハテストデス";
    const expected = "これはてすとです";

    const result = toHiragana(input);

    expect(toHiragana(result)).toEqual(expected);
  });
});
