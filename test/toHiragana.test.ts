import { toHiragana } from "../src";

describe("toHiragana", () => {
  test.skip("should return input string converted to hiragana", () => {
    const input = "コレハテストデス";
    const expected = "これはてすとです";

    const result = toHiragana(input);

    expect(toHiragana(result)).toEqual(expected);
  });
});
