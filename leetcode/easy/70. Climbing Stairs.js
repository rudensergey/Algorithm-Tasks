/**
 * @param {number} n
 * @return {number}
 */
const hash = {};

var climbStairs = function (n) {
  let i = 0;
  const arr = [];

  while (i <= n) {
    if (i < 2) {
      arr[i] = 1;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    i++;
  }

  return arr[arr.length - 1];
};
