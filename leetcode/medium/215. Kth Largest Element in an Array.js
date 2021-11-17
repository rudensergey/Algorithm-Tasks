// https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    const temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;

    heapify(arr, i, 0);
  }

  function heapify(arr, n, i) {
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    let smallest = i;

    if (l < n && arr[l] < arr[smallest]) smallest = l;
    if (r < n && arr[r] < arr[smallest]) smallest = r;
    if (i !== smallest) {
      const swap = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = swap;
      heapify(arr, n, smallest);
    }
  }

  return arr[k - 1];
};
