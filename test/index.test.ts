import {
  normalizeText,
  toFullWidthKata,
  toHalfWidthKata,
  toHiragana,
  toKatakana,
} from "../src";
describe("index", () => {
  it("should bootstrap library modules", () => {
    expect(typeof normalizeText === "function").toBe(true);
    expect(typeof toFullWidthKata === "function").toBe(true);
    expect(typeof toHalfWidthKata === "function").toBe(true);
    expect(typeof toHiragana === "function").toBe(true);
    expect(typeof toKatakana === "function").toBe(true);
  });
});
