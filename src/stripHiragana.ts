/**
 * Given a string containing hiragana, this will return the string with all
 * hiragana characters removed.
 *
 * @param str - A string of Japanese text containing hiragana characters.
 */

const stripHiragana = (str: string): string => {
  return str.replace("hiragana", "");
};

export default stripHiragana;
