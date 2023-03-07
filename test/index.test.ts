import {
  normalizeText,
  stripHiragana,
  stripKanji,
  stripKatakana,
  toFullWidthKata,
  toHalfWidthKata,
  toHiragana,
  toKatakana,
} from "../src";
describe("index", () => {
  test.skip("should bootstrap library modules", () => {
    expect(typeof normalizeText === "function").toBe(true);
    expect(typeof toFullWidthKata === "function").toBe(true);
    expect(typeof toHalfWidthKata === "function").toBe(true);
    expect(typeof toHiragana === "function").toBe(true);
    expect(typeof toKatakana === "function").toBe(true);
    expect(typeof stripHiragana === "function").toBe(true);
    expect(typeof stripKatakana === "function").toBe(true);
    expect(typeof stripKanji === "function").toBe(true);
  });
});
