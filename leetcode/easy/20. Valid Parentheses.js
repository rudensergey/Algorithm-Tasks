/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  let curr = 0;

  while (curr < s.length) {
    switch (s[curr]) {
      case "[":
      case "{":
      case "(":
        stack.push(s[curr]);
        break;
      case "]":
        if (stack[stack.length - 1] === "[") stack.pop();
        else return false;
        break;
      case "}":
        if (stack[stack.length - 1] === "{") stack.pop();
        else return false;
        break;
      case ")":
        if (stack[stack.length - 1] === "(") stack.pop();
        else return false;
        break;
    }

    curr++;
  }

  return stack.length ? false : true;
};
