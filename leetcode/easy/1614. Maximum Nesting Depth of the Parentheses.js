/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let balance = 0;
  let maxOffset = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") balance++;
    if (s[i] === ")") balance--;
    if (balance > maxOffset) maxOffset = balance;
  }
  return maxOffset;
};
