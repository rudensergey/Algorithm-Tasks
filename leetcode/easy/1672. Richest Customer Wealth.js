/**
 * @param {number[][]} accounts
 * @return {number}
 */
const getSum = (arr) => arr.reduce((p, c) => p + c);

var maximumWealth = function (accounts) {
  let max = 0;
  for (let account of accounts) {
    const sum = getSum(account);
    if (max < sum) max = sum;
  }
  return max;
};
