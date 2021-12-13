/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .map((s) => {
      const w = s.split("");
      let left = 0;
      let right = w.length - 1;
      while (left < right) {
        const swap = w[left];
        w[left++] = w[right];
        w[right--] = swap;
      }
      return w.join("");
    })
    .join(" ");
};
