import { REGEX_RANGES } from "./kana-data";

/**
 * Given a string containing katakana, this will return the string with all
 * katakana characters removed.
 *
 * @param str - A string of Japanese text containing katakana characters.
 */
const stripKatakana = (str: string): string => {
  return str.split(REGEX_RANGES.KATAKANA).join("");
};

export default stripKatakana;
