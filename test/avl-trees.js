function AVLtree(value) {
  this.left = null;
  this.right = null;
  this.value = value;
  this.depth = 1;
}

// set depth
// ---------------------------------------------------------->>

AVLtree.prototype.setDepthBasedOnChildren = function () {
  if (this.node === null) {
    this.depth = 0;
  } else {
    this.depth = 1;
  }

  if (this.left !== null) {
    this.depth = this.left.depth + 1;
  }

  if (this.right !== null && this.depth <= this.right.depth) {
    this.depth = this.right.depth + 1;
  }
};

// rotate
// ---------------------------------------------------------->>

AVLtree.prototype.rotateLL = function () {
  let valueBefore = this.value;
  let rightBefore = this.right;
  this.value = this.left.value;

  this.right = this.left;
  this.left = this.left.left;
  this.right.left = this.right.right;
  this.right.right = rightBefore;
  this.right.value = valueBefore;

  this.right.getDepthBasedOnChildren();
  this.getDepthBasedOnChildren();
};

AVLtree.prototype.rotateRR = function () {
  let valueBefore = this.value;
  let leftBefore = this.left;
  this.value = this.right.value;

  this.left = this.right;
  this.right = this.right.right;
  this.left.right = this.left.left;
  this.left.left = leftBefore;
  this.left.value = valueBefore;

  this.left.getDepthBasedOnChildren();
  this.getDepthBasedOnChildren();
};

// balance
// ---------------------------------------------------------->>

AVLtree.prototype.balance = function () {
  const ldepth = this.left === null ? 0 : this.left.depth;
  const rdepth = this.right === null ? 0 : this.right.depth;

  if (ldepth > rdepth + 1) {
    // LR or LL rotation
    var lldepth = this.left.left == null ? 0 : this.left.left.depth;
    var lrdepth = this.left.right == null ? 0 : this.left.right.depth;

    if (lldepth < lrdepth) {
      // LR rotation consists of a RR rotation of the left child
      this.left.rotateRR(); // plus a LL rotation of this node, which happens anyway
    }
    this.rotateLL();
  } else if (ldepth + 1 < rdepth) {
    // RR or RL rorarion
    var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
    var rldepth = this.right.left == null ? 0 : this.right.left.depth;

    if (rldepth > rrdepth) {
      // RR rotation consists of a LL rotation of the right child
      this.right.rotateLL(); // plus a RR rotation of this node, which happens anyway
    }
    this.rotateRR();
  }
};

const avlTree = new AVLtree(tree);
