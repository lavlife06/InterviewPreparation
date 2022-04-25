// Object.prototype.toString.call(person2) === '[object Array]' //will return false
// 1)                                                                                      FUNCTION BORROWING
// const person1 = {
//     firstname: "lav",
//     lastname: "senghani",
//     printName: function () {
//         console.log(this.firstname + " " + this.lastname);
//     },
// };

// const person2 = {
//     firstname: "karan",
//     lastname: "mandal",
// };

// person1.printName.call(person2);

/////                                                                                       BETTER WAY

const person1 = {
  firstname: 'lav',
  lastname: 'senghani',
};

const person2 = {
  firstname: 'karan',
  lastname: 'mandal',
};

const printName = function (hometown, state, mystate) {
  console.log(this.firstname + ' ' + this.lastname + ' from ' + `${hometown},` + state);
};

// printName.call(person2, "surat", "jahangirpura");

// printName.apply(person2, ["surat", "jahangirpura"]);

// const printname = printName.bind(person2, "surat", "jahangirpura");
// printname();

////////                                                                                MyBind

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function (obj, ...args) {
  let func = this;
  // Accepting arguments passed to newFunc
  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};

const printname = printName.myBind(person2, 'jahangirpura');
printname('Surat');

//  /// /// // / / /                                                                    NOTES

// 1) The call() method calls a function with a given this value, and arguments provided as an array
// 2)  apply is similar to call but just passing argument is different
//  3) bind is similar to call but it is never invoked on its own, we have the power toi use it anywhere

//                                                                                           CHAINING OF CONSTRUCTOR
// Function.prototype.construct = function (aArgs) {
//     let oNew = Object.create(this.prototype);
//     this.apply(oNew, aArgs);
//     return oNew;
// };

// function MyConstructor() {
//     for (let nProp = 0; nProp < arguments.length; nProp++) {
//         this["property" + nProp] = arguments[nProp];
//     }
// }

// let myArray = [4, "Hello world!", false];
// let myInstance = MyConstructor.construct(myArray);

// console.log(myInstance.property1); // logs 'Hello world!'
// console.log(myInstance instanceof MyConstructor); // logs 'true'
// console.log(myInstance.constructor);
