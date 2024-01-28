// S = [10, 15, 5, 20, 25, 10, 30], 
// O = [1, 2, 1, 1, 2, 1, -1]

// S = [10, 9, 6, 5, 4, 3, 20]
// O= [6, 5, 4, 3, 2, 1, -1]

// Steps- 
// - start with two pointers from z
// - until and unless the 2nd pointer hits greater value then the currentdayPricing you keep on moving to that pointer
// - if you get greatee one then we subtract the index between them and that will be output for that current day
// - if not then -1 will be the out put for it

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.start = null;
    this.end = null;
    this.result = [];
  }
  profitsCalculation(arr){
    console.log({arr});
    for(let i = arr.length - 1; i >= 0; i--){
      console.log({i});
      const newNode = new Node(arr[i]);
      if (i === arr.length - 1) {
        this.start = newNode;
        this.end = newNode;
        this.result[i] = -1;
      } else {
        const temp = this.start;
        this.start = newNode;
        this.start.next = temp;
        let crrEle = this.start;
        const crrValue = crrEle.val;
        let count = 0;
        console.log({crrEleOutside: crrEle});
        while (!crrEle.next) {
          console.log({crrEle});
          if (crrValue > crrEle.next.val) {
            crrEle = crrEle.next;
            count++;
          } else {
            count++;
            break;
          }
        }
        this.result[i] = count ?? -1;
      }
      console.log({i, newNode, start: this.start, end: this.end, result: this.result});
    }
    return this.result;
  }
}

const stack = new Stack()
console.log(stack.profitsCalculation([10, 15, 5, 20, 25, 10, 30]));