/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length;
  if (n <= 1) return nums;
  let first = 0;
  let second = 0;

  while (second < n && first < n) {
    if (nums[first] !== 0) {
      const swap = nums[first];
      nums[first++] = nums[second];
      nums[second++] = swap;
    } else {
      first++;
    }
  }

  return nums;
};
