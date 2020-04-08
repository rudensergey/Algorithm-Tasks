https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {
    let first = a.split("").reverse()
    let second = b.split("").reverse()
    
    let i = 0;
    let result = [];

    while (first[i] || second[i]) {
        if (first[i] || second[i]) {
            if (!first[i]) first[i] = 0
            if (!second[i]) second[i] = 0

            let sum =  +first[i] + +second[i]

            if (result[i]) sum++
            if (sum >= 10) {
                let splitted = sum.toString().split("")
                result[i] = +splitted[1]
                result[i + 1] = 1;
            } else {
                result[i] = sum;
            }
        }
        i++
    }
    return result.reverse().join("")
}