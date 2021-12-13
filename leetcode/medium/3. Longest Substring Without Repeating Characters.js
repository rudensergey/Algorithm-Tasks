/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let first = 0;
  let second = 0;
  let set = new Set();
  let max = 0;

  while (second < s.length) {
    if (set.has(s[second])) {
      set.delete(s[first++]);
    } else {
      set.add(s[second++]);
      max = Math.max(max, set.size);
    }
  }

  return max;
};
