/**
 * Given full-width katakana, this will return the hiragana version of the text.
 *
 * @param str - A string of katakana characters.
 */

import { PUNCTUATION, kanaToHiraganaNormalizationMap } from "./kana-data";

const toHiragana = (str: string): string => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const nextChar = i + 1 <= str.length - 1 ? str.charAt(i + 1) : null;
    const nextCharCode = nextChar?.charCodeAt(0);
    const isSemiVoiced = nextCharCode === PUNCTUATION.SEMI_VOICED_MARK;
    const isVoiced = nextCharCode === PUNCTUATION.VOICED_MARK;

    const key = isSemiVoiced
      ? char + nextChar
      : isVoiced
      ? char + nextChar
      : char;
    const hiragana = kanaToHiraganaNormalizationMap[key];
    result += hiragana !== undefined ? hiragana : char;

    if (isSemiVoiced || isVoiced) {
      i++;
    }
  }
  return result;
};

export default toHiragana;
