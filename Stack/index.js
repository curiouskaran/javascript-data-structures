// Stacks

//Functions to push, pop, peek, length

//Using arrays as Stacks taking pallidrome as an example
let letters = [];
let word = 'karan';
let rword = '';

//pushing letters into stack
for(let i=0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop letters from Stacks
for(let i=0; i < word.length; i++) {
  rword+=letters.pop();
}

if(word === rword) {
  console.log(`${word} is a pallindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}

// Create a Stack

class Stack {

  #count = 0;
  #storage = {};

  push(value) {
    this.#storage[this.#count] = value;
    this.#count++;
  }

  pop() {
    if(this.#count === 0) return undefined;

    this.#count--;
    let result = this.#storage[this.#count];
    delete this.#storage[this.#count];

    return result;
  }

  size() {
    return this.#count;
  }

  peek() {
    return this.#storage[this.#count - 1];
  }
}

let myStack = new Stack;
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
