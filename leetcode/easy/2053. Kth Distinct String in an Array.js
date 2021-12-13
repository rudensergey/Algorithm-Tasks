/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const hash = {};
  for (let str of arr) {
    if (str in hash) hash[str] = false;
    else hash[str] = true;
  }
  let curr = 1;

  for (let entry of Object.entries(hash)) {
    if (entry[1] === true) {
      if (curr === k) return entry[0];
      curr++;
    }
  }
  return "";
};
