/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let result = "";
  let currentWord = "";
  let hash = {
    "()": "o",
    "(al)": "al",
    G: "G",
  };
  for (let i = 0; i < command.length; i++) {
    currentWord += command[i];

    if (currentWord in hash) {
      result += hash[currentWord];
      currentWord = "";
    }
  }

  return result;
};
