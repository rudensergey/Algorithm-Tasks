function mygcd(x, y) {
  let result = Math.max(x, y);

  while (result) {
    if (x % result === 0 && y % result === 0) break;
    result--;
  }

  return result;
}
