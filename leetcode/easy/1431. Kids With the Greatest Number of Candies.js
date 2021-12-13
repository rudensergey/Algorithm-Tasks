/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  for (let candy of candies) if (candy > max) max = candy;

  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= max ? true : false;
  }

  return candies;
};
