/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const hash = {};

  for (let num of arr) {
    if (num in hash) hash[num]++;
    else hash[num] = 1;
  }

  const values = Object.values(hash);
  return new Set(values).size === values.length;
};
