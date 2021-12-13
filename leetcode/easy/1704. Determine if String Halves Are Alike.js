/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let resultA = 0;
  let resultB = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (set.has(s[i])) resultA++;
    if (set.has(s[i + s.length / 2])) resultB++;
  }

  return resultA === resultB;
};
