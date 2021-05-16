//www.codewars.com/kata/52a89c2ea8ddc5547a000863

https: function loop_size(node) {
  let currentNode = null;
  let incr = 0;
  let result = 0;

  if (!node) return 0;

  currentNode = node;

  while (true) {
    incr++;

    if (currentNode.incr) {
      result = incr - currentNode.incr;
      break;
    }

    currentNode.incr = incr;

    if (currentNode.next) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }

  return result;
}
