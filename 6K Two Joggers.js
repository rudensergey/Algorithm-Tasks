var nbrOfLaps = function (x, y) {
  let result = 1;

  while (true) {
    if (result % x === 0 && result % y === 0) break;
    result++;
  }

  const bobLaps = result / x;
  const charlesLaps = result / y;

  return [bobLaps, charlesLaps];
};
