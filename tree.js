/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
      if (!this.root) return 0;

      let sum = this.root.val
      function sumLoop(node) {
        // for each child, add that child's value to the sum
        for (let child of node.children) {
          sum += child.val;
          // if the child has children, use this function recursively for that child
          if (child.children.length > 0) {
            sumLoop(child);
          }
        }
      }
      sumLoop(this.root);
      return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    // if the root value is divisible by 2, return 1, else return 0
    let evens = this.root.val % 2 === 0 ? 1 : 0;

    function counter(node) {
      for (let child of node.children) {
        //if the child is divisble by 2, add to the evens count
        if (child.val % 2 == 0) evens ++;
        // if the child has children, go through this again recursively
        if (child.children.length > 0) {
          counter(child);
        }
      }
    }
    counter(this.root);
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
      if (!this.root) return 0;
    // if the root value is greater than lowerBound, return 1, if not, return 0
      let count = this.root.val > lowerBound ? 1 : 0;

      function counter(node) {
        for (let child of node.children) {
          if (child.val > lowerBound) count++;
          if (child.children.length > 0) {
            counter(child);
          }
        }
      }
      counter(this.root);
      return count;
    }
}

module.exports = { Tree, TreeNode };
