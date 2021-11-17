// https://leetcode.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slowRunner = head;
  let fastRunner = head;
  while (true) {
    if (!(fastRunner && fastRunner.next && fastRunner.next.next)) return null;
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
    if (fastRunner === slowRunner) break;
  }
  slowRunner = head;
  while (fastRunner !== slowRunner) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;
  }

  return fastRunner;
};
