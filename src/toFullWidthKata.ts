/**
 * Given half-width katakana, this will return the full-width katakana version
 * of the text.
 *
 * @param str - A string of half-width katakana characters.
 */
const toFullWidthKata = (str: string): string => {
  const fwKata = str.replace("hiragana", "katakana");
  //todo
  return fwKata;
};

export default toFullWidthKata;
