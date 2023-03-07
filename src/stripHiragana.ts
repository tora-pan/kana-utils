/**
 * Given a string containing hiragana, this will return the string with all
 * hiragana characters removed.
 *
 * @param str - A string of Japanese text containing hiragana characters.
 */

import { REGEX_RANGES } from "./kana-data";

const stripHiragana = (str: string): string => {
  const hiragana = REGEX_RANGES.HIRAGANA;
  return str.split(hiragana).join("");
};

export default stripHiragana;
