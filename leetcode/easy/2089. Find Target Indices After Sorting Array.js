/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  const result = [];
  nums
    .sort((a, b) => a - b)
    .forEach((el, index) => {
      if (el === target) result.push(index);
    });
  return result;
};
