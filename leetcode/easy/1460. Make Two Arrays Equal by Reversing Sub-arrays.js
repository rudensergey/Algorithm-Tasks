/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const a = target.sort();
  const b = arr.sort();

  for (let i = 0; i < arr.length; i++) if (a[i] !== b[i]) return false;

  return true;
};
