// simple rotation

function leftRotateNaive(arr, d, n) {
  for (let i = 0; i < d; i++) {
    let temp = arr[0];
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp;
  }
}

// jugling ratation ---------------------------- >>

const g_c_d = (a, b) => (b === 0 ? a : g_c_d(b, a % b));

const leftRotate = (arr, d) => {
  const n = arr.length;
  const gcd = g_c_d(n, d);

  for (let i = 0; i < gcd; i++) {
    const temp = arr[i];
    let j = i;

    while (true) {
      let k = j - d;
      if (k < 0) k = k + n;
      if (k === i) break;
      arr[j] = arr[k];
      j = k;
    }

    arr[j] = temp;
  }
};

// let arr = [1, 2, 3, 4, 5, 6];
// leftRotate(arr, 1);
// console.log(arr);
// arr = [1, 2, 3, 4, 5, 6];
// leftRotate(arr, 2);
// console.log(arr);
// arr = [1, 2, 3, 4, 5, 6];
// leftRotate(arr, 4);
// console.log(arr);
// arr = [1, 2, 3, 4, 5, 6];
// leftRotate(arr, 0);
// console.log(arr);

// ------------------------------------ >>

// n element in the sorted and rotated array

function binarySearch(arr, low, high, key) {
  if (high < low) return -1;
  let mid = Math.floor((low + high) / 2);
  if (key == arr[mid]) return mid;
  if (key > arr[mid]) return binarySearch(arr, mid + 1, high, key);
  else return binarySearch(arr, low, mid - 1, key);
}

function findPivot(arr, low, high) {
  // base cases
  if (high < low) return -1;
  if (high == low) return low;
  let mid = Math.floor((low + high) / 2);
  if (mid < high && arr[mid] > arr[mid + 1]) return mid;
  if (mid > low && arr[mid] < arr[mid - 1]) return mid - 1;
  if (arr[low] >= arr[mid]) return findPivot(arr, low, mid - 1);
  else return findPivot(arr, mid + 1, high);
}

function pivotedBinarySearch(arr, n, key) {
  let pivot = findPivot(arr, 0, n - 1);
  if (pivot == -1) return binarySearch(arr, 0, n - 1, key);
  if (arr[pivot] == key) return pivot;
  if (arr[0] <= key) return binarySearch(arr, 0, pivot - 1, key);
  else return binarySearch(arr, pivot + 1, n - 1, key);
}

// let arr1 = [5, 6, 7, 8, 9, 10, 1, 2, 3];
// let n = arr1.length;
// let key = 3;
// console.log(pivotedBinarySearch(arr1, n, key));

// ------------------------- >>

function rearrange(arr, n) {
  // The following few lines are similar to partition
  // process of QuickSort. The idea is to consider 0
  // as pivot and divide the array around it.
  let i = -1;
  let temp = 0;

  for (let j = 0; j < n; j++) {
    if (arr[j] < 0) {
      i++;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Now all positive numbers are
  // at end and negative numbers at
  // the beginning of array.
  // Initialize indexes for starting point
  // of positive and negative numbers
  // to be swapped
  let pos = i + 1;
  let neg = 0;

  // Increment the negative index
  // by 2 and positive index by 1, i.e.,
  // swap every alternate negative number
  // with next positive number
  while (pos < n && neg < pos && arr[neg] < 0) {
    temp = arr[neg];
    arr[neg] = arr[pos];
    arr[pos] = temp;
    pos++;
    neg += 2;
  }
}

/*Driver function to check for above functions*/

// let arr2 = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
// rearrange(arr2, arr2.length);
// console.log(arr2);

// This code is contributed by sravan kumar

function rearrange(arr, n) {
  // initialize index of first minimum and first
  // maximum element
  let max_idx = n - 1;
  let min_idx = 0;

  // store maximum element of array
  let max_elem = arr[n - 1] + 1;

  // traverse array elements
  for (let i = 0; i < n; i++) {
    // at even index : we have to put maximum element
    if (i % 2 == 0) {
      arr[i] += (arr[max_idx] % max_elem) * max_elem;

      max_idx--;
    }

    // at odd index : we have to put minimum element
    else {
      arr[i] += (arr[min_idx] % max_elem) * max_elem;

      min_idx++;
    }
  }

  // array elements back to it's original form
  for (let i = 0; i < n; i++) arr[i] = Math.floor(arr[i] / max_elem);
}

// Driver program to test above function

let a = [11, 22, 33, 44, 55, 66, 77, 88, 90];

rearrange(a, a.lenght);
// console.log(a);

// ----------------------------------------- >>

// Javascript program for above approach

// Function to find the triplet
function find3Numbers(nums) {
  if (nums.length < 3) return console.log("No such triplet found");
  let seq = 1;
  let min_num = nums[0]; // -4
  let max_seq = Number.MIN_VALUE; // -3
  let store_min = min_num; // -4

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min_num) {
      min_num = nums[i];
    } else if (nums[i] < max_seq) {
      max_seq = nums[i];
      store_min = min_num;
    } else if (nums[i] > max_seq) {
      seq++; // ++
      if (seq == 3) {
        console.log("Triplet: " + store_min + ", " + max_seq + ", " + nums[i]);
        return;
      }
      max_seq = nums[i];
    }
  }
  console.log(null);
}

