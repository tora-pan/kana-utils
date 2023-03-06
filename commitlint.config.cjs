/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "body-max-line-length": [0],
    "header-max-length": [0],
    "footer-max-line-length": [0],
    "header-full-stop": [2, "never", "."],
  },
};
