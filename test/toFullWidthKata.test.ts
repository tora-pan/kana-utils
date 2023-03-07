import { toFullWidthKata } from "../src";

describe("toFullWidthKata", () => {
  it("should return input string converted to full width katakana", () => {
    const expected = "コレハテストデス";
    const input = "ｺﾚﾊﾃｽﾄﾃﾞｽ";

    const result = toFullWidthKata(input);

    expect(toFullWidthKata(result)).toEqual(expected);
  });
});
