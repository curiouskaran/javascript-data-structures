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

    while(current.data !== data) {
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
}

const t1 = new BinarySearchTree();
t1.add(2);
t1.add(5);
t1.add(1);
t1.add(17);
t1.add(15);
t1.add(4);
t1.add(2);
console.log('minimum',t1.findMin());
console.log('maximum',t1.findMax());
t1.remove(1);
t1.remove(5);
console.log('minimum',t1.findMin());
console.log('isPresent(1)',t1.isPresent(1));
console.log('isPresent(5)',t1.isPresent(5));
console.log('isPresent(17)',t1.isPresent(17));
console.log('find(2)',t1.find(2));
