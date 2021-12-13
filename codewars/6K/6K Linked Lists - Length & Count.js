// https://www.codewars.com/kata/55beec7dd347078289000021

function Node(data) {
  this.data = data;
  this.next = null;
}

const length = (head, currentLength = 0) => (head ? length(head.next) + 1 : 0);
const count = (head, data) => (head ? (head.data === data ? count(head.next, data) + 1 : count(head.next, data)) : 0);
