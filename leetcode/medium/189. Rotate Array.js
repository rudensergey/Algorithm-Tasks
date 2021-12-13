/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === 0) return nums;
  const g = (a, b) => (b === 0 ? a : g(b, a % b));
  const gcd = g(k, nums.length % k);

  for (let i = 0; i < k; i++) {}

  return nums;
};
