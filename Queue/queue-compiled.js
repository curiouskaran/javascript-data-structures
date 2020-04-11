"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

//Queue
var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    _collection.set(this, {
      writable: true,
      value: []
    });

    this.isEmpty = this.isEmpty.bind(this);
  }

  _createClass(Queue, [{
    key: "print",
    //Displays the values in the queue
    value: function print() {
      console.log(_classPrivateFieldGet(this, _collection));
    } //Adds value in the queue

  }, {
    key: "enqueue",
    value: function enqueue(value) {
      _classPrivateFieldGet(this, _collection).push(value);
    } //Removes the value from the queue

  }, {
    key: "dequeue",
    value: function dequeue() {
      if (!this.isEmpty()) return _classPrivateFieldGet(this, _collection).shift();
      return false;
    } //Give sthe front of the queue

  }, {
    key: "front",
    value: function front() {
      return _classPrivateFieldGet(this, _collection)[0];
    } //Determines the size of the queue

  }, {
    key: "size",
    value: function size() {
      return _classPrivateFieldGet(this, _collection).length;
    } //Checks if queue is empty

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return _classPrivateFieldGet(this, _collection).length === 0;
    }
  }]);

  return Queue;
}();

var _collection = new WeakMap();

var q = new Queue();
q.enqueue('k');
q.enqueue('a');
q.enqueue('r');
q.enqueue('a');
q.enqueue('n');
q.print();
console.log(q.size());
console.log(q.isEmpty());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());

var PriorityQueue = /*#__PURE__*/function () {
  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    _collection2.set(this, {
      writable: true,
      value: []
    });

    this.isEmpty = this.isEmpty.bind(this);
  }

  _createClass(PriorityQueue, [{
    key: "print",
    value: function print() {
      console.log(_classPrivateFieldGet(this, _collection2));
    }
  }, {
    key: "enqueue",
    value: function enqueue(element) {
      if (this.isEmpty()) {
        _classPrivateFieldGet(this, _collection2).push(element);
      } else {
        var added = false;

        for (var i = 0; i < _classPrivateFieldGet(this, _collection2).length; i++) {
          if (element[1] < _classPrivateFieldGet(this, _collection2)[i][1]) {
            _classPrivateFieldGet(this, _collection2).splice(i, 0, element);

            added = true;
            break;
          }
        }

        if (!added) {
          _classPrivateFieldGet(this, _collection2).push(element);
        }
      }
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (!this.isEmpty()) return _classPrivateFieldGet(this, _collection2).shift();
      return false;
    }
  }, {
    key: "front",
    value: function front() {
      return _classPrivateFieldGet(this, _collection2)[0];
    }
  }, {
    key: "size",
    value: function size() {
      return _classPrivateFieldGet(this, _collection2).length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return _classPrivateFieldGet(this, _collection2).length === 0;
    }
  }]);

  return PriorityQueue;
}();

var _collection2 = new WeakMap();

var pq = new PriorityQueue();
pq.enqueue(['karan', 3]);
pq.enqueue(['khushboo', 3]);
pq.enqueue(['papa', 2]);
pq.enqueue(['mummy', 2]);
pq.enqueue(['amma', 1]);
pq.enqueue(['baba', 1]);
pq.print();
console.log(pq.size());
console.log(pq.isEmpty());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.isEmpty());
"use strict";
