https://www.codewars.com/kata/596343a24489a8b2a00000a2

function isItANum(str) {
  let a = str.match(/\d/g)
  let b = a.join("")
  let c = "Not a phone number"

  return a.length === 11
    ? b.startsWith('0')
      ? b
      : c
    : c;
}