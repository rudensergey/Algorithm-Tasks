/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  let prevIndex = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") balance++;
    if (s[i] === ")") balance--;
    if (balance === 0) {
      result += s.slice(prevIndex + 1, i);
      prevIndex = i + 1;
    }
  }

  return result;
};
