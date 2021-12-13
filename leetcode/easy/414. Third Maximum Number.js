/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  let counter = 0;
  while (counter < nums.length) {
    if (nums[counter] !== first && nums[counter] !== second && nums[counter] !== third) {
      if (nums[counter] > first) {
        third = second;
        second = first;
        first = nums[counter];
      } else if (nums[counter] > second) {
        third = second;
        second = nums[counter];
      } else if (nums[counter] > third) {
        third = nums[counter];
      }
    }
    counter++;
  }

  return third === -Infinity ? first : third;
};
