// Uses:
//   Function Invocation
//   Undo-Redo (Cmd + z)
//   Routing the history object (Reactjs routing)

// stack.push(5);
// stack.push(8);
// stack.push(2);
// stack.push(1);
// stack.push(3);
// i.e. -> dynamic-f(3) - 1 - 2 - 8 - 5(l)

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(val) {
//     const newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       const temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }
//   pop() {
//     if (!this.first) return null;
//     const temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// Questions

// 1. Implement minEle in stack
class Node {
  constructor(value, minVal) {
    this.value = value;
    this.next = null;
    this.min = minVal;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    if(!this.first){
      const minVal = val;
      const newNode = new Node(val, minVal);
      this.first = newNode;
      this.last = newNode;
    } else {
      const minVal = this.first.min > val ? val : this.first.min;
      // console.log({minVal, crrFirstMinVal: this.first.min, val});
      const newNode = new Node(val, minVal);
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    // console.log({first: this.first, last: this.last});
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.size--;
    return temp.value;
  }
  minEle() {
    return this.first?.min ?? 0;
  }
}

const stack = new Stack();
stack.push(5); stack.push(8); stack.push(2); stack.push(1); stack.push(3);

console.log(stack.minEle(), "InitialminVal");

stack.pop(); console.log(stack.minEle(), "minVal");
stack.pop(); console.log(stack.minEle(), "minVal");
stack.pop(); console.log(stack.minEle(), "minVal");
stack.pop(); console.log(stack.minEle(), "minVal");
stack.pop(); console.log(stack.minEle(), "minVal");
stack.pop(); console.log(stack.minEle(), "minVal");

// 2. How to Sort a Stack using Recursion
function sortStack(s) {
  // If the stack is empty or has only one element, return
  if (s.length <= 1) {
    return;
  }
 
  // Remove the top element of the stack
  let x = s.pop();
 
  // Sort the remaining elements in the stack using recursion
  sortStack(s);
 
  // Create two auxiliary stacks
  let tempStack = [];
 
  // Move all elements that are greater than x from the main stack to the tempStack
  while (s.length !== 0 && s[s.length - 1] > x) {
    tempStack.push(s.pop());
  }
 
  // Push x back into the main stack
  s.push(x);
 
  // Move all elements from tempStack back to the main stack
  while (tempStack.length !== 0) {
    s.push(tempStack.pop());
  }
}
 
// Create a stack
let s = [];
 
// Push elements into the stack
s.push(34);
s.push(3);
s.push(31);
s.push(98);
s.push(92);
s.push(23);
 
// Sort the stack
sortStack(s);


module.export = {Stack}

