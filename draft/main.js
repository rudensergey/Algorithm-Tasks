function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    console.log(i);
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// ----- >>

function isPrimeimproved(n) {
  if (n <= 1) return false;
  if (n <= 3) return true; // This is checked so that we can skip // middle five numbers in below loop

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
}

// ---- >>

function primeFactors(n) {
  // Print the number of 2s that divide n
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  } // n must be odd at this point. So we can skip one element (Note i = i +2)

  for (var i = 3; i * i <= n; i = i + 2) {
    // While i divides n, print i and divide n
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  } // This condition is to handle the case when n is a prime number // greater than 2
  if (n > 2) {
    console.log(n);
  }
}

function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0;

  var value = 1;

  for (var i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}
