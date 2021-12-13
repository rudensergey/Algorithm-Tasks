/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let sum = 0;
  for (let o of operations) {
    if (o === "++X" || o === "X++") sum += 1;
    if (o === "--X" || o === "X--") sum -= 1;
  }

  return sum;
};
