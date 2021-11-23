const text = "wefweferferferfergerwaelmfllmerferfereeeetyhmerferfertyhergergergergegergergergerg";
const ptrn = "lmerferfereeeetyh";

// function search(text, pattern) {
//   const modulus = 101;
//   const primeNumber = 257;

//   let textHash = 0;
//   let patternHash = 0;
//   let h = 1;

//   let i;

//   for (i = 0; i < pattern.length - 1; i++) {
//     h = (primeNumber * h) % modulus;
//   }

//   for (i = 0; i < pattern.length; i++) {
//     textHash = (primeNumber * textHash + text[i].charCodeAt()) % modulus;
//     patternHash = (primeNumber * patternHash + pattern[i].charCodeAt()) % modulus;
//   }

//   for (i = 0; i <= text.length - pattern.length; i++) {
//     if (patternHash === textHash) return true;

//     if (i < text.length - pattern.length) {
//       textHash = (primeNumber * (textHash - text[i].charCodeAt() * h) + text[i + pattern.length].charCodeAt()) % modulus;
//       if (textHash < 0) textHash = textHash + modulus;
//     }
//   }

//   return false;
// }

const search = (text, pattern) => {
  const modulus = 101;
  const randomNumber = 257;
  let i;
  let h = 1;
  let textHash = 0;
  let patHash = 0;

  for (i = 0; i < pattern.length - 1; i++) {
    h = (h * randomNumber + pattern[i].charCodeAt()) % modulus;
  }

  for (i = 0; i < pattern.length; i++) {
    patHash = (patHash * randomNumber + pattern[i].charCodeAt()) % modulus;
    textHash = (textHash * randomNumber + text[i].charCodeAt()) % modulus;
  }

  for (i = 0; i <= text.length - pattern.length; i++) {
    if (patHash === textHash) return true;

    if (i < text.length - pattern.length) {
      textHash = (randomNumber * (textHash - text[i].charCodeAt() * h) + text[i + pattern.length].charCodeAt()) % modulus;
      if (textHash < 0) textHash = textHash + modulus;
    }
  }

  return false;
};

const searchNaive = (string, pattern) => {
  for (let i = 0; i < string.length; i++) {
    let occurencies = 0;

    for (let j = 0; j < pattern.length; j++) {
      if (string[i + j] === pattern[j]) {
        occurencies++;
      }
    }

    if (occurencies === pattern.length) return true;
    else occurencies = 0;
  }

  return false;
};

const benchmark = (times, func, ...rest) => {
  let summarizedTime = 0;

  for (let k = 0; k < times; k++) {
    const startTime = new Date().valueOf();

    for (let j = 0; j < 100000; j++) {
      func(...rest);
    }

    summarizedTime = summarizedTime + (new Date().valueOf() - startTime);
  }

  return (summarizedTime / times).toFixed(0);
};

console.log(search(text, ptrn));
console.log(searchNaive(text, ptrn));
console.log(`Average time for 1M times of execution naive: ${benchmark(10, searchNaive, text, ptrn)}ms`);
console.log(`Average time for 1M times of execution site: ${benchmark(10, search, text, ptrn)}ms`);
