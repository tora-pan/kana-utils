import { toHiragana } from "../src";

describe("normalizeText", () => {
  it("should return input string with all spaces and NWJ removed", () => {
    const input = "こ‍れ‍はテ‍ス ト　です";
    const expected = "これはテストです";

    const result = toHiragana(input);

    expect(toHiragana(result)).toEqual(expected);
  });
});
