https://www.codewars.com/kata/525f50e3b73515a6db000b83

let createPhoneNumber = numbers => numbers.join("").replace(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/, '($1$2$3) $4$5$6-$7$8$9$10')