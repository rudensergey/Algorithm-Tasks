// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
  let n = 0;
  for (let counter = 0; counter < parens.length; counter++) {
    if (parens[counter] == "(") n++;
    if (parens[counter] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}
