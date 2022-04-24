//           //                  //                                                    ///                     ///  Automatically runnig the function
// (function func(params) {
//     console.log("'a' function running");
// })();
// (function (params) {
//     console.log("anonymous function running");
// })();

// console.log(arrowFunc);

// /////////////////////////////////////////////////////////////////////////////////////////////////

// // //  Fucntion Statement or Function Declaration
//  Note this is hoisted
function a(params) {
  console.log(' a called');
}

//  // // Function Expression
// Note - not hoisted, because used as a value,error - ReferenceError: Cannot access 'b' before initialization
const b = function (params) {
  console.log('b called');
};

//  // // Named Function Expression
// Note - not hoisted c and xyz both, because c used as a value and xyz has different scope
var c = function xyz(params) {
  // console.log(xyz);
};
c(); //  =>   ƒ xyz(params) {
//     console.log(xyz);
// }
// xyz() error

//  FUnctioncs arguments and parameteres
function name1(params1, params2) {}
name1(5, 2); // Arguments

// const sum = (a) => {
//   return (b) => {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// };

const sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(2)(3)(5)());
