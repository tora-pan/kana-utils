/**
 * Given hiragana or katakana, this will return the half-width katakana version
 * of the text.
 *
 * @param str - A string of hiragana or katakana characters.
 */
const toHalfWidthKata = (str: string): string => {
  const hwKata = str.replace("half", "full");
  //todo
  return hwKata;
};

export default toHalfWidthKata;
