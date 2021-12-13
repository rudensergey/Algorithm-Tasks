/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const set = new Set(allowed.split(""));
  let sum = 0;

  for (let i = 0; i < words.length; i++) {
    let isAllowed = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!set.has(words[i][j])) isAllowed = false;
    }
    if (isAllowed) sum++;
  }

  return sum;
};
