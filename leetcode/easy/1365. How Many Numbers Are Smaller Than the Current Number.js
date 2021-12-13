/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let n = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) n++;
    }
    result[i] = n;
  }
  return result;
};
