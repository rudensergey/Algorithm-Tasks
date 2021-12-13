https://www.codewars.com/kata/55aa7acc42216b3dd6000022

function owlPic(text){
    let a = text.match(/(8|W|T|Y|U|I|O|A|H|X|V|M)+/gi).join("").toUpperCase();
    let b = a.split("").reverse().join("")
    return `${a}''0v0''${b}`
  }