// const arr = [5, 10, 4, 6, 5];

const arr = [
  { name: 'lav', age: 54 },
  { name: 'karan', age: 34 },
  { name: 'lav1', age: 54 },
  { name: 'lav2', age: 44 },
  { name: 'lav3', age: 34 },
  { name: 'lav4', age: 52 },
];

//  acc = accumulator and  curr =  current element

//  Do total of ages
const res = arr.reduce((acc, crr) => {
  return acc + crr.age;
}, 0);
console.log(res);

// Array.prototype.myreduce = function (fn, initial) {
//     for (let ele of this) {
//         initial = fn(initial || 0, ele);
//     }
//     return initial;
// };

// let obj = arr.myreduce((acc, curr) => {
//     acc[curr.age] = (acc[curr.age] || 0) + 1;
//     return acc;
// }, {});

//  arr = [1,4,5,6,4]
// let newarr = arr.myreduce((acc, curr) => acc + curr);

// console.log(newarr);

// console.log(obj);

// const arr = [
//     { name: "lav", age: 54 },
//     { name: "karan", age: 34 },
//     { name: "lav1", age: 54 },
//     { name: "lav2", age: 44 },
//     { name: "lav3", age: 34 },
//     { name: "lav4", age: 52 },
// ];

// const filterFunc = (ele) => {
//     return true;
// };
// let obj = {};

// arr.map((item) => {
//     obj[item.age] = (obj[item.age] || 0) + 1;
//     return item;
// });

// let obj = arr.reduce((acc, curr) => {
//     acc[curr.age] = (acc[curr.age] || 0) + 1;
//     return acc;
// }, {});

// let newarr = arr.filter((item) => {
//   if (item.age > 50) {
//     return true;
//   }
// });
// console.log(newarr);

// Pollyfill for foreach
// Array.prototype.myforeach = function (func) {
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     func(element, i);
//   }
// };
// [1, 2, 3, 4, 5].myforeach((item, index) => {
//   console.log(item, 'item', index);
// });

// Array.prototype.multiFilter = function (func) {
//   const recursionFunction = (newarr) => {
//     const localarr = [];
//     for (let i = 0; i < newarr.length; i++) {
//       const element = newarr[i];
//       if (typeof element === 'object' && Array.isArray(element)) {
//         localarr.push(recursionFunction(element));
//       } else {
//         const res = func(element);
//         if (res) {
//           localarr.push(element);
//         }
//       }
//     }
//     return localarr;
//   };
//   return recursionFunction(this);
// };

// const arr = [[1, [2, [3, 'foo', { a: 1, b: 2 }]], 'bar']];
// const filtered = arr.multiFilter((e) => typeof e === 'string');
// console.log(filtered);
// // Output:
// [[[['foo']], 'bar']];

// chop array into some lengths

// Array.prototype.chopper = function (slicelength) {
//   const arr = [];
//   let localarr = [];
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     console.log(localarr, 'localarr');
//     if (localarr.length === slicelength - 1) {
//       localarr.push(element);
//       arr.push(localarr);
//       localarr = [];
//     } else if (localarr.length < slicelength - 1) {
//       localarr.push(element);
//     }
//   }
//   if (localarr.length > 0) {
//     arr.push(localarr);
//   }
//   return arr;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const output = arr.chopper(4);
// console.log(output);
