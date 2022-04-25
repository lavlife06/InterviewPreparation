// async function a() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
// a(); // 5, 5 times
// async function a() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
// a(); // correct
// async function a() {
//   for (var i = 0; i < 5; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, 1000);
//     }
//     close(i);
//   }
// }
// a(); // correct
// async function a() {
//   setTimeout(() => {
//     console.log('inside');
//   }, 0);
//   console.log('outside');
// }
// a(); // out first and then inner

//  Data  privacy
// function Counter() {
//   let count = 0;

//   this.increment = () => {
//     count++;
//     console.log(count);
//   };

//   this.decrement = () => {
//     count--;
//     console.log(count);
//   };
// }

// const counter1 = new Counter();
// counter1.increment();
// counter1.increment();
// counter1.decrement();

function ClickCounter() {
  let count = 0;
  document.getElementById('clickme').addEventListener('click', function () {
    console.log(++count);
  });
}
ClickCounter();

// memoized funcion
// const memoize = function (func) {
//   const cache = {};
//   return function () {
//     const key = JSON.stringify(arguments);

//     if (cache[key]) {
//       return cache[key];
//     } else {
//       const result = func(...arguments);
//       cache[key] = result;
//       return result;
//     }
//   };
// };

// function add(n) {
//   for (let i = 0; i < 200000000; i++) {
//     // i++
//   }
//   return n;
// }

// const memoizedFactorial = memoize(add);
// let a = memoizedFactorial(120); // slow
// console.log(a);
// let b = memoizedFactorial(120); // faster
// console.log(b);

// sum(1, 2, 3, 4);
// sum(1)(2)(3)(4);
// sum(1, 2, 3)(4);
// sum(1)(2, 3, 4);

// const add = (...argsa) => {
//   return function (...argsb) {
//     let val = 0;
//     if (argsa && argsa.length > 0) {
//       for (let i = 0; i < argsa.length; i++) {
//         const element = argsa[i];
//         val += element;
//       }
//     }
//     if (argsb && argsb.length > 0) {
//       for (let i = 0; i < argsb.length; i++) {
//         const element = argsb[i];
//         val += element;
//       }
//     }
//     console.log(val, 'val');
//     if (argsb) {
//       return add(val);
//     } else {
//       return val;
//     }
//   };
// };
// console.log(add(1)(2)(3)(4)(), 'res');

// toggle
// const toggle = (...args) => {
//   let currArgsInvocation = 0;
//   const argsLength = args.length;
//   return function () {
//     const modified = currArgsInvocation % argsLength;
//     currArgsInvocation += 1;
//     console.log(args[modified]);
//     return args[modified];
//   };
// };

// const hello = toggle('hello');
// hello(); // "hello";
// hello(); // "hello";

// const onOff = toggle('on', 'off');
// onOff(); // "on"
// onOff(); // "off"
// onOff(); // "on"
// onOff(); // "on"
// onOff(); // "off"
// onOff(); // "on"
