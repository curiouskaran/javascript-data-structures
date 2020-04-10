//Queue

class Queue {
  constructor() {
    this.isEmpty = this.isEmpty.bind(this);
  }

  #collection = [];

  //Displays the values in the queue
  print() {
    console.log(this.#collection);
  }

  //Adds value in the queue
  enqueue(value) {
    this.#collection.push(value);
  }

  //Removes the value from the queue
  dequeue() {
    if(!this.isEmpty()) return this.#collection.shift();
    return false;
  }

  //Give sthe front of the queue
  front() {
    return this.#collection[0];
  }

  //Determines the size of the queue
  size() {
    return this.#collection.length;
  }

  //Checks if queue is empty
  isEmpty() {
    return this.#collection.length === 0;
  }
}

const q = new Queue();
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

class PriorityQueue {
  #collection = [];

  print() {
    console.log(this.#collection);
  }

  enqueue(value) {
    if()
  }
}
