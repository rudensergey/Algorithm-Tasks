/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let curr = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  length -= n;
  curr = head;
  let prev = head;

  if (length === 0) return curr.next;

  while (length !== 0) {
    prev = curr;
    curr = curr.next;
    length--;
  }

  prev.next = curr.next;
  return head;
};
