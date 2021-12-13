https://www.codewars.com/kata/517abf86da9663f1d2000003

let toCamelCase = str => str
  .replace(/(?<=[\_|\-])\w/gi, a => a.toUpperCase())
  .replace(/(\-|\_)/g, "") || ''