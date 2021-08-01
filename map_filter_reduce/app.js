// const arr = [5, 10, 4, 6, 5];

const arr = [
    { name: "lav", age: 54 },
    { name: "karan", age: 34 },
    { name: "lav1", age: 54 },
    { name: "lav2", age: 44 },
    { name: "lav3", age: 34 },
    { name: "lav4", age: 52 },
];

Array.prototype.myreduce = function (fn, initial) {
    for (let ele of this) {
        initial = fn(initial || 0, ele);
    }
    return initial;
};

let obj = arr.myreduce((acc, curr) => {
    acc[curr.age] = (acc[curr.age] || 0) + 1;
    return acc;
}, {});

// let newarr = arr.myreduce((acc, curr) => acc + curr);

// console.log(newarr);

console.log(obj);

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
//     if (item.age > 50) {
//         return true;
//     }
// });
