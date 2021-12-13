const sumTriangularNumbers = (n) => {
  if (n <= 0) return 0;

  let sum = 0;
  let prev = 0;

  for (let i = 1; i <= n; i++) {
    sum += prev + i;
    prev = prev + i;
  }

  return sum;
};
