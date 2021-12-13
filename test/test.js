function medianOfArray(array) {
  var length = array.length; // Odd
  if (length % 2 == 1) {
    return array[Math.floor(length / 2)];
  } else {
    // Even
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}
// arr2 is the bigger array
function medianOfTwoSortedArray(arr1, arr2, pos) {
  console.log(arr1);
  console.log(arr2);
  if (pos <= 0) {
    return -1;
  }
  if (pos == 1) {
    return (arr1[0] + arr2[0]) / 2;
  }
  if (pos == 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  var median1 = medianOfArray(arr1),
    median2 = medianOfArray(arr2);

  if (median1 == median2) {
    return median1;
  }

  var evenOffset = pos % 2 == 0 ? 1 : 0,
    offsetMinus = Math.floor(pos / 2) - evenOffset,
    offsetPlus = Math.floor(pos / 2) + evenOffset;

  console.log(evenOffset);
  console.log(offsetMinus);
  console.log(offsetPlus);

  if (median1 < median2) {
    return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(offsetMinus), offsetPlus);
  } else {
    return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(offsetMinus), offsetPlus);
  }
}

// console.log(medianOfTwoSortedArray([5, 6, 7, 8, 9, 10], [3, 4, 5, 6, 7, 8], 4)); // 3.5
// console.log(medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3)); // 28
// console.log(medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3)); // 2.5”

function getEulerPentagonalNumber(n) {
  return (3 * n ** 2 - n) / 2;
}

function getEulerPentagonalNegativeNumber(n) {
  return (3 * n ** 2 + n) / 2;
}

function generateEulerPentagonalNumber(limiter) {
  const result = [];
  let negative = false;

  for (let i = 1; i <= limiter; i++) {
    result.push([negative, getEulerPentagonalNumber(i)]);
    result.push([negative, getEulerPentagonalNegativeNumber(i)]);
    negative ? (negative = false) : (negative = true);
  }

  return result;
}

const partitions = {
  0: 1,
  1: 1,
  2: 2,
  3: 3,
  4: 5,
  5: 7,
};

const pentagonalSequence = generateEulerPentagonalNumber(10);
const g = (n) => {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push("-->");
  }
  return a.join("");
};

function getIntegerPartitions(number, level = 1, negative = false) {
  console.log("start ", g(level), " input: ", number);
  if (partitions[number]) {
    console.log("end   ", g(level), " result: ", negative ? "-" : "+", partitions[number]);
    return partitions[number];
  }

  let currentParencies = 0;
  let result = 0;

  while (number - pentagonalSequence[currentParencies][1] >= 0) {
    const currentResult = getIntegerPartitions(number - pentagonalSequence[currentParencies][1], level + 1, pentagonalSequence[currentParencies][0]);
    pentagonalSequence[currentParencies][0] ? (result -= currentResult) : (result += currentResult);
    currentParencies++;
  }

  partitions[number] = result;
  console.log("end   ", g(level), " result: ", negative ? "-" : "+", result);
  return result;
}

// ----------------------- >>

function base10ToString(n) {
  var binaryString = "";

  function base10ToStringHelper(n) {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      base10ToStringHelper(Math.floor(n / 2)); // destinct
      base10ToStringHelper(n % 2); // odd
    }
  }
  base10ToStringHelper(n);

  return binaryString;
}

console.log(base10ToString(4)); // 11101000”
