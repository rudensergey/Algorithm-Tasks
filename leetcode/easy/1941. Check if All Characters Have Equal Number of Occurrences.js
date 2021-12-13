/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hash) hash[s[i]]++;
    else hash[s[i]] = 1;
  }
  return new Set(Object.values(hash)).size === 1;
};
