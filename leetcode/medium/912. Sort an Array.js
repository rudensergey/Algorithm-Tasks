// https://leetcode.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  let n = nums.length;

  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    heapify(nums, n, i);
  }

  for (let i = nums.length - 1; i > 0; i--) {
    const swap = nums[i];
    nums[i] = nums[0];
    nums[0] = swap;
    heapify(nums, i, 0);
  }

  function heapify(arr, n, i) {
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    let largest = i;

    if (l < n && arr[largest] < arr[l]) largest = l;
    if (r < n && arr[largest] < arr[r]) largest = r;
    if (largest !== i) {
      const swap = arr[largest];
      arr[largest] = arr[i];
      arr[i] = swap;
      heapify(arr, n, largest);
    }
  }

  return nums;
};
