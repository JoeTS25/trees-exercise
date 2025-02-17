/** BinaryTreeNode: node for a general tree. */

const e = require("express");

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function depth(node) {
      // if there is no node to the left and no node to the right, the depth is 1
      if (node.left === null && node.right === null) return 1;
      // if left node is null but right isn't, return this function recursively to work on the right one
      if (node.left === null) return depth(node.right) + 1;
      // same as above but instead for the left side
      if (node.right === null) return depth(node.left) + 1;
      // return the minimum number between the left and right side
      return (Math.min(depth(node.left), depth(node.right)));
    }
    return depth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function depth(node) {
      // if there is no node to the left and no node to the right, the depth is 1
      if (node.left === null && node.right === null) return 1;
      // if left node is null but right isn't, return this function recursively to work on the right one
      if (node.left === null) return depth(node.right) + 1;
      // same as above but instead for the left side
      if (node.right === null) return depth(node.left) + 1;
      // return the maximum number between the left and right side
      return (Math.max(depth(node.left), depth(node.right)));
    }
    return depth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;
    
    function sumResult(node) {
      if (node === null) return 0;
      const leftSum = sumResult(node.left);
      const rightSum = sumResult(node.right);
      sum = Math.max(sum, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }
    sumResult(this.root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldMakeClosest = currentVal < closest || closest === null;

      if (higherThanLowerBound && shouldMakeClosest) {
        closest = currentVal
      }
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
