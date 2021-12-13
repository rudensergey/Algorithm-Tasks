/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let first = 0;
  let second = 0;
  let d = 0;

  while (first < nums.length) {
    if (nums[first] !== val) {
      nums[second++] = nums[first++];
    } else {
      first++;
      d++;
    }
  }

  while (d) {
    nums.pop();
    d--;
  }
};
