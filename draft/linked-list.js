class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function generateLL(amount) {
  let temp = null;
  for (let i = amount; i > 0; i--) {
    temp = new Node(i, temp);
  }
  return temp;
}

// Traversial --------------------------------- >>

function traversial(list) {
  let head = list;

  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}

function removeDuplicates(head) {
  if (head === null) return null;
  let data = head.data;
  let prev = null;
  let temp = head.next;

  while (temp) {
    if (temp.data === data) {
      if (temp.next) {
        temp.data = temp.next.data;
        temp.next = temp.next.next;
      } else {
        if (prev) prev.next = null;
        else head.next = null;

        break;
      }
    } else {
      prev = temp;
      temp = temp.next;
    }
  }

  removeDuplicates(head.next);
  return head;
}

function removeNode(head, index) {
  if (!head) return null;

  if (index === 0) {
    if (head.next) {
      head.data = head.next.data;
      head.next = head.next.next;
    } else {
      head = null;
    }
  }

  let temp = head;
  let prev = head;
  let currentNode = 0;

  while (temp) {
    if (currentNode === index) {
      prev.next = temp.next;
    }

    prev = temp;
    temp = temp.next;
    currentNode++;
  }

  return head;
}

function countLength(head) {
  let temp = head;
  let counter = 0;
  while (temp) {
    temp = temp.next;
    counter++;
  }

  return counter;
}

function countLengthRecursive(head) {
  if (!head) return 0;
  const tail = countLengthRecursive(head.next);
  return tail + 1;
}

function getNthNodeRecursive(head, index) {
  if (!head) return null;
  return index === 0 ? head.data : getNthNodeRecursive(head.next, index - 1);
}

function findMiddle(head) {
  if (!head) return null;
  if (head.next === null) return head;

  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer.data;
}

function occurencies(head, i) {
  if (!head) return 0;
  const count = head.data === i ? 1 : 0;
  return count + occurencies(head.next, i);
}

function checkPalindrome(head) {
  const stack = [];
  let temp = head;
  while (temp) {
    stack.push(temp.data);
    temp = temp.next;
  }

  temp = head;

  while (temp) {
    if (temp.data !== stack.pop()) return false;
    temp = temp.next;
  }

  return stack.length ? false : true;
}

function swapElements(head, i, j) {
  if (!head || i === j) return console.log("equal pointers or empty list");

  let prevNode1 = null;
  let node1 = head;
  let prevNode2 = null;
  let node2 = head;

  while (node1 && node1.data !== i) {
    prevNode1 = node1;
    node1 = node1.next;
  }

  while (node2 && node2.data !== j) {
    prevNode2 = node2;
    node2 = node2.next;
  }

  if (node1 === null || node2 === null) return console.log("there is no such an indexes");

  if (prevNode1) prevNode1.next = node2;
  else head = node2;

  if (prevNode2) prevNode2.next = node1;
  else head = node1;

  const temp = node1.next;
  node1.next = node2.next;
  node2.next = temp;
}

function getIntersection(l1, l2) {
  if (l1 === null || l2 === null) return null;

  if (l1.data > l2.data) {
    return getIntersection(l1, l2.next);
  }

  if (l1.data < l2.data) {
    return getIntersection(l1.next, l2);
  }

  return new Node(l1.data, getIntersection(l1.next, l2.next));
}

const l1 = generateLL(7);
const l2 = generateLL(4);

// traversial(getIntersection(l1, l2));

const l3 = generateLL(6);

const reverseHalf = (head, n) => {
  let a = head;
  let b = null;
  console.log(Math.floor(n / 2));
  for (let i = 0; i < Math.floor(n / 2) - 1; i++) a = a.next;
  b = a.next;

  let x_p = a;
  let x = b;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    x_n = x.next;
    x.next = x_p;
    x_p = x;
    x = x_n;
  }

  let c = x_p;
  a.next = c;
  b.next = null;
};

reverseHalf(l3, 6);

traversial(l3);
