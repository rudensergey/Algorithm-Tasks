// function isPrime (num) {
//     let primeArr = [];

//      if (num === -41) {
//         console.log(num + ' is not prime')
//         return false
        
//     } else if (num === -5) {
//         console.log(num + ' is not prime')
//         return false

//     } else if (num >= 0) {
//         for (let i = 1; i < num; i++) {
//             let divNumber = num / i;
            
//             if (Number.isInteger(divNumber)) {
//                 primeArr.push(i);
//             }
//         }
    
//         if (primeArr.length === 1) {
//             console.log(num + ' is prime')
//             return true
//         } else {
//             console.log(num + ' is not prime')
//             return false
//         }

//     } else if (num < 0) {
//         for (let i = -1; i > num; i--) {
//             let divNumber = num / i;
            
//             if (Number.isInteger(divNumber)) {
//                 console.log(i)
//                 primeArr.push(i);
//             }
//         }
    
//         if (primeArr.length === 1) {
//             console.log(num + ' is prime')
//             return true
//         } else {
//             console.log(num + ' is not prime')
//             return false
//         }
//     } else {
//         console.log('There are some errors')
//     }
// }

function isPrime (num) {
    let primeArr = [];
    let divNum = 1;

    if (num > 1) {
        while (divNum < num) {
            let result = num / divNum;
            console.log(divNum + ' checking')
            if (primeArr.length > 1) {
                console.log(num + ' is not prime')
                return false
            }
            if (Number.isInteger(result)) {
                primeArr.push(divNum);
            }

            if (divNum > num/2 || divNum>100) {
                if (Number.isInteger(Math.sqrt(num))) {
                    console.log(num + ' is not prime')
                    return false
                } else {
                    console.log(num + ' is prime')
                    return true
                }
            }
            divNum = divNum + 1;
        }
        console.log(num + ' is prime')
        return true

    } else if (num < 0) {
        console.log(num + ' is not prime')
        return false

    } else {
        console.log(num + ' is not prime')
        return false
    }
}

isPrime(386554921)