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
  constructor() {
    this.isEmpty = this.isEmpty.bind(this);
  }

  #collection = [];

  print() {
    console.log(this.#collection);
  }

  enqueue(element) {
    if(this.isEmpty()) {
      this.#collection.push(element)
    } else {
      let added = false;
      for(let i=0; i < this.#collection.length; i++) {
        if(element[1] < this.#collection[i][1]) {
          this.#collection.splice(i,0,element);
          added = true;
          break;
        }
      }
      if(!added) {
        this.#collection.push(element);
      }
    }
  }

  dequeue() {
    if(!this.isEmpty()) return this.#collection.shift();
    return false;
  }

  front() {
    return this.#collection[0];
  }

  size() {
    return this.#collection.length;
  }

  isEmpty() {
    return this.#collection.length === 0;
  }
}

let pq = new PriorityQueue();
pq.enqueue(['karan',3]);
pq.enqueue(['khushboo',3]);
pq.enqueue(['papa',2]);
pq.enqueue(['mummy',2]);
pq.enqueue(['amma',1]);
pq.enqueue(['baba',1]);
pq.print();
console.log(pq.size());
console.log(pq.isEmpty());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.isEmpty());
