/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let stringA = word1;
  let stringB = word2;
  let sAl = stringA.length;
  let sBl = stringB.length;
  let wordA = 0;
  let wordB = 0;
  let pointerA = 0;
  let pointerB = 0;

  while (true) {
    if ((wordA === stringA.length && wordB !== stringB.length) || (wordA !== stringA.length && wordB === stringB.length)) return false;

    if (wordA === stringA.length) break;

    if (stringA[wordA][pointerA] !== stringB[wordB][pointerB]) return false;

    pointerA++;
    pointerB++;

    if (pointerA === stringA[wordA].length) {
      pointerA = 0;
      wordA++;
    }

    if (pointerB === stringB[wordB].length) {
      pointerB = 0;
      wordB++;
    }
  }

  return true;
};
