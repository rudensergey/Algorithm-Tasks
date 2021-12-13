/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, i, j) {
  const min = i === undefined ? 0 : i;
  const max = j === undefined ? nums.length : j;
  const mid = min + ((max - min) >> 1);

  if (min <= max) {
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) return search(nums, target, mid + 1, max);
    if (nums[mid] > target) return search(nums, target, min, mid - 1);
  }

  return -1;
};
