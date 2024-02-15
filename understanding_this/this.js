//   Fucniton invocartion
// 1) fucntion as fuinciton  -  fucntion invocaiton pattern
// 2) fucntion as a constructor  -  copnstructot invocaiton pattern
// 3) fucntion as a method  -  Method invocaiton pattern
// 4)  fucntion as a indirect call  -  Indirect  invocaiton pattern

// Note
// obj.method() === this.obj.method() i.e. anything on the left of function call is the scope for that function
// Here method has the scope of obj and obj has the scope of windows and so if method doesn't get any obj scope then it will take global one i.e. this.obj becasue obj is connected to global this

// function lav() {
//     console.log(this, "1");
// }
// lav(); // window

// function lav2() {
//     console.log(this, "2");
// }
// new lav2(); // {}

//                                                                                              FUNCTION INVOCATIONS

function Product(item, price) {
  this.item = item;
  this.price = price;
  // console.log(this);
  //  this.item, price is now accessible from everywehre because this point to global
}

//  11111111111111111 F incocation 1  -  fucntion as fuinciton  -  fucntion invocaiton pattern

// let my_product_1 = Product("watch", 5000);
//     THIS === global window

//  //  /// //// // / // / / //   /////             / ///

// 22222222222222222 F incocation 2  - fucntion as a constructor  -  copnstructot invocaiton pattern

// let my_product_2 = new Product("laptop", 60000);
//     THIS === Product {} = {item,laptop} newly created object

//  //  /// //// // / // / / //   /////             / ///

// 33333333333333333 F incocation 3  - fucntion as a method  -  Method invocaiton pattern

let obj = {
  name: "lav",
  age: 21,
  display: function () {
    console.log(this, this.name);
    return null;
  },
};

// console.log(obj.display());
//     THIS === obj {} = {name: 'lav', age: 21, display: ƒ}

//  //  /// //// // / // / / //   /////             / ///

// 44444444444444444 F incocation 4  - fucntion as a indirect call  -  Indirect  invocaiton pattern

let obj2 = {
  name: "karan",
  age: 12,
};

// console.log(obj.display.call(obj2));
//     THIS === obj {} = {name: 'karan', age: 12}

//
//                                                                                                       NOTES
//  1) valuie of this depends on how function is being called not on how fimction is created//  e.g. when u call new lav2() it gives empty object
// 2) fucntion can only be called as constructor invoaction if  it has ---  [[Construct]]
// 3) this is the object attached to the function/method eg- obj.xyz()  here this === obj if xyz() then this ===  window

const a = {
  name: "lav",
  say() {
    console.log(this, "this");
  },
};
// a.say(); this === a
const b = {
  name: "lav",
  say() {
    return function () {
      console.log(this, "this");
    };
  },
};
// b.say()(); //this === window becaue in general if it doent get any obj it will do so

const c = {
  name: "lav",
  say() {
    // return () => {
    //   console.log(this, 'this');
    // };
    // this === c
    return function () {
      console.log(this, "this");
    };
    // this === window
  },
};
// c.say()(); // this === c becauee in arrao func this === lexicalscope

const d = {
  name: "lav",
  say: () => {
    console.log(this, "firstthis");
    //window
    return function () {
      console.log(this, "secondthis");
      //window
    };
  },
};
// d.say()(); //this === window becaue in general if it doent get any obj it will do so

const e = {
  name: "lav",
  say: () => {
    return () => {
      console.log(this, "this");
    };
  },
};
// e.say()(); //this === window becaue in general if it doent get any obj it will do so

const f = {
  name: "lav",
  say() {
    const firstthis = this;
    console.log(firstthis, "firstthis");
    //lav
    const obj = {
      name: "karan",
      dontsay: () => {
        const secondthis = this;
        console.log(secondthis, "secondthis");
        //lav
        return function () {
          const thirdthis = this;
          console.log(thirdthis, "thirdthis");
        };
        //window
      },
    };
    return obj;
  },
};
f.say().dontsay()();

const g = {
  name: "lav",
  say() {
    const firstthis = this;
    console.log(firstthis, "firstthis");
    const obj = {
      name: "karan",
      dontsay() {
        const secondthis = this;
        console.log(secondthis, "secondthis");
        // karan

        // return () => {
        //   const thirdthis = this;
        //   console.log(thirdthis, 'thirdthis');
        // };
        // karan
        return function () {
          const thirdthis = this;
          console.log(thirdthis, "thirdthis");
        };
        // this === window
      },
    };
    return obj;
  },
};
g.say().dontsay()();

//  Note this always point to the object attached to it but in arrow function it always point to lexical scope

// ////////         ///////////             //////////          THIS         // ////////         ///////////             //////////

// 1)
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message); // What is logged?
//   }
// };
// setTimeout(object.logMessage, 1000);
//  Result  undefined because object.logMessage is invoked as normal function rather then method

//  FIX 1
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message); // What is logged?
//   },
// };
// // setTimeout(object.logMessage.bind(object), 1000);// hello World

// // FIX 2
// // setTimeout(() => object.logMessage(), 1000); // hello World
// setTimeout(function () {
//   object.logMessage();
// }, 1000); // hello World

// 2)
// const object = {
//   who: 'World',
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   },
// };
// console.log(object.greet()); // hello world
// console.log(object.farewell()); // goodbye undefined, scope of farewell global

// 3)
// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   }
// };
// object.method(callback, 1, 2);// 4 because callback invocation is as normal function invoocation
// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method: (callback) => {
//     callback();
//   },
// };
// object.method(callback, 1, 2); // 4

//4)
var length = 4;
// function callback() {
//   console.log(this.length); // What is logged? // 3
// }
const callback = () => {
  console.log(this.length); // What is logged? // 4 becasue here argunments has arrow function as key so this will be pointed to window
};
const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};
// object.method(callback, 1, 2);
//     IF u see this points to arguments becaue its special array like object
// {
//   0: callback,
//   1: 1,
//   2: 2,
//   length: 3
// } u see this === arguments and thats why 3 is the answer
