// i.e. -> f(3) - 1 - 2 - 8 - 5(l)-dynamic
const Stack = require("./stack");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const queue = new Queue();

// Questions

// 1. implement queue using only one stack javascript // Advance level
// Steps -
// - pop out each element and then re-add/push the poped element but not the last one
// - base case if element is the last one then stop recursion and return that element
class QueueWithStack {
  constructor() {
    this.stack = new Stack();
  }

  // Enqueue operation
  enqueue(val) {
    this.stack.push(val);
  }

  // Dequeue operation
  dequeue() {
    // If the stack is empty, the queue is empty
    if (this.stack.size === 0) {
      return null;
    }

    //Base Case
    if (this.stack.size === 1) {
      return this.stack.pop();
    }

    const item = this.stack.pop();
    // console.log({item, stack: this.stack});

    const result = this.dequeue();

    this.stack.push(item);

    return result;
  }
}

// Example usage:
// const queue = new QueueWithStack();

// 2. implement queue only two stack
class QueueUsingTwoStacks {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(data) {
    this.stack1.push(data);
  }
  dequeue() {
    // if both stacks are empty, return undefined 
    if (this.stack1.size === 0 && this.stack2.size === 0) 
    return undefined;

    //if stack2 is empty, pop all elements from stack1 to stack? till stack1 is empty
    //because till now no dequeue operation is done and so we can add all queued val into stack2 
    //until and unless stack2 size isn't zero just pop from it because in between dequeue their maybe queueing
    //so you want to remove the present ele from stack2 and then refill it after stack2 size is zero 
    if (this.stack2.size === 0) {
      while (this.stack1.size !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    
    // pop and return the element from stack 2 
    return this.stack2.pop();
  }
}


// // Example usage:
// const queue = new QueueUsingTwoStacks();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log(queue.dequeue()); // Output: 1
// console.log(queue.dequeue()); // Output: 2

// queue.enqueue(4);
// console.log(queue.dequeue()); // Output: 3
// console.log(queue.dequeue()); // Output: 4
// console.log(queue.dequeue()); // Output: null (queue is empty)

module.exports = Queue;