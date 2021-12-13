const calculator = (string: string) => {
  const arrayToCalc: Array<string | number> = string.split(" ");
  const spliceArr = () => arrayToCalc.splice(index, 2);

  let index = 0;
  let iterationCount = 0;

  while (arrayToCalc.length > 1) {
    switch (arrayToCalc[index]) {
      case "*": {
        arrayToCalc[index - 1] =
          Number(arrayToCalc[index - 1]) * Number(arrayToCalc[index + 1]);
        spliceArr();

        index -= 2;
        break;
      }
      case "/": {
        arrayToCalc[index - 1] =
          Number(arrayToCalc[index - 1]) / Number(arrayToCalc[index + 1]);
        spliceArr();

        index -= 2;
        break;
      }
      case "+": {
        if (!iterationCount) break;
        arrayToCalc[index - 1] =
          Number(arrayToCalc[index - 1]) + Number(arrayToCalc[index + 1]);
        spliceArr();

        index -= 2;
        break;
      }
      case "-": {
        if (!iterationCount) break;
        arrayToCalc[index - 1] =
          Number(arrayToCalc[index - 1]) - Number(arrayToCalc[index + 1]);
        spliceArr();

        index -= 2;
        break;
      }
    }

    index++;

    if (index === arrayToCalc.length - 1) {
      iterationCount++;
      index = 0;
    }
  }

  return Number(arrayToCalc.toString());
};

console.log(calculator("10 * 10 * 5 / 2"));
