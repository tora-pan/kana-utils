/**
 * Given full-width katakana, this will return the hiragana version of the text.
 *
 * @param str - A string of katakana characters.
 */

const toHiragana = (str: string): string => {
  const hiragana = str.replace("katakana", "hiragana");
  //todo
  return hiragana;
};

export default toHiragana;
