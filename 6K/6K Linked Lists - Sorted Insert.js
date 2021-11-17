// https://www.codewars.com/kata/55cc33e97259667a08000044

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function sortedInsert(head, data, prev = 0) {
  if (!head) return new Node(data, null);

  if (prev < data && data < head.data) {
    head = new Node(data, new Node(head.data, head.next));
  } else {
    head.next = sortedInsert(head.next, data, head.data);
  }

  return head;
}
