https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/typescript

let reverseWords = (str: string): string => str
    .split(" ")
    .map(a => a.
        split("")
        .reverse()
        .join(""))
    .join(" ")