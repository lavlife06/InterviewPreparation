// Note
// - BFS should not be used when their is wide spread of branches because it will hold so much memory in queue
// - DFSInOrder can be used to kind of sort the tree - [3, 6, 8, 10, 15, 20]
// - DFSPreOrder can be used to clone/recreate the tree - [10, 6, 3, 8, 15, 20]

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    const arr = [];
    const helper = (crrNode) => {
      arr.push(crrNode.value);
      if (crrNode.left) helper(crrNode.left);
      if (crrNode.right) helper(crrNode.right);
    };
    helper(this.root);
    console.log(arr);
    return arr;
  }
  DFSPostOrder() {
    const arr = [];
    const helper = (crrNode) => {
      if (crrNode.left) helper(crrNode.left);
      if (crrNode.right) helper(crrNode.right);
      arr.push(crrNode.value);
    };
    helper(this.root);
    console.log(arr);
    return arr;
  }
  DFSInOrder() {
    const arr = [];
    const helper = (crrNode) => {
      if (crrNode.left) helper(crrNode.left);
      arr.push(crrNode.value);
      if (crrNode.right) helper(crrNode.right);
    };
    helper(this.root);
    console.log(arr);
    return arr;
  }
}

//      10
//   6     15
// 3  8      20

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// tree.BFS();
// tree.DFSPreOrder(); // [10, 6, 3, 8, 15, 20]
// tree.DFSPostOrder(); // [3, 8, 6, 20, 15, 10]
tree.DFSInOrder(); // [3, 6, 8, 10, 15, 20]
