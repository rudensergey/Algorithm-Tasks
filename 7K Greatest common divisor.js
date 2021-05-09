// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

function mygcd(x, y) {
  let result = Math.max(x, y);

  while (result) {
    if (x % result === 0 && y % result === 0) break;
    result--;
  }

  return result;
}
