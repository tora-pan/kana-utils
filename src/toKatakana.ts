/**
 * Given full-width hiragana, this will return the katakana version of the text.
 *
 * @param str - A string of hiragana characters.
 */

const toKatakana = (str: string): string => {
  const katakana = str.replace("hiragana", "katakana");
  //todo
  return katakana;
};

export default toKatakana;
