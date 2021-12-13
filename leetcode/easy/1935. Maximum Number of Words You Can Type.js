/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const set = new Set(brokenLetters.split(""));

  let result = 0;
  let broken = false;

  for (let i = 0; i < text.length; i++) {
    if (set.has(text[i])) broken = true;

    if (text[i] === " " || i + 1 === text.length) {
      if (!broken) result++;
      broken = false;
    }
  }

  return result;
};
