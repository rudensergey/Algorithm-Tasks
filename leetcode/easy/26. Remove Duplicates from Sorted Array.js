/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let first = 1;
  let second = 0;
  let dublicates = 0;

  while (first < nums.length) {
    if (nums[second] === nums[first]) {
      dublicates++;
    } else {
      second++;
      nums[second] = nums[first];
    }
    first++;
  }

  console.log(first, second);

  while (dublicates) {
    nums.pop();
    dublicates--;
  }
};
