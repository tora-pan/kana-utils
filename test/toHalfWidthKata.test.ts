import { toHalfWidthKata } from "../src";

describe("toHalfWidthKata", () => {
  test.skip("should return input string converted to half width katakana", () => {
    const input = "コレハテストデス";
    const expected = "ｺﾚﾊﾃｽﾄﾃﾞｽ";

    const result = toHalfWidthKata(input);

    expect(toHalfWidthKata(result)).toEqual(expected);
  });
});
