// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

const multiTable = (number) =>
  ".........."
    .split("")
    .map((v, i) => `${i + 1} * ${number} = ${(i + 1) * number}`)
    .join("\n");
