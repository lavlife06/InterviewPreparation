class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // insert(val) {
  //   const values = this.values;
  //   const bubbleUp = (index, parentIndex) => {
  //     //getting values
  //     const parentValue = values[parentIndex];
  //     const childValue = values[index];

  //     if (childValue > parentValue) {
  //       //swap
  //       values[parentIndex] = childValue;
  //       values[index] = parentValue;

  //       //creating new index
  //       const newIndex = parentIndex;
  //       const newParentIndex = Math.floor((newIndex - 1) / 2);

  //       bubbleUp(newIndex, newParentIndex);
  //     }
  //   };
  //   const index = values.length;
  //   const parentIndex = Math.floor((index - 1) / 2);
  //   values.push(val);
  //   bubbleUp(index, parentIndex);
  //   // console.log(values);
  //   return values;
  // }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    console.log(min);
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values); // [55, 39, 41, 18, 27, 12, 33]
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
// 55
// 41
// 39
// 33
// 27
// 18
// 12
