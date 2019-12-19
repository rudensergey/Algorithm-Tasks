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

function deleteNth(arr, n) {
    let arrForDelete = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            counter = counter + 1;
            if (counter > n) arrForDelete.push(i);   
        } else if (arr[i] != arr[i+1]) {
            counter = 1;
        }
    }
    console.log(arrForDelete)
    for (j = arrForDelete.length; j > 0 ; j--) {
        arr.splice(arrForDelete[j-1], 1)
    }
    console.log(arr)
    return arr
}


//                     3                   8               12          (3)
//                 2       4               8           11      13      (2)
//        0       2   3   4       6       8   9       11  12  13      (1)
// deleteNth([20, 20 ,37, 37, 37, 37, 13, 13, 24, 24, 24, 11, 11, 11, 11], 1) // expected output [20, 20 ,37, 37 13, 13, 24, 24, 11, 11]

//                     3                   8               12          (3)
//                 2       4               8           11      13      (2)
//         0       2   3   4       6       8   9       11  12  13
deleteNth([20, 20 ,37, 37, 37, 37, 13, 13, 24, 24, 24, 11, 11, 11, 11], 1) // expected output [20, 20 ,37, 37 13, 13, 24, 24, 11, 11]