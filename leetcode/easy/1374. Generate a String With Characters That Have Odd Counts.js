/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n < 2) return "a";

  let result = "";
  if (n % 2) result = "ab";
  else result = "a";

  while (result.length < n) result += "c";
  return result;
};
