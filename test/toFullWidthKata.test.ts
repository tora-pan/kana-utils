import { toFullWidthKata } from "../src";

describe("toFullWidthKata", () => {
  it("should return all full width katakana when given all half width katakana", () => {
    const expected = "コレハテストデス";
    const input = "ｺﾚﾊﾃｽﾄﾃﾞｽ";

    const result = toFullWidthKata(input);

    expect(result).toEqual(expected);
  });
});
