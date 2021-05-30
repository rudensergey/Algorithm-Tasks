// https://www.codewars.com/kata/52ec24228a515e620b0005ef/solutions/javascript

// Recourses
// // https://www.coursera.org/lecture/enumerative-combinatorics/definition-and-first-examples-6UZTQ
// https://www.mccme.ru/free-books/dubna/smirnov-asm.pdf
// http://www-groups.mcs.st-andrews.ac.uk/~pjc/Teaching/MT5821/1/l8.pdf
// https://www.youtube.com/watch?v=sng0OAl2Qzs&t=8s&ab_channel=Vanechki%3A%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0%2C%D0%B1%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%D0%B8%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D0%B5%D0%B4%D1%80%D1%83%D0%B3%D0%BE%D0%B5

const partitions = {
  0: 1,
  1: 1,
  2: 2,
  3: 3,
  4: 5,
  5: 7,
};

const pentagonalSequence = (function generateEulerPentagonalNumber(limiter) {
  const result = [];
  let negative = false;

  for (let i = 1; i <= limiter; i++) {
    result.push([negative, (3 * i ** 2 - i) / 2]);
    result.push([negative, (3 * i ** 2 + i) / 2]);
    negative ? (negative = false) : (negative = true);
  }

  return result;
})(100);

function sum(number) {
  if (partitions[number]) return partitions[number];

  let currentParencies = 0;
  let result = 0;

  while (number - pentagonalSequence[currentParencies][1] >= 0) {
    const currentResult = sum(number - pentagonalSequence[currentParencies][1]);
    pentagonalSequence[currentParencies][0] ? (result -= currentResult) : (result += currentResult);

    currentParencies++;
  }

  partitions[number] = result;
  return result;
}

console.log(sum(10));
