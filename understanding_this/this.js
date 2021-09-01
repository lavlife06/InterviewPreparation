//   Fucniton invocartion
// 1) fucntion as fuinciton  -  fucntion invocaiton pattern
// 2) fucntion as a constructor  -  copnstructot invocaiton pattern
// 3) fucntion as a method  -  Method invocaiton pattern
// 4)  fucntion as a indirect call  -  Indirect  invocaiton pattern

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
    console.log(this);
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

console.log(obj.display());
//     THIS === obj {} = {name: 'lav', age: 21, display: ƒ}

//  //  /// //// // / // / / //   /////             / ///

// 44444444444444444 F incocation 4  - fucntion as a indirect call  -  Indirect  invocaiton pattern

let obj2 = {
    name: "karan",
    age: 12,
};

console.log(obj.display.call(obj2));
//     THIS === obj {} = {name: 'karan', age: 12}

//
//                                                                                                       NOTES
//  1) valuie of this depends on how function is being called not on how fimction is created//  e.g. when u call new lav2() it gives empty object
// 2) fucntion can only be called as constructor invoaction if  it has ---  [[Construct]]
