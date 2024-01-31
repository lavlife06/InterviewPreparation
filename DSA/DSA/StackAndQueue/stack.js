// i.e. -> dynamic-f(3) - 1 - 2 - 8 - 5(l) -- which will be popping out will be first
// Uses:
//   Function Invocation
//   Undo-Redo (Cmd + z)
//   Routing the history object (Reactjs routing)
const Queue = require("./queue");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  } 
}

// const stack = new Stack();
// stack.push(5); stack.push(8); stack.push(2); stack.push(1); stack.push(3);
// console.log(stack.pop()); console.log(stack.pop()); console.log(stack.pop()); console.log(stack.pop()); console.log(stack.pop()); console.log(stack.pop());

// Questions
// 1. Implement minEle in stack
// class Node {
//   constructor(value, minVal) {
//     this.value = value;
//     this.next = null;
//     this.min = minVal;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(val) {
//     if(!this.first){
//       const minVal = val;
//       const newNode = new Node(val, minVal);
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       const minVal = this.first.min > val ? val : this.first.min;
//       // console.log({minVal, crrFirstMinVal: this.first.min, val});
//       const newNode = new Node(val, minVal);
//       const temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     // console.log({first: this.first, last: this.last});
//     return ++this.size;
//   }
//   pop() {
//     if (!this.first) return null;
//     const temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     temp.size--;
//     return temp.value;
//   }
//   minEle() {
//     return this.first?.min ?? 0;
//   }
// }

// const stack = new Stack();
// stack.push(5); stack.push(8); stack.push(2); stack.push(1); stack.push(3);

// console.log(stack.minEle(), "InitialminVal");

// stack.pop(); console.log(stack.minEle(), "minVal");
// stack.pop(); console.log(stack.minEle(), "minVal");
// stack.pop(); console.log(stack.minEle(), "minVal");
// stack.pop(); console.log(stack.minEle(), "minVal");
// stack.pop(); console.log(stack.minEle(), "minVal");
// stack.pop(); console.log(stack.minEle(), "minVal");

// 2. How to Sort a Stack using Recursion
// Step -
// - designing a recursive algorithm that repeatedly removes elements from the original stack and inserts them back in sorted order

// { stackBB: [ 34 ] }
// { stackB: [ 3 ], tempStackB: [ 34 ] }
// { stackA: [ 3, 34 ] }
// { stackBB: [ 3, 34 ] }
// { stackB: [ 3, 31 ], tempStackB: [ 34 ] }
// { stackA: [ 3, 31, 34 ] }
// { stackBB: [ 3, 31, 34 ] }
// { stackB: [ 3, 31, 34, 98 ], tempStackB: [] }
// { stackA: [ 3, 31, 34, 98 ] }
// { stackBB: [ 3, 31, 34, 98 ] }
// { stackB: [ 3, 31, 34, 92 ], tempStackB: [ 98 ] }
// { stackA: [ 3, 31, 34, 92, 98 ] }
// { stackBB: [ 3, 31, 34, 92, 98 ] }
// { stackB: [ 3, 23 ], tempStackB: [ 98, 92, 34, 31 ] }
// { stackA: [ 3, 23, 31, 34, 92, 98 ] }

// const s = [];

// const sortStack = (stack) => {
//   //Base Case
//   if (stack.length <= 1) {
//     return;
//   }

//   const item = stack.pop();

//   sortStack(stack);

//   const tempStack = [];

//   console.log({stackBB: stack});

//   // Move all elements that are greater than x from the main stack to the tempStack
//   while (stack.length !== 0 && stack[stack.length - 1] > item) {
//     tempStack.push(stack.pop());
//   }

//   stack.push(item);

//   console.log({stackB: stack, tempStackB: tempStack});

//   while (tempStack.length !== 0) {
//     stack.push(tempStack.pop());
//   }
//   console.log({stackA: stack});
//   return stack;
// }

// // // Push elements into the stack
// s.push(34);
// s.push(3);
// s.push(31);
// s.push(98);
// s.push(92);
// s.push(23);
// console.log(sortStack(s));
 
// // Sort the stack
// sortStack(s);

// 3. Next Greater Value solution
//Rule - Smaller or equal elements push to top of stack and pop it when found top stack's element < current arr element and keep on poping until the situation conflicts/reverse 
// const profitsCalculation = (arr) => {
//   const s = [0]; // store indexes
//   const profitDays = [];

//   for (let i = 1; i < arr.length; i++) {
//     const crrArrEleValue = arr[i];
//     let stacksTopEle = s[s.length - 1]; //index of arr
//     let stacksTopEleValue = arr[stacksTopEle];

//     while (s.length && stacksTopEleValue < crrArrEleValue) { // this means the current arr element is continuosly greater then the stoack top most low element and so we keep popping and looping till we find greater one
//       profitDays[stacksTopEle] = i - stacksTopEle;
//       s.pop();

//       //updating to keep on looping
//       stacksTopEle = s[s.length - 1]; 
//       stacksTopEleValue = arr[stacksTopEle];      
//     }

//     s.push(i); //all the smaller values are poped out and now the current greater one is to be added
//   } 

//   while (s.length) {
//     profitDays[s.pop()] = -1;
//   }

//   return profitDays;
// }

// console.log(profitsCalculation([13, 7, 6, 12, 10])); //[ -1, 2, 1, -1, -1 ]
// console.log(profitsCalculation([10, 15, 5, 20, 25, 10, 30])); //[1, 2, 1, 1, 2, 1, -1]
// console.log(profitsCalculation([10, 9, 6, 5, 4, 3, 20])); //[6, 5, 4, 3, 2, 1, -1]

class StackUsingQueue {
  constructor() {
    this.queue = new Queue();
  }

  push(val) {
    this.queue.enqueue(val);
  }

  pop() {
    const size = this.queue.size;

    if (size === 0) {
      return null;
    }

    // Move all elements except the last one to the back of the queue
    for (let i = 0; i < size - 1; i++) {
      const item = this.queue.dequeue();
      this.queue.enqueue(item);
    }

    // Pop the last element (the one at the front)
    return this.queue.dequeue();
  }
}

const stack = new StackUsingQueue();
stack.push(5); stack.push(8); stack.push(2); stack.push(1); 
console.log(stack.pop()); 
stack.push(3);
console.log(stack.pop()); console.log(stack.pop()); console.log(stack.pop()); console.log(stack.pop()); console.log(stack.pop());

module.exports = Stack