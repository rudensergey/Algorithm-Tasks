// https://leetcode.com/problems/reduce-array-size-to-the-half/

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (seq) {
  const obj = {};
  for (let counter = 0; counter < seq.length; counter++) {
    if (!obj[seq[counter]]) obj[seq[counter]] = 1;
    else obj[seq[counter]]++;
  }

  const arr = Object.values(obj);
  sort(arr);

  function sort(arr) {
    var n = arr.length;

    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
    for (var i = n - 1; i > 0; i--) {
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      heapify(arr, i, 0);
    }
  }

  function heapify(arr, n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
      var swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;
      heapify(arr, n, largest);
    }
  }
  let length = seq.length;
  let counter = 0;

  while (length > Math.floor(seq.length / 2)) {
    length = length - arr.pop();
    counter++;
  }
  return counter;
};
