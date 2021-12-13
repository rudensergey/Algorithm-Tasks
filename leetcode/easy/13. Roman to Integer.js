/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const r = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let prev = 0;
  let curr = 0;
  let sum = 0;

  while (curr < s.length) {
    if (r[s[curr]] > r[s[prev]]) {
      sum -= r[s[prev]];
      sum += r[s[curr]] - r[s[prev]];
    } else {
      sum += r[s[curr]];
      prev = curr;
    }
    curr++;
  }

  return sum;
};
