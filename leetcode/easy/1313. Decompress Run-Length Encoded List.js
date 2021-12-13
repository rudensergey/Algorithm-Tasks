/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i += 2) {
    let counter = nums[i];
    while (counter) {
      result.push(nums[i + 1]);
      counter--;
    }
  }

  return result;
};
