// https://www.codewars.com/kata/55e67e44bf97fa66900000a0

function Node(data, next = null) {
  this.data = data === undefined ? null : data;
  this.next = next;
}

function sortedIntersect(l1, l2, last) {
  if (l1 === null || l2 === null) return null;
  if (l1.data > l2.data) return sortedIntersect(l1, l2.next);
  if (l1.data < l2.data) return sortedIntersect(l1.next, l2);
  if (last === l1.data && l2.data === last) return sortedIntersect(l1.next, l2.next, l1.data);
  return new Node(l1.data, sortedIntersect(l1.next, l2.next, l1.data));
}
