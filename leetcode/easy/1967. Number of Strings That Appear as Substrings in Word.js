/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let result = 0;
  for (let i = 0; i < patterns.length; i++) {
    if (word.indexOf(patterns[i]) !== -1) result++;
  }

  return result;
};
