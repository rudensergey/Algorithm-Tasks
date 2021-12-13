// ---------------------------------------------------------->>

const createTreeNode = (value, left = null, right = null) => ({
  value: value,
  left,
  right,
});

const tree = createTreeNode(42, createTreeNode(41, createTreeNode(10), createTreeNode(40)), createTreeNode(50, createTreeNode(45), createTreeNode(75)));

function BinaryTree(root) {
  this._root = root;
}

// traverse pre order
// ---------------------------------------------------------->>

BinaryTree.prototype.traversePreOrder = function () {
  traversePreOrderHelper(this._root);

  function traversePreOrderHelper(node) {
    if (!node) return;

    console.log(node.value);

    traversePreOrderHelper(node.left);
    traversePreOrderHelper(node.right);
  }
};

// traverse pre order iterative
// ---------------------------------------------------------->>

BinaryTree.prototype.traversePreOrderItearaive = function () {
  const nodeStack = [];

  nodeStack.push(this._root);

  while (nodeStack.length) {
    const node = nodeStack.pop();

    console.log(node?.value);

    if (node?.right) nodeStack.push(node.right);
    if (node?.left) nodeStack.push(node.left);
  }
};

// traverse in order
// ---------------------------------------------------------->>

BinaryTree.prototype.traverseInOrder = function () {
  traverseInOrderHelper(this._root);

  function traverseInOrderHelper(node) {
    if (!node) return;

    traverseInOrderHelper(node.left);
    console.log(node.value);
    traverseInOrderHelper(node.right);
  }
};

// traverse in order iterative
// ---------------------------------------------------------->>

BinaryTree.prototype.traverseInOrderItearaive = function () {
  let current = this._root,
    s = [],
    done = false;

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

// traverse post order
// ---------------------------------------------------------->>

BinaryTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this._root);

  function traversePostOrderHelper(node) {
    if (!node) return;

    traversePostOrderHelper(node.left);
    traversePostOrderHelper(node.right);
    console.log(node.value);
  }
};

// traverse post order iterative
// ---------------------------------------------------------->>

BinaryTree.prototype.traversePostOrderIterative = function () {
  const s1 = [],
    s2 = [];

  s1.push(this._root);

  while (s1.length) {
    const node = s1.pop();
    s2.push(node);

    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }

  while (s2.length) {
    const node = s2.pop();
    console.log(node.value);
  }
};

// traverse level order
// ---------------------------------------------------------->>

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

// instert
// ---------------------------------------------------------->>

BinaryTree.prototype.insert = function (value) {
  const thisNode = { left: null, right: null, value: value };

  if (!this._root) {
    this._root = thisNode;
  } else {
    let currentRoot = this._root;
    while (true) {
      if (currentRoot.value > value) {
        //let's increment if it's not a null and insert if it is a null”
        if (currentRoot.left) {
          currentRoot = currentRoot.left;
        } else {
          currentRoot.left = thisNode;
          break;
        }
      } else if (currentRoot.value < value) {
        //let's increment if it's not a null and insert if it is a null”
        if (currentRoot.right) {
          currentRoot = currentRoot.right;
        } else {
          currentRoot.right = thisNode;
          break;
        }
      } else {
        // nodes are equal
        break;
      }
    }
  }
};

// deletion
// ---------------------------------------------------------->>

BinaryTree.prototype.remove = function (value) {
  return deleteRecursively(this._root, value);

  function deleteRecursively(root, value) {
    if (!root) {
      return null;
    } else if (value < root.value) {
      root.left = deleteRecursively(root.left, value);
    } else if (value > root.value) {
      root.right = deleteRecursively(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        root = root.right;
        return root;
      } else if (!root.right) {
        root = root.left;
        return root;
      } else {
        let temp = findMin(root.right);
        root.value = temp.value;
        root.right = deleteRecursively(root.right, temp.value);
        return root;
      }
    }
    return root;
  }

  function findMin(root) {
    while (root.left) {
      root = root.left;
    }
    return root;
  }
};

// search
// ---------------------------------------------------------->>

BinaryTree.prototype.search = function (value) {
  let currentRoot = this._root;
  let found = false;

  while (currentRoot) {
    if (currentRoot.value > value) {
      currentRoot = currentRoot.left;
    } else if (currentRoot.value < value) {
      currentRoot = currentRoot.right;
    } else {
      found = true;
      break;
    }
  }

  return found;
};

const binaryTree = new BinaryTree(tree);
binaryTree.insert(39);
binaryTree.traverseInOrder();
console.log(binaryTree.search(39));
console.log(binaryTree.search(99));
