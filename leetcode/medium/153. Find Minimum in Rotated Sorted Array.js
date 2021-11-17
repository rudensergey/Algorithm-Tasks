// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
  function findPivot(arr, low, high) {
    // base cases
    if (high < low) return -1;
    if (high == low) return -1;
    let mid = Math.floor((low + high) / 2);
    if (mid < high && arr[mid] > arr[mid + 1]) return mid;
    if (mid > low && arr[mid] < arr[mid - 1]) return mid - 1;
    if (arr[low] >= arr[mid]) return findPivot(arr, low, mid - 1);
    else return findPivot(arr, mid + 1, high);
  }

  let pivot = findPivot(arr, 0, arr.length - 1);
  console.log(pivot);
  if (pivot === -1) return arr[0];
  return arr[pivot] > arr[pivot + 1] ? arr[pivot + 1] : arr[pivot];
};
