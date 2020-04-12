"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Binary Search Tree
//Node for the Tree
var Node = function Node(data) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.left = left;
  this.right = right;
}; //Binary Seach Tree(BST)


var BinarySearchTree = /*#__PURE__*/function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    this.root = null;
    this.removeNode = this.removeNode.bind(this);
  }

  _createClass(BinarySearchTree, [{
    key: "add",
    value: function add(data) {
      var node = this.root;

      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        var searchTree = function searchTree(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        }; //calling the inner function to serach and add node to the tree


        return searchTree(node);
      }
    }
  }, {
    key: "findMin",
    value: function findMin() {
      var current = this.root;

      if (current) {
        while (current.left !== null) {
          current = current.left;
        }

        return current.data;
      }

      return null;
    }
  }, {
    key: "findMax",
    value: function findMax() {
      var current = this.root;

      if (current) {
        while (current.right !== null) {
          current = current.right;
        }

        return current.data;
      }

      return null;
    }
  }, {
    key: "find",
    value: function find(data) {
      var current = this.root;

      while (current.data !== data) {
        if (current === null) return null;

        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      return current;
    }
  }, {
    key: "isPresent",
    value: function isPresent(data) {
      var current = this.root;

      while (current) {
        //Break condition for loop
        if (data === current.data) {
          return true;
        }

        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      return false;
    }
  }, {
    key: "removeNode",
    value: function removeNode(node, data) {
      if (node === null) return null;

      if (node.data === data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        if (node.left !== null && node.right !== null) {
          var tempNode = node.right;

          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }

          node.data = tempNode.data;
          node.right = this.removeNode(node.right, tempNode.data);
        }
      } else if (node.data < data) {
        node.right = this.removeNode(node.right, data);
      } else {
        node.left = this.removeNode(node.left, data);
      }

      return node;
    }
  }, {
    key: "remove",
    value: function remove(data) {
      this.root = this.removeNode(this.root, data);
    }
  }]);

  return BinarySearchTree;
}();

var t1 = new BinarySearchTree();
t1.add(2);
t1.add(5);
t1.add(1);
t1.add(17);
t1.add(15);
t1.add(4);
t1.add(2);
console.log('minimum', t1.findMin());
console.log('maximum', t1.findMax());
t1.remove(1);
t1.remove(5);
console.log('minimum', t1.findMin());
console.log('isPresent(1)', t1.isPresent(1));
console.log('isPresent(5)', t1.isPresent(5));
console.log('isPresent(17)', t1.isPresent(17));
console.log('find(2)', t1.find(2));
"use strict";
