/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  while (left < right) {
    let first = nums[left] ** 2;
    let last = nums[right] ** 2;

    if (first > last) {
      result.unshift(first);
      left++;
    } else {
      result.unshift(right);
      right--;
    }
  }

  result.unshift(nums[left] ** 2);
  return result;
};
