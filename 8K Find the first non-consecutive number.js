// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

const firstNonConsecutive = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1 && arr[i] + 1 !== arr[i + 1]) return arr[i + 1];
  }

  return null;
};
