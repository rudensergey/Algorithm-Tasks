/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const words = s.match(/\w+/gi);
  return words[words.length - 1].length;
};
