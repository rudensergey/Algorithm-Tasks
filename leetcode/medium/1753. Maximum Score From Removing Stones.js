// https://leetcode.com/problems/maximum-score-from-removing-stones/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function maximumScore(a, b, c) {
  let ab = a + b;
  let bc = b + c;
  let ca = c + a;

  if (a >= bc) return bc;
  else {
    if (b >= ca) return ca;
    else {
      if (c >= ab) return ab;
      else return Math.floor((a + b + c) / 2);
    }
  }
}
