// https://www.codewars.com/kata/55d9f257d60c5fd98d00001b

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (!head) return null;

  const hashMap = new Set([head.data]);
  let prev = head;
  let temp = head.next;

  while (temp) {
    if (hashMap.has(temp.data)) {
      if (temp.next) {
        temp.data = temp.next.data;
        temp.next = temp.next.next;
      } else {
        prev.next = null;
        break;
      }
    } else {
      hashMap.add(temp.data);
      prev = temp;
      temp = temp.next;
    }
  }

  return head;
}
