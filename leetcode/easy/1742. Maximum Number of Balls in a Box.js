/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const returnSum = (num) => {
  let result = 0;

  while (num > 1) {
    result += Math.floor(num % 10);
    num /= 10;
  }

  return result;
};

var countBalls = function (lowLimit, highLimit) {
  let hash = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    const key = returnSum(i);
    if (key in hash) hash[key]++;
    else hash[key] = 1;
  }

  return Math.max(...Object.values(hash));
};
