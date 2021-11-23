const createTreeNode = (value, left = null, right = null) => ({
  value: value,
  left,
  right,
});

const tree = createTreeNode(
  42,
  createTreeNode(41, createTreeNode(10), createTreeNode(40)),
  createTreeNode(50, createTreeNode(45), createTreeNode(75))
);

function BinaryTree(root) {
  this._root = root;
}

BinaryTree.prototype.traversePreOrder = function () {
  traversePreOrderHelper(this._root);

  function traversePreOrderHelper(node) {
    if (!node) return;

    console.log(node.value);
    if (node.left) traversePreOrderHelper(node.left);
    if (node.right) traversePreOrderHelper(node.right);
  }
};

BinaryTree.prototype.traversePreOrderIterative = function () {
  const nodeStack = [];
  if (!this._root) return;
  nodeStack.push(this._root);

  while (nodeStack.length) {
    const currentNode = nodeStack.pop();
    console.log(currentNode.value);
    if (currentNode.right) nodeStack.push(currentNode.right);
    if (currentNode.left) nodeStack.push(currentNode.left);
  }
};

BinaryTree.prototype.traverseInOrder = function () {
  traverseInOrderHelper(this._root);

  function traverseInOrderHelper(node) {
    if (!node) return;

    if (node.left) traverseInOrderHelper(node.left);
    console.log(node.value);
    if (node.right) traverseInOrderHelper(node.right);
  }
};

BinaryTree.prototype.traverseInOrderIterative = function () {
  let current = this._root,
    s = [],
    done = false;

  if (!this._root) return;

  while (!done) {
    if (current !== null) {
      s.push(current);
      current = current.left;
    } else {
      if (s.length) {
        const node = s.pop();
        console.log(node.value);
        current = node.right;
      } else {
        done = true;
      }
    }
  }
};

BinaryTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this._root);

  function traversePostOrderHelper(node) {
    if (!node) return;

    if (node.left) traversePostOrderHelper(node.left);
    if (node.right) traversePostOrderHelper(node.right);
    console.log(node.value);
  }
};

BinaryTree.prototype.traversePostOrderIterative = function () {
  const s1 = [],
    s2 = [],
    root = this._root;

  if (!root) return;

  s1.push(root);

  while (s1.length) {
    const node = s1.pop();
    s2.push(node);
    if (node.right) s1.push(node.right);
    if (node.left) s1.push(node.left);
  }

  while (s2.length) {
    const node = s2.pop();
    console.log(node.value);
  }
};

BinaryTree.prototype.traverseLevelOrder = function () {
  const nodeStack = [];

  if (!this._root) return;

  nodeStack.push(this._root);

  while (nodeStack.length) {
    const node = nodeStack.shift();

    console.log(node.value);

    if (node.left) nodeStack.push(node.left);
    if (node.right) nodeStack.push(node.right);
  }
};

const binaryTree = new BinaryTree(tree);
console.log("traversePreOrder");
binaryTree.traversePreOrder();
console.log("traversePreOrderIterative");
binaryTree.traversePreOrderIterative();
console.log("traverseInOrder");
binaryTree.traverseInOrder();
console.log("traverseInOrderIterative");
binaryTree.traverseInOrderIterative();
console.log("traversePostOrder");
binaryTree.traversePostOrder();
console.log("traversePostOrderIterative");
binaryTree.traversePostOrderIterative();
console.log("traverseLevelOrder");
binaryTree.traverseLevelOrder();

// 15:00 - a lot of mistakes
// 21:12 - 1 mistake
// 22:29 - 3 mistakes
