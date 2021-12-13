/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];
  let a = 0;
  let b = n;

  while (b < nums.length) result.push(nums[a++], nums[b++]);

  return result;
};
