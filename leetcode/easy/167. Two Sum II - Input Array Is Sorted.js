/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const hash = {};
  const n = numbers.length;

  for (let i = 0; i < n; i++) {
    const curr = numbers[i];
    if (hash.hasOwnProperty(curr)) {
      return [++hash[curr], ++i];
    } else {
      hash[target - curr] = i;
    }
  }
};
