/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  return [
    ...word
      .slice(0, word.indexOf(ch) + 1)
      .split("")
      .reverse(),
    word.slice(word.indexOf(ch) + 1, word.length),
  ].join("");
};
