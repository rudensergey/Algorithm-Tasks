const calc = function (expression) {
  const preparedExpression = expression
    .replace(/ /g, "")
    .replace(/--/g, "+")
    .replace(/\-\+/g, "+")
    .replace(/\+\-/g, "-")
    .match(/((?<=[*\(])-\d+(\.\d+)?)|\-|\d+(\.\d+)?|[\+\-\/\\*()]/g);

  const computeArr = (arrayToCalc) => {
    let index = 0,
      iterationCount = 0;

    const spliceArr = () => arrayToCalc.splice(index, 2);

    while (arrayToCalc.length > 1) {
      if (iterationCount > 2) break;
      if (arrayToCalc.length === 2) return arrayToCalc;
      switch (arrayToCalc[index]) {
        case "(": {
          let lastindex = 0,
            num = 0;
          for (let counter = index; counter < arrayToCalc.length; counter++) {
            if (arrayToCalc[counter] === "(") num -= 1;
            if (arrayToCalc[counter] === ")") num += 1;
            if (num === 0) {
              lastindex = counter;
              break;
            }
          }
          const resolvedArray = computeArr(
            arrayToCalc.slice(index + 1, lastindex)
          );
          if (typeof resolvedArray === "number") {
            arrayToCalc.splice(index + 1, lastindex - index);
            arrayToCalc[index] = resolvedArray;
          } else if (typeof resolvedArray === "object") {
            const firstPart = arrayToCalc.slice(0, index);
            const secondPart = arrayToCalc.slice(
              lastindex + 1,
              arrayToCalc.length
            );
            arrayToCalc = [...firstPart, ...resolvedArray, ...secondPart]
              .join("")
              .replace(/ /g, "")
              .replace(/--/g, "")
              .replace(/\-\+/g, "")
              .replace(/\+\-/g, "-")
              .split();
          }
        }
        case "*": {
          if (iterationCount !== 1) break;
          if (arrayToCalc[index + 1] === "-") {
            arrayToCalc[index - 1] = Number(0 - arrayToCalc[index - 1]);
            arrayToCalc.splice(index + 1, 1);
          } else {
            arrayToCalc[index - 1] =
              Number(arrayToCalc[index - 1]) * Number(arrayToCalc[index + 1]);
            spliceArr();
          }
          index -= 2;
          break;
        }
        case "/": {
          if (iterationCount !== 1) break;
          if (arrayToCalc[index + 1] === "-") {
            arrayToCalc[index - 1] = Number(0 - arrayToCalc[index - 1]);
            arrayToCalc.splice(index + 1, 1);
          } else {
            arrayToCalc[index - 1] =
              Number(arrayToCalc[index - 1]) / Number(arrayToCalc[index + 1]);
            spliceArr();
          }
          index -= 2;
          break;
        }
        case "+": {
          if (iterationCount !== 2) break;
          arrayToCalc[index - 1] =
            Number(arrayToCalc[index - 1]) + Number(arrayToCalc[index + 1]);
          spliceArr();
          index -= 2;
          break;
        }
        case "-": {
          if (iterationCount !== 2) break;
          arrayToCalc[index - 1] =
            Number(arrayToCalc[index - 1]) - Number(arrayToCalc[index + 1]);
          spliceArr();
          index -= 2;
          break;
        }
      }
      index++;

      if (index > arrayToCalc.length - 1) {
        iterationCount++;
        index = 0;
      }
    }
    return Number(arrayToCalc.toString());
  };

  const result = computeArr(preparedExpression);
  return typeof result === "object" ? Number(result.join("")) : result;
};
