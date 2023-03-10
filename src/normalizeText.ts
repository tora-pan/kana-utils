/**
 * This matches and removes all occurrences the Japanese/American Tilde,
 * Zero-Width-Non-Joiner (ZWNJ), and all whitespace
 */
const normalizeText = (str: string): string => {
  /** This is regex */
  // const regex = /[\uFF5E\u301C\u200C\s\t\n]/g;
  return str.split(/[\uFF5E\u301C\u200C\u200D\s\t\n]/g).join("");
};

export default normalizeText;
