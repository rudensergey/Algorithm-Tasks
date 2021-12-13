/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let reversedNumber = 0;
  let initialNumber = x;

  while (initialNumber > 0) {
    reversedNumber = reversedNumber * 10;
    reversedNumber += initialNumber % 10;
    initialNumber = Math.floor(initialNumber / 10);
  }

  return x === reversedNumber;
};
