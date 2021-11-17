// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
  function heapify(arr, n, i) {
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    let largest = i;

    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest !== i) {
      const swap = arr[largest];
      arr[largest] = arr[i];
      arr[i] = swap;
      heapify(arr, n, largest);
    }
  }

  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    const swap = arr[0];
    arr[0] = arr[i];
    arr[i] = swap;
    heapify(arr, i, 0);
  }

  return arr[0];
};
