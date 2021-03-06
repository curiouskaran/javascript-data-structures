//Binary Search Tree

//Node for the Tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//Binary Seach Tree(BST)
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.removeNode = this.removeNode.bind(this);
    this.findMaxHeight = this.findMaxHeight.bind(this);
    this.findMinHeight = this.findMinHeight.bind(this);
  }

  add(data) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(data);
      return
    } else {
      const searchTree = (node) => {
        if(data < node.data) {
          if(node.left === null) {
            node.left = new Node(data);
            return
          } else if(node.left !== null) {
            return searchTree(node.left);
          }
        } else if(data > node.data) {
          if(node.right === null) {
            node.right = new Node(data);
            return;
          } else if(node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      //calling the inner function to serach and add node to the tree
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;

    if(current) {
      while(current.left !== null) current = current.left;

      return current.data;
    }
    return null;

  }

  findMax() {
    let current = this.root;

    if(current) {
      while(current.right !== null) current = current.right;

      return current.data;
    }
    return null;
  }

  find(data) {
    let current = this.root;

    while(current && current.data !== data) {
      if(current === null) return null;

      if(data < current.data) {
        current = current.left
      } else {
        current = current.right;
      }
    }

    return current;
  }

  isPresent(data) {
    let current = this.root;

    while(current) {
      //Break condition for loop
      if(data === current.data) {
        return true;
      }

      if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  removeNode(node, data) {
    if(node === null) return null;

    if(node.data === data) {
      if(node.left === null && node.right === null) {
        return null;
      }

      if(node.left === null) {
        return node.right;
      }

      if(node.right === null) {
        return node.left;
      }

      if(node.left !== null && node.right !== null) {
        let tempNode = node.right;

        while(tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
      }
    } else if (node.data < data) {
      node.right =  this.removeNode(node.right, data);
    } else {
      node.left = this.removeNode(node.left, data);
    }

    return node;
  }

  remove(data) {
    this.root = this.removeNode(this.root,data);
  }

  findMinHeight(node = this.root) {
    if(node === null) return -1;

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if(left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if(node === null) return -1;

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if(left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalancedTree() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }

  //<Left><Root><Right> type of depthFirstTraversal
  inOrder() {
    if(this.root === null) {
      return null;
    } else {
      let result = [];

      const traverseInOrder = (node) => {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);

      return result;
    }
  }

  //<Root><Left><Right> type of depthFirstTraversal
  preOrder() {
    if(this.root === null) {
      return null;
    } else {
      let result = [];

      const traversePreOrder = (node) => {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);

      return result;
    }
  }

  //<Left><Right><Root> type of depthFirstTraversal
  postOrder() {
    if(this.root === null) {
      return null;
    } else {
      let result = [];

      const traversePostOrder = (node) => {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);

      return result;
    }
  }

  //level by level or layer by layer type of breadthFirstTraversal
  levelOrder() {
    if(this.root === null) {
      return null;
    } else {
      let result = [];
      let q = [];

      q.push(this.root);
      while(q.length > 0) {
        let node = q.shift();
        result.push(node.data);
        if(node.left !== null) {
          q.push(node.left);
        }
        if(node.right !== null) {
          q.push(node.right);
        }
      }
      return result;
    }
  }
}

const t1 = new BinarySearchTree();
t1.add(9);
t1.add(4);
t1.add(17);
t1.add(3);
t1.add(6);
t1.add(22);
t1.add(5);
t1.add(7);
t1.add(20);
console.log('minimum',t1.findMin());
console.log('maximum',t1.findMax());
t1.remove(1);
t1.remove(5);
console.log('minimum',t1.findMin());
console.log('isPresent(1)',t1.isPresent(1));
console.log('isPresent(5)',t1.isPresent(5));
console.log('isPresent(17)',t1.isPresent(17));
console.log('find(1)',t1.find(1));
console.log('max height',t1.findMaxHeight());
console.log('min height',t1.findMinHeight());
console.log('is balanced',t1.isBalancedTree());
t1.add(10);
console.log('is balanced',t1.isBalancedTree());
console.log('in-order traversal',t1.inOrder());
console.log('pre-order traversal',t1.preOrder());
console.log('post-order traversal',t1.postOrder());
console.log('level-order traversal',t1.levelOrder());
