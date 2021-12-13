/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);

  let result = new Set();
  for (let num of nums1) if (set2.has(num) || set3.has(num)) result.add(num);
  for (let num of nums2) if (set3.has(num)) result.add(num);
  return [...result.values()];
};
