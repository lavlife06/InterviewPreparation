let arr = [1, 2, 3, 4, 5];
let obj = {
  name: 'lav',
  age: 21,
  getInfo: function () {
    console.log(this.name, ' has age number ', this.age);
  },
};

let obj2 = {
  name: 'karan',
};

//  Functions for testing
const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

// //////////                                                                                                           MAP

Array.prototype.mymap = function (fn) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    output.push(fn(element));
  }
  return output;
};

// console.log(arr.mymap(circumference));

///////                                                                                                                 Prototype

// // // Never  do this
// obj2.__proto__ = obj;

// //  Result
// obj2.age
// 21

// obj.getInfo()
// lav  has age number  21

// obj2.getInfo()
// karan  has age number  21

// Reason :- It happend due to prototypal inheritence obj2 was able to access obj methods

// ///// Notes
//1) Every object in js has prototype i.e. ->   __proto__
//2) Array - arr.__proto__.__proto__ = object prototype
//3) Func - func.__proto__.__proto__ = object prototype
//4) Object - obj.__proto__.__proto__ = null
// 5) Only constructor has prototype and prototype has every methods and also __proto__ of the uppper chain
//  6) in case of function it created its own constructor and that is why it has prototype
