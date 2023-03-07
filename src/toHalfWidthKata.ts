import { kanaToHiraganaNormalizationMap } from "./kana-data";

/**
 * Given hiragana or katakana, this will return the half-width katakana version
 * of the text.
 *
 * @param str - A string of hiragana or katakana characters.
 */
const toHalfWidthKata = (str: string): string => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const hiraganaCharCode = str[i].charCodeAt(0) - 96;
    const currentChar = String.fromCharCode(hiraganaCharCode);
    const key = getKeyByValue(currentChar);
    result += key;
  }
  //todo
  return result;
};

const getKeyByValue = (value: string) => {
  const keys = [];
  for (const key in kanaToHiraganaNormalizationMap) {
    if (kanaToHiraganaNormalizationMap[key] === value) {
      keys.push(key);
    }
  }
  if (keys.length === 2) {
    return keys[1];
  }
};

export default toHalfWidthKata;
