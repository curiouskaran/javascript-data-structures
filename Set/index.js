//Sets

class SetCustom {
  constructor() {
    this.has = this.has.bind(this);
    this.values = this.values.bind(this);
  }

  #collection = [];

  //Checks if an element is peresent in set or not
  has(element) {
    return (this.#collection.indexOf(element) !== -1);
  }

  //Gives all values stored in set
  values() {
    return this.#collection;
  }

  //Add new values in the Set
  add(element) {
    if(!this.has(element)) {
      this.#collection.push(element);
      return true;
    }
    return false;
  }

  //Removes a value from the Set
  remove(element) {
    if(this.has(element)) {
      const index = this.#collection.indexOf(element)
      this.#collection.splice(index,1);
      return true;
    }
    return false;
  }

  //Size of the Set
  size() {
    return this.#collection.length;
  }

  //This methord will return the union of two Sets
  union(otherSet) {
    let unionSet = new SetCustom();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(element => {
      unionSet.add(element);
    });
    secondSet.forEach(element => {
      unionSet.add(element);
    });

    return unionSet;
  }

  //Intersaction of two sets
  intersection(otherSet) {
    let intersectionSet = new SetCustom();
    const firstSet = this.values();

    firstSet.forEach(element => {
      if(otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  }

  //Difference of two sets
  difference(otherSet) {
    let differenceSet = new SetCustom();
    const firstSet = this.values();

    firstSet.forEach(element => {
      if(!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  }

  //Checks if the set is complete subset of another set
  subset(otherSet) {
    const firstSet = this.values();

    return firstSet.every((element) => {
      return otherSet.has(element);
    })
  }
}

let setA = new SetCustom();
let setB = new SetCustom();

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