// Driver code
let nums = [0, 2, -4, -3, 6, 3, -1, 1];

// Function Call
// find3Numbers(nums);

// This code is contributed by suresh07

// -------------------------------------------- >>

// JavaScript program to find
// out maximum subarray
// sum in linear time
// using prefix sum.

// Function to compute maximum
// subarray sum in linear time.
function maximumSumSubarray(arr, n) {
  // Initialize minimum
  // prefix sum to 0.
  let min_prefix_sum = 0;

  // Initialize maximum subarray
  // sum so far to -infinity.
  let res = Number.MIN_VALUE;

  // Initialize and compute
  // the prefix sum array.
  let prefix_sum = [];
  prefix_sum[0] = arr[0];
  for (let i = 1; i < n; i++) prefix_sum[i] = prefix_sum[i - 1] + arr[i];

  console.log(prefix_sum);
  console.log(res);
  console.log(min_prefix_sum);

  // loop through the array, keep
  // track of minimum prefix sum so
  // far and maximum subarray sum.
  for (let i = 0; i < n; i++) {
    console.log(`res ${res}, prefix_sum ${prefix_sum}, min_prefix ${min_prefix_sum}`);
    res = Math.max(res, prefix_sum[i] - min_prefix_sum);
    min_prefix_sum = Math.min(min_prefix_sum, prefix_sum[i]);
  }

  return res;
}

// Driver code

// Test case 1
// let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let n1 = arr1.length;
// console.log(maximumSumSubarray(arr1, n1));

// // Test case 2
// let arr2 = [4, -8, 9, -4, 1, -8, -1, 6];
// let n2 = arr2.length;
// console.log(maximumSumSubarray(arr2, n2));

// ------------------------------------------ >>

// javascript program to find maximum
// subarray size, such that all
// subarrays of that size have
// sum less than K.

// Search for the maximum length
// of required subarray.
function bsearch(prefixsum, n, k) {
  // Initialize result
  let ans = -1;

  // Do Binary Search for largest
  // subarray size
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    // Check for all subarrays after mid
    let i;
    for (i = mid; i <= n; i++) {
      // Checking if all the subarrays
      // of a size is less than k.
      console.log(prefixsum[i], prefixsum[i - mid], prefixsum[i] - prefixsum[i - mid] > k);
      if (prefixsum[i] - prefixsum[i - mid] > k) break;
    }

    // All subarrays of size mid have
    // sum less than or equal to k
    if (i == n + 1) {
      left = mid + 1;
      ans = mid;
    }

    // We found a subarray of size mid
    // with sum greater than k
    else right = mid - 1;
  }

  return ans;
}

// Return the maximum subarray size, such
// that all subarray of that size have
// sum less than K.
function maxSize(arr, n, k) {
  // Initialize prefix sum array as 0.
  let prefixsum = Array(n + 1).fill(0);

  // Finding prefix sum of the array.
  for (i = 0; i < n; i++) prefixsum[i + 1] = prefixsum[i] + arr[i];

  console.log(prefixsum);
  return bsearch(prefixsum, n, k);
}

// Driver code
// let arr = [1, 2, 10, 4];

let k = 14;
// console.log(maxSize(arr, arr.length, k));

// This code contributed by Rajput-Ji

// ---------------------------------- >>

// Javascript program to demonstrate working of
// Square Root Decomposition.

let MAXN = 10000;
let SQRSIZE = 100;

let arr = new Array(MAXN);
for (let i = 0; i < MAXN; i++) {
  arr[i] = 0;
}

let block = new Array(SQRSIZE);
for (let i = 0; i < SQRSIZE; i++) {
  block[i] = 0;
}

let blk_sz;

// Time Complexity : O(1)
function update(idx, val) {
  let blockNumber = idx / blk_sz;
  block[blockNumber] += val - arr[idx];
  arr[idx] = val;
}

// Time Complexity : O(sqrt(n))
function query(l, r) {
  let sum = 0;
  while (l < r && l % blk_sz != 0 && l != 0) {
    // traversing first block in range

    sum += arr[l];
    l++;
  }
  while (l + blk_sz <= r) {
    // traversing completely
    // overlapped blocks in range
    console.log(l, blk_sz);
    sum += block[l / blk_sz];
    l += blk_sz;
  }
  while (l <= r) {
    // traversing last block in range
    sum += arr[l];
    l++;
  }
  return sum;
}

// Fills values in input[]
function preprocess(input, n) {
  // initiating block pointer
  let blk_idx = -1;

  // calculating size of block
  blk_sz = Math.floor(Math.sqrt(n));

  // building the decomposed array
  for (let i = 0; i < n; i++) {
    arr[i] = input[i];
    if (i % blk_sz == 0) {
      // entering next block
      // incrementing block pointer
      blk_idx++;
    }
    block[blk_idx] += arr[i];
  }
}

// Driver code
// We have used separate array for input because
// the purpose of this code is to explain SQRT
// decomposition in competitive programming where
// we have multiple inputs.
let input = [1, 5, 2, 4, 6, 1, 3, 5, 7, 10];
let n = input.length;

preprocess(input, n);

console.log(query(5, 9));
// This code is contributed by rag2127
