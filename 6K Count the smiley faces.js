https://www.codewars.com/kata/583203e6eb35d7980400002a

let countSmileys = (arr) => {
    let a = arr.join("").match(/[;|:](-|~)?[)|D]/g)
    return a ? a.length : 0;
}