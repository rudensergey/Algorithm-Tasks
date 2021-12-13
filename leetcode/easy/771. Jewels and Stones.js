/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const set = new Set(jewels.split(""));
  let sum = 0;
  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) sum++;
  }
  return sum;
};
