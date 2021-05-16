function generator(sequencer, ...args) {
  const generatorObj = {
    sequencer: sequencer(...args),
    next: () => {
      const genResult = generatorObj.sequencer.apply(generatorObj, args);
      return genResult ? genResult : new Error("The end of a generator");
    },
  };

  return generatorObj;
}

function dummySeq() {
  return function () {
    return "dummy";
  };
}

function factorialSeq() {
  let current = 0;

  return function () {
    let result;

    if (current <= 1) {
      result = 1;
    } else if (current === 2) {
      result = 2;
    } else {
      result = 1;

      for (let i = 1; i <= current; i++) {
        result = result * i;
      }
    }

    current++;
    return result;
  };
}

function fibonacciSeq() {
  let beforePrev = 0;
  let prev = 0;

  return function () {
    const result = beforePrev + prev;

    beforePrev = prev;
    prev = result;

    if (prev === 0) prev++;

    return result ? result : 1;
  };
}

function rangeSeq(start, step) {
  let prevResult = start;
  let level = 0;

  return function () {
    level++;
    if (level === 1) {
      return start;
    } else {
      const result = prevResult + step;
      prevResult = result;
      return result;
    }
  };
}

function primeSeq() {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 == 0 || num % 3 == 0) return false;

    for (let i = 5; i * i <= num; i = i + 6) {
      if (num % i == 0 || num % (i + 2) == 0) return false;
    }

    return true;
  }

  function getNextPrime(startNum = 0) {
    let current = startNum + 1;

    while (true) {
      if (isPrime(current)) break;
      current++;
    }

    return current;
  }

  let prevResult;

  return function () {
    const result = getNextPrime(prevResult);
    prevResult = result;
    return result;
  };
}

// generator end value -> null
function partialSumSeq(...args) {
  let seq = args;
  let prevValue = null;

  return function () {
    let current = args.shift(),
      result;

    if (!current) throw new Error("Stop a generator");

    if (prevValue === null) result = current;
    else result = prevValue + current;

    prevValue = result;
    return result;
  };
}
