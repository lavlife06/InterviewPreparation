// const Calculator = {
//   initialVal: 0,
//   add(val) {
//     console.log(this, 'initial value');
//     const newvalue = this.initialVal + val;
//     this.initialVal = newvalue;
//     return this;
//   },
//   subtract(val) {
//     console.log(this.initialVal, 'initial value');
//     const newvalue = this.initialVal - val;
//     this.initialVal = newvalue;
//     return this;
//   },
//   multiply(val) {
//     console.log(this.initialVal, 'initial value');
//     const newvalue = this.initialVal * val;
//     this.initialVal = newvalue;
//     return this;
//   },
// };

// // const calculator = new Calculator(0);
// Calculator.add(4).subtract(1).multiply(2);
// console.log(Calculator, 'calulator');

// function Calculator(initialValue) {
//   console.log(initialValue, 'initialValue');
//   this.initialValue = initialValue;
//   this.add = (val) => {
//     console.log(this, 'this');
//     const newvalue = this.initialValue + val;
//     this.initialValue = newvalue;
//     return this;
//   };
//   this.subtract = (val) => {
//     console.log(this.initialValue, 'this');
//     const newvalue = this.initialValue - val;
//     this.initialValue = newvalue;
//     return this;
//   };
//   this.multiply = (val) => {
//     console.log(this.initialValue, 'this');
//     const newvalue = this.initialValue * val;
//     this.initialValue = newvalue;
//     return this;
//   };
// }
// const calculator = new Calculator(0);
// calculator.add(4).subtract(1).multiply(2);
// console.log(calculator, 'calulator');
