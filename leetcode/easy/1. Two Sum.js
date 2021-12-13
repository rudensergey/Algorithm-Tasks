/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length < 2) return [];
  const sums = {};

  for (let counter = 0; counter < nums.length; counter++) {
    if (nums[counter] in sums) {
      return [sums[nums[counter]], counter];
    } else {
      sums[target - nums[counter]] = counter;
    }
  }

  return [];
};
