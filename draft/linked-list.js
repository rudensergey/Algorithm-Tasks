class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const first = new Node(1, null);
const second = new Node(1, first);
const third = new Node(4, second);
const forth = new Node(4, third);
const fifth = new Node(5, forth);

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
