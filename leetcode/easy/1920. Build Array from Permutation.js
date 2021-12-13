/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  if (nums.length <= 1) return nums;

  const max = nums.length + 1;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    nums[i] = (curr % max) + (nums[curr] % max) * max;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.floor(nums[i] / max);
  }

  return nums;
};
