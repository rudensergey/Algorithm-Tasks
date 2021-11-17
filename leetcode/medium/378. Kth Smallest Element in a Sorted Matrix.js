// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const arr = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[i][j]);
    }
  }

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

  return arr[k - 1];
};
