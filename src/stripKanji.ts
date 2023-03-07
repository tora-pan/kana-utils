/**
 * Given a string containing kanji, this will return the string with all kanji
 * characters removed.
 *
 * @param str - A string of Japanese text containing kanji characters.
 */

import { REGEX_RANGES } from "./kana-data";

const stripKanji = (str: string): string => {
  return str.split(REGEX_RANGES.KANJI).join("");
};

export default stripKanji;
