/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1]++;

  let carry = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) digits[i] += carry--;
    if (digits[i] > 9) {
      digits[i] -= 10;
      carry++;
    }
  }

  if (carry) digits.unshift(1);
  return digits;
};
