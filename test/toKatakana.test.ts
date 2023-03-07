import { toKatakana } from "../src";

describe("toKatakana", () => {
  test.skip("should return input string converted to katakana", () => {
    const input = "これはてすとです";
    const expected = "コレハテストデス";

    const result = toKatakana(input);

    expect(toKatakana(result)).toEqual(expected);
  });
});
