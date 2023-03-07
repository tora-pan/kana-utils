/**
 * Given full-width hiragana, this will return the katakana version of the text.
 *
 * @param str - A string of hiragana characters.
 */

import { UNICODE_CONSTS } from "./kana-data";

const toKatakana = (str: string): string => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const hiraCharCode = str[i].charCodeAt(0);
    if (
      !(
        hiraCharCode >= UNICODE_CONSTS.HIRAGANA_START &&
        hiraCharCode <= UNICODE_CONSTS.HIRAGANA_END
      )
    ) {
      result += str[i];
    }
    result += String.fromCharCode(hiraCharCode + 96);
  }
  return result;
};

export default toKatakana;
