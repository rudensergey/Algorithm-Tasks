/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let balance = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") balance++;
    else balance--;

    if (balance === 0) result++;
  }

  return result;
};
