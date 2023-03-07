/**
 * Given a string containing kanji, this will return the string with all kanji
 * characters removed.
 *
 * @param str - A string of Japanese text containing kanji characters.
 */

const stripKanji = (str: string): string => {
  return str.replace("kanji", "");
};

export default stripKanji;
