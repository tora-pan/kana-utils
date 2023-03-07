import toHiragana from "./toHiragana";
import toKatakana from "./toKatakana";

/**
 * Given half-width katakana, this will return the full-width katakana version
 * of the text.
 *
 * @param str - A string of half-width katakana characters.
 */
const toFullWidthKata = (str: string): string => {
  const hiragana = toHiragana(str);
  return toKatakana(hiragana);
};

export default toFullWidthKata;
