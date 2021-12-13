/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  const str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && i % 2 !== 0) {
      const char = String.fromCharCode(str[i - 1].charCodeAt() + +str[i]);
      str[i] = char;
    }
  }
  return str.join("");
};
