// // task 1 = log bigger number

// console.log('// task 1')

// let firstNumber = Math.floor(Math.random()*10);
// console.log('The first number is ' + firstNumber);

// let secondNumber = Math.floor(Math.random()*10);
// console.log('The second number is ' + secondNumber);

// function checking(numberOne, numberTwo) {
//     if (numberOne < numberTwo) {
//         console.log("The greater number is " + numberTwo);
//     } else if (numberOne > numberTwo) {
//         console.log("The greater number is " + numberOne);
//     } else {
//         console.log("Numbers are equal!")
//     }
// }

// checking(firstNumber, secondNumber);

// // task 2 = check the sign of the three numbers

// console.log('// task 2')

// let one = 11;
// let two = -8;
// let three = 1;

// console.log('input numbers' + ' ' + one + ' ' + two + ' ' + three);

// function checkingOfSign() {
//     if (one * two * three > 0) {
//         console.log('The sign is +');
//     } else {
//         console.log('The sign is -');
//     }
// }

// checkingOfSign();

// // task 3 = sort of thee numbers

// console.log('// task 3')

// let numbers = [];

// function sortNumbers () {
//     if (one > two) {
//         if (one > three) {
//             if (two > three) {
//                 numbers.push(one, two, three);
//             } else {
//                 numbers.push(one, three, two);
//             }
//         } else {
//             numbers.push(three, one, two);
//         }
//     } else if (one < two) {
//         if (one < three) {
//             if (two < three) {
//                 numbers.push(three, two, one);
//             } else {
//                 numbers.push(two, three, one);
//             }
//         } else {
//             numbers.push(two, one, three);
//         }
//     }

//     console.log(numbers);
// }

// sortNumbers();

// // task 4 = find the biggest number in raw

// console.log('// task 4')

// let rowOfNumbers = [6,97,555,2,12];

// function findBiggestNumber (arr) {
//     let biggestNumber = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > biggestNumber) {
//             biggestNumber = arr[i];
//         }
//     }

//     console.log('The biggest number is ' + biggestNumber);
// }

// findBiggestNumber(rowOfNumbers);

// // task 5 = check even numbers

// console.log('// task 5')

// for (let i = 0; i < 15; i++) {
//     if (i % 2 > 0) {
//         console.log('Number ' + i + ' is even');
//     } else {
//         console.log('Number ' + i + ' is odd');
//     }
// }

// // task 6 = average number

// console.log('// task 6')

// let marks = [65, 76, 98, 45, 56, 67];

// function average (arr) {
//     let summ = 0;

//     let i = 0
//     while (i < arr.length) {
//         console.log(arr[i]);
//         summ += arr[i];
//         i++
//     }

//     console.log('Average mark is ' + summ/arr.length);

//     if (i === arr.length) {
//         if (i < 60) {
//             console.log('F - grade');
//         } else if (i < 70) {
//             console.log('D - grade');
//         } else if (i < 80) {
//             console.log('C - grade');
//         } else if (i < 90) {
//             console.log('B - grade');
//         } else {
//             console.log('A - grade');
//         }
//     }
// }

// average(marks);

// ////////////////////////////////////////////////////

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz = ' + i)
//     } else if (i % 3 === 0) {
//         consoKle.log('Fizz = ' + i);
//     } else if (i % 5 === 0) {
//         console.log('Buzz = ' + i);
//     } else  {
//         console.log(i);
//     }
// }

// var number = 4;
// console.log(number);

// var outer = () => {
//     console.log(number);
//     var number = 8;
//     console.log(number);
    
//     var inner = () => {
//         console.log(number);
//         var number = 12;
//         console.log(number);
//     }
//     inner();
//     console.log(number);
// }

// outer();


// Closer // Замыкание


// function makeCounter() {
//     var currentCount = 1;
  
//     return function() {
//       return currentCount++;
//     };
//   }
  
//   var counter = makeCounter();
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//   var counter2 = makeCounter();
//   console.log(counter2());


// Рекурсия


// function findSolution(target) {
//     function find(start, history) {
//         if (start == target)
//             return history;
//         else if (start > target)
//             return null;
//         else
//             return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
//     }
//     return find(1, "1");
// }

// console.log(findSolution(16));

// Создание собственного объекта

// function finder() {
// }

// finder.prototype.findBigger = function findBigger(firstNumber, secondNumber) {
//     this.firstNumber = firstNumber;
//     this.secondNumber = secondNumber;

//     if (this.firstNumber < this.secondNumber) {
//         console.log(this.secondNumber + "  is bigger than " + this.firstNumber);
//     } else {
//         console.log(this.firstNumber + "  is bigger than " + this.secondNumber);
//     }
// }

// finder.prototype.multiply = function multiply(firstNumber, secondNumber) {
//     this.firstNumber = firstNumber;
//     this.secondNumber = secondNumber;

//     console.log(this.firstNumber * this.secondNumber);
// }

// finder.prototype.mediumNumber = function mediumNumber(firstNumber, secondNumber, thirdNumber) {
//     this.firstNumber = firstNumber;
//     this.secondNumber = secondNumber;
//     this.thirdNumber = thirdNumber;

//     console.log((this.firstNumber + this.secondNumber + this.thirdNumber)/3);
// }

// let myFunction = new finder();

// myFunction.findBigger(13, 56);
// myFunction.findBigger(46, 345);
// myFunction.findBigger(150, 100);

// myFunction.multiply(7, 5);
// myFunction.multiply(3, 3);
// myFunction.multiply(10, 4);

// myFunction.mediumNumber(10, 30, 50);


// Конвертация string to number


let e = '10.4';
console.log(typeof e);
console.log(+e);
console.log(parseInt(e));
console.log(parseFloat(e));
console.log(isNaN(e));


// тернарный оператор


e === 10 ? console.log('Yes') : console.log('no');

