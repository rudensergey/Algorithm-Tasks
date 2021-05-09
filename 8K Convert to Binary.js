// https://www.codewars.com/kata/59fca81a5712f9fa4700159a

function toBinary(n) {
  let binary = "";
  if (n < 0) {
    n = n >>> 0;
  }

  while (Math.ceil(n / 2) > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }

  return Number(binary);
}
