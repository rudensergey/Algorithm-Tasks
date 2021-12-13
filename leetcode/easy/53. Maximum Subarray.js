/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxEndsHereN = nums[0];
  let maxSoFarN = nums[0];

  let maxEndsHere = 0;
  let maxSoFar = 0;

  let allNegatives = true;

  for (let num of nums) {
    if (num > 0) allNegatives = false;
    // negative
    maxEndsHereN = Math.max(num, maxEndsHereN + num);
    maxSoFarN = Math.max(maxEndsHereN, maxSoFarN);
    // positive
    maxEndsHere += num;
    if (maxSoFar < maxEndsHere) maxSoFar = maxEndsHere;
    if (maxEndsHere < 0) maxEndsHere = 0;
  }

  return allNegatives ? maxSoFarN : maxSoFar;
};
