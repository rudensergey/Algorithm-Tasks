/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let currentWord = "";
  let result = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s.charCodeAt(i);
    if (curr === 32) continue;

    if (curr >= 48 && curr <= 57) {
      result[s[i] - 1] = currentWord;
      currentWord = "";
      continue;
    }

    currentWord += s[i];
  }

  return result.join(" ");
};
