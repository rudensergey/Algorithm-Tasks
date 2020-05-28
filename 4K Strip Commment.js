// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

const solution = (input, markers) =>
    input.replace(new RegExp(`\\s([${markers[0]}|${markers[1]}].+)`, "gi"), "");
