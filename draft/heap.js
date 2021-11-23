const getParent = (index) => Math.floor((index - 1) / 2);
const getLeft = (index) => Math.floor(index * 2 + 1);
const getRight = (index) => Math.floor(index * 2 + 2);

// // delete
const remove = (arr, index) => {
  let pointer = index;

  if (index >= arr.length) return;
  else if (index === arr.length - 1) arr.pop();
  else arr[pointer] = arr.pop();

  while (true) {
    if (arr[getParent(pointer)] > arr[pointer]) {
      swap(arr, pointer, getParent(pointer));
      pointer = getParent(pointer);
    } else {
      let leftIndex = getLeft(pointer);
      let rightIndex = getRight(pointer);
      let left = arr[leftIndex];
      let right = arr[rightIndex];
      let current = arr[pointer];

      if ((left > current && right > current) || (!left && !right)) {
        break;
      } else if (left < current && right > current) {
        swap(arr, pointer, leftIndex);
        pointer = leftIndex;
      } else if (left > current && right < current) {
        swap(arr, pointer, rightIndex);
        pointer = rightIndex;
      } else if (left < current && right < current) {
        if (left > right) {
          swap(arr, pointer, rightIndex);
          pointer = rightIndex;
        } else {
          swap(arr, pointer, leftIndex);
          pointer = leftIndex;
        }
      }
    }
  }
};

// insert
const insert = (arr, k) => {
  arr.push(k);
  let pointer = arr.length - 1;
  while (pointer !== 0 && arr[pointer] < arr[getParent(pointer)]) {
    swap(arr, pointer, getParent(pointer));
    pointer = getParent(pointer);
  }
};

// min
const min = (arr) => {
  if (arr.length <= 0) return null;
  else return arr[0];
};

// swap
const swap = (arr, i, j) => {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

const arr = [];

const add = (arr, addition) => {
  console.log(`START: `, arr);
  for (let counter = 0; counter < addition.length; counter++) {
    console.log(`ADDING: ${addition[counter]}`);
    insert(arr, addition[counter]);
    console.log(`RESULT: `, arr);
  }
};

// -------------------------------------- >>

// function sort(arr) {
//   var n = arr.length;

//   // Build heap (rearrange array)
//   for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     heapify(arr, n, i);
//   }

//   // One by one extract an element from heap
//   for (var i = n - 1; i > 0; i--) {
//     // Move current root to end
//     var temp = arr[0];
//     arr[0] = arr[i];
//     arr[i] = temp;

//     // call max heapify on the reduced heap
//     heapify(arr, i, 0);
//   }
// }

// // To heapify a subtree rooted with node i which is
// // an index in arr[]. n is size of heap
// function heapify(arr, n, i) {
//   var largest = i; // Initialize largest as root
//   var l = 2 * i + 1; // left = 2*i + 1
//   var r = 2 * i + 2; // right = 2*i + 2

//   // If left child is larger than root
//   if (l < n && arr[l] > arr[largest]) largest = l;

//   // If right child is larger than largest so far
//   if (r < n && arr[r] > arr[largest]) largest = r;

//   // If largest is not root
//   if (largest != i) {
//     var swap = arr[i];
//     arr[i] = arr[largest];
//     arr[largest] = swap;

//     // Recursively heapify the affected sub-tree
//     heapify(arr, n, largest);
//   }
// }

const sort = (arr) => {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    const swap = arr[0];
    arr[0] = arr[i];
    arr[i] = swap;
    heapify(arr, i, 0);
  }

  function heapify(arr, n, i) {
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    let largest = i;

    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (i !== largest) {
      const swap = arr[largest];
      arr[largest] = arr[i];
      arr[i] = swap;

      heapify(arr, n, largest);
    }
  }
};

// ------------------------------------ >>

var arr = [-4, 7, 4, 9, -5, 7, 0, -7, -1];

console.log(arr);
sort(arr);
console.log(arr);

// This code is contributed by SoumikMondal

// ------------------- >>

const isHeap = (root) => {
  const getParent = (index) => Math.floor(index / 2 - 1);

  for (let counter = 0; counter < root.length; counter++) {
    if (counter === 0 && !arr[counter]) return 0;
    if (counter > 0 && arr[getParent(counter)] > arr[counter]) return 0;
    if (counter < root.length && !arr[counter]) return 0;
  }

  return 1;
};

// console.log(isHeap(arr));

// const maximumScore = (a, b, c) => (a >= b + c ? b + c : b >= c + a ? c + a : c >= a + b ? a + b : Math.floor((a + b + c) / 2));

function maximumScore(a, b, c) {
  let ab = a + b;
  let bc = b + c;
  let ca = c + a;

  if (a >= bc) return bc;
  else {
    if (b >= ca) return ca;
    else {
      if (c >= ab) return ab;
      else return Math.floor((a + b + c) / 2);
    }
  }
}

// console.log(maximumScore(2, 4, 6));
// console.log(maximumScore(4, 4, 6));
// console.log(maximumScore(1, 1, 8));
// console.log(maximumScore(1, 8, 8));
// console.log(maximumScore(6, 2, 1));

// console.log("a".charCodeAt());
// console.log("A".charCodeAt());
