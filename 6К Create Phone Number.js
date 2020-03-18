https://www.codewars.com/kata/525f50e3b73515a6db000b83

let createPhoneNumber = numbers => numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')