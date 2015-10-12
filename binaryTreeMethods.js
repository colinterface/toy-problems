function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.findMax = function() {
  if (this.left && this.right) {
    return Math.max(this.value, this.left.findMax(), this.right.findMax());
  } else if (this.left) {
    return Math.max(this.value, this.left.findMax());
  } else if (this.right) {
    return Math.max(this.value, this.right.findMax());
  } else {
    return this.value;
  }
};

var root = new BinaryTreeNode(10);
root.left = new BinaryTreeNode(15);
var node = new BinaryTreeNode(6);
node.right = new BinaryTreeNode(16);
root.right = node;

console.log(root.findMax());
