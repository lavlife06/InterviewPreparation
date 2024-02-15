// //
// Namaste Lav!!
// undefined
// getName();
// console.log(a);

// function getName() {
//   console.log("Namaste Lav!!");
// }
// var a = 10;

//getName is not a function
// undefined;
getName();
console.log(a);

const getName = () => {
  console.log("Namaste Lav!!");
};
// var a = 10

// Types of Errors

// Namaste Lav!!
// Refrence Error -> a cannot be accesed before defining it // because it is not present in global scope, it is in script scope and also that it shows a: <data unavailable> ,i.e. it is in temporial dead zone before assgining it a value
getName();
console.log(a);

function getName() {
  console.log("Namaste Lav!!");
}
let a = 10;
// let a = 10; redeclaring will give syntax error

// const a = 1000;
// a = 5 //Type Error because a is of const type and we are now changing it and that is not allowed for const to redeclared
