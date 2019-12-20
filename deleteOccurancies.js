// Enough is enough!

// Alice and Bob were on a holiday. Both of them took many pictures of the
// places they've been, and now they want to show Charlie their entire collection.
// However, Charlie doesn't like this sessions, since the motive usually repeats.
// He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will
// only sit during the session if they show the same motive at most N times. Luckily,
// Alice and Bob are able to encode the motive as a number. Can you help them to remove
// numbers such that their list contains each number only up to N times, without changing
// the order?

// Task

// Given a list lst and a number N, create a new list that contains each number of 
// lst at most N times without reordering. For example if N = 2, and the input is 
// [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would 
// lead to 1 and 2 being in the result 3 times, and then take 3, which leads to 
// [1,2,3,1,2,3].

// function deleteNth(arr, n) {
//     let arrForDelete = [];
//     let counter = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i+1]) {
//             counter = counter + 1;
//             if (counter > n) arrForDelete.push(i);   
//         } else if (arr[i] != arr[i+1]) {
//             counter = 1;
//         }
//     }
//     console.log(arrForDelete)

//     for (j = arrForDelete.length; j > 0 ; j--) {
//         console.log('We delete ' + arrForDelete[j])
//         arr.splice(arrForDelete[j-1], 1)
//     }
//     console.log(arr)
//     return arr
// }


function deleteNth(arr, n) {
    counter = 0;
    for (let num = 0; num < arr.length; num++) {
        for (let sNum = 0; sNum < arr.length; sNum++) {
            if (arr[num] === arr[sNum]) {
                counter = counter + 1;
                if (counter > n) {
                    if (arr[sNum] === arr[sNum + 1]) {
                        arr.splice(sNum, 2);
                    } else {
                        arr.splice(sNum, 1);
                    }
                }
            }
        }
        counter = 0;
    }

    console.log(arr)
    return(arr)
}

deleteNth([39, 33, 40, 39, 24, 27, 39, 27, 5, 33, 40, 39, 27, 5, 24, 15, 40, 47, 47, 27, 27, 33, 33, 5, 47, 47, 40, 47, 5, 27, 15, 40, 33, 5, 33, 47, 5, 33, 47, 33, 33, 27, 24, 39, 40, 39, 47, 33, 27], 1)
// deleteNth([39, 33, 40, 24, 27, 5, 15, 47], 1)
// expected output [20, 20 ,37, 37 13, 13, 24, 24, 11, 11]