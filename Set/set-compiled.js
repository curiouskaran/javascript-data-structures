"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

//Sets
var SetCustom = /*#__PURE__*/function () {
  function SetCustom() {
    _classCallCheck(this, SetCustom);

    _collection.set(this, {
      writable: true,
      value: []
    });

    this.has = this.has.bind(this);
    this.values = this.values.bind(this);
  }

  _createClass(SetCustom, [{
    key: "has",
    //Checks if an element is peresent in set or not
    value: function has(element) {
      return _classPrivateFieldGet(this, _collection).indexOf(element) !== -1;
    } //Gives all values stored in set

  }, {
    key: "values",
    value: function values() {
      return _classPrivateFieldGet(this, _collection);
    } //Add new values in the Set

  }, {
    key: "add",
    value: function add(element) {
      if (!this.has(element)) {
        _classPrivateFieldGet(this, _collection).push(element);

        return true;
      }

      return false;
    } //Removes a value from the Set

  }, {
    key: "remove",
    value: function remove(element) {
      if (this.has(element)) {
        var index = _classPrivateFieldGet(this, _collection).indexOf(element);

        _classPrivateFieldGet(this, _collection).splice(index, 1);

        return true;
      }

      return false;
    } //Size of the Set

  }, {
    key: "size",
    value: function size() {
      return _classPrivateFieldGet(this, _collection).length;
    } //This methord will return the union of two Sets

  }, {
    key: "union",
    value: function union(otherSet) {
      var unionSet = new SetCustom();
      var firstSet = this.values();
      var secondSet = otherSet.values();
      firstSet.forEach(function (element) {
        unionSet.add(element);
      });
      secondSet.forEach(function (element) {
        unionSet.add(element);
      });
      return unionSet;
    } //Intersaction of two sets

  }, {
    key: "intersection",
    value: function intersection(otherSet) {
      var intersectionSet = new SetCustom();
      var firstSet = this.values();
      firstSet.forEach(function (element) {
        if (otherSet.has(element)) {
          intersectionSet.add(element);
        }
      });
      return intersectionSet;
    } //Difference of two sets

  }, {
    key: "difference",
    value: function difference(otherSet) {
      var differenceSet = new SetCustom();
      var firstSet = this.values();
      firstSet.forEach(function (element) {
        if (!otherSet.has(element)) {
          differenceSet.add(element);
        }
      });
      return differenceSet;
    } //Checks if the set is complete subset of another set

  }, {
    key: "subset",
    value: function subset(otherSet) {
      var firstSet = this.values();
      return firstSet.every(function (element) {
        return otherSet.has(element);
      });
    }
  }]);

  return SetCustom;
}();

var _collection = new WeakMap();

var setA = new SetCustom();
var setB = new SetCustom();
setA.add('a');
setA.add('b');
setA.add('c');
setB.add('a');
setA.add('a');
console.log(setB.subset(setA));
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
console.log(setA.union(setB).values());
console.log(setA.remove('a'));
console.log(setA.values());
"use strict";
