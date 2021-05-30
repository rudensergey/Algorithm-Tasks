// https://www.codewars.com/kata/55ab9eee6badbdaf72000075/solutions/javascript

const { pentagonalSequence, pentagonalSequenceGeneral } = (function (limiter) {
  const pentagonalSequence = [];
  const pentagonalSequenceGeneral = [0];

  for (let i = 1; i <= limiter; i++) {
    pentagonalSequence.push((3 * i ** 2 - i) / 2);
    pentagonalSequenceGeneral.push((3 * i ** 2 - i) / 2);
    pentagonalSequenceGeneral.push((3 * i ** 2 + i) / 2);
  }

  return { pentagonalSequence, pentagonalSequenceGeneral };
})(1000);

function PNum(n) {
  if (n === 1) return true;
  return pentagonalSequence.includes(n);
}

function GPNum(n) {
  if (n === 1) return true;
  return pentagonalSequenceGeneral.includes(n);
}

function SPNum(n) {
  if (n === 1) return true;
  return pentagonalSequence.includes(n) && Math.sqrt(n) / 1 === 0;
}
