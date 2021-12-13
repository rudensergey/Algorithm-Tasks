/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let currentIteration = 0;
  let sum = 0;

  for (let size = 1; size <= arr.length; size += 2) {
    for (let curr = 0; curr + size <= arr.length; curr++) {
      for (let iteration = 0; iteration < size; iteration++) {
        sum += arr[curr + iteration];
      }
    }
  }

  return sum;
};
