https://www.codewars.com/kata/5254ca2719453dcc0b00027d/javascript

function permutations(string) {
  let set = new Set()
  perm(string.split(""))

  function perm(str, pref = "") {
    let arr = str
    
    for (let i = 0; i < str.length; i++) {
      arr.push(arr[0])
      arr.shift()  
      set.add(pref + arr.join(""))      
      
      if (str.length > 2) perm(arr.slice(1, arr.length), pref + arr[0])
    }
  }
  
  return Array.from(set)
}