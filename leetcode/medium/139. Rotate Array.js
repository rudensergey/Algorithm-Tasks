// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

function rotate(arr, s) {
  let n = arr.length;
  if (n === 1 || n === 0) return arr;

  let d = n - (s % n);
  let g_c_d = gcd(d % n, n);

  for (let i = 0; i < g_c_d; i++) {
    let temp = arr[i];
    let j = i;

    while (1) {
      let k = j + d;
      if (k >= n) k = k - n;
      if (k == i) break;
      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
}
