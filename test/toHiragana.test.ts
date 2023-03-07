import { toHiragana } from "../src";

describe("toHiragana", () => {
  it("should return input string converted to hiragana", () => {
    const input = "コレハテストデス";
    const expected = "これはてすとです";

    const result = toHiragana(input);

    expect(toHiragana(result)).toEqual(expected);
  });
  it("should return input string of half-width katakana converted to hiragana", () => {
    const input = "ｺﾚﾊﾃｽﾄﾃﾞｽ";
    const expected = "これはてすとです";

    const result = toHiragana(input);

    expect(toHiragana(result)).toEqual(expected);
  });
  it("should return input string with non Japanese characters returned as is", () => {
    const input = "これはTEST~~です";
    const expected = "これはTEST~~です";

    const result = toHiragana(input);

    expect(result).toEqual(expected);
  });
});
