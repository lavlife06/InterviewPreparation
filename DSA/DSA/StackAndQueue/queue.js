const Stack = require("./stack");
// i.e. -> f(3) - 1 - 2 - 8 - 5(l)-dynamic

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
    if (this.stack1.size() === 0 && this.stack2.size () === 0) 
    return undefined;

    //if stack2 is empty, pop all elements from stack1 to stack? till stack1 is empty

    if (this.stack2.size() === 0) {
      while (this.stack1.size() !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    
    // pop and return the element from stack 2 
    return this.stack2.pop ();
  }
}

// Questions

// 1. implement queue using only one stack javascript // Advance level
class QueueWithStack {
  constructor() {
    this.stack = [];
  }

  // Enqueue operation
  enqueue(item) {
    this.stack.push(item);
  }

  // Dequeue operation
  dequeue() {
    // If the stack is empty, the queue is empty
    if (this.stack.length === 0) {
      return null;
    }

    // Pop the top element
    const item = this.stack.pop();

    // If it was the last element, return it
    if (this.stack.length === 0) {
      return item;
    }

    // Recursively dequeue the rest of the elements
    const dequeuedItem = this.dequeue();

    // Enqueue the current item after the rest of the elements
    this.enqueue(item);

    return dequeuedItem;
  }

  // Helper function to check if the queue is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Helper function to get the size of the queue
  size() {
    return this.stack.length;
  }
}

// Example usage:
const queue = new QueueWithStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

queue.enqueue(4);
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4
console.log(queue.dequeue()); // Output: null (queue is empty)