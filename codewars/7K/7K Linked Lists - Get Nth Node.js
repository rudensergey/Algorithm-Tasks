// https://www.codewars.com/kata/55befc42bfe4d13ab1000007

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (index) return getNth(node.next, index - 1);
  if (node) return node;
  throw "Error";
}
