// const countUnique = (arr) => {
//   const frequency = {};
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i];
//     if (!frequency[ele]) {
//       frequency[ele] = (frequency[ele] || 0) + 1;
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countUnique([1,2,3,2,2,3,4]));

// const countUnique = (arr) => {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const crr = arr[i]
//     const prev = i > 0 ? arr[i - 1] : undefined;
//     console.log({crr, prev, status: typeof prev !== "undefined"});
//     if (typeof prev === "undefined") {
//       count++;
//     }
//     else if (typeof prev !== "undefined" && crr !== prev) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countUnique([1,3,3,4]));

// function countUniqueValues(arr){
//   if(arr.length === 0) return 0;
//   var i = 0;
//   for(var j = 1; j < arr.length; j++){
//       if(arr[i] !== arr[j]){
//           i++;
//           arr[i] = arr[j]
//       }
//   }
//   return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])

// function areThereDuplicates(...args) {
//   const frequency = {};
//   for (let i = 0; i < args.length; i++) {
//     const ele = args[i];
//     if (frequency[ele]) {
//       return true;
//     } else {
//       frequency[ele] = (frequency[ele] || 0) + 1;
//     }
//   }
//   return false;
// }

//  OR 

function areThereDuplicates() {
  const arr = arguments;
  const frequency = {};
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (frequency[ele]) {
      return true;
    } else {
      frequency[ele] = (frequency[ele] || 0) + 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,2,3,2));