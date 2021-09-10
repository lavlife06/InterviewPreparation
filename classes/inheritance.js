//                                                      BE AWARE
// Let's create an object o from function F with its own properties a and b:
let F = function () {
    this.a = 1;
    this.b = 2;
};
let o = new F(); // {a: 1, b: 2}

// add properties in F function's prototype
F.prototype.b = 3;
F.prototype.c = 4;

// do not set the prototype F.prototype = {b:3,c:4}; this will break the prototype chain
console.log(o.__proto__);
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype.
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.

// function doSomething(){}
// doSomething.prototype.foo = "bar";
// var doSomeInstancing = new doSomething();
// doSomeInstancing.prop = "some value";
// console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
// console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
// console.log("doSomething.prop:           " + doSomething.prop);
// console.log("doSomething.foo:            " + doSomething.foo);
// console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
// console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);

// doSomeInstancing.prop:      some value
// doSomeInstancing.foo:       bar
// doSomething.prop:           undefined
// doSomething.foo:            undefined
// doSomething.prototype.prop: undefined
// doSomething.prototype.foo:  bar

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function () {
    alert("Hi! I'm " + this.name.first + ".");
};

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}

const teacher = new Teacher(
    "lav",
    "senghani",
    21,
    "male",
    "chess",
    "chessSubject"
);

const person = new Person(
    "karan",
    "senghani",
    21,
    "male",
    "chess",
    "chessSubject"
);

teacher.newname = "karan";

// console.log(
//     Person.prototype,
//     "person",
//     Teacher.prototype,
//     "Teacher",
//     teacher,
//     "teacher",
//     person.__proto__,
//     "person"
// );
