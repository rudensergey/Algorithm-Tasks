const isPrime = (num) => {
  if (num <= 1) false;
  if (num <= 3) true;

  if (num % 2 == 0 || num % 3 == 0) return false;

  for (let i = 5; i * i < num; i = i + 6) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
  }

  return true;
};

isPrime(13);
