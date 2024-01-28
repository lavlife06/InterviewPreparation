// function same(arr1, arr2){
//   if(arr1.length !== arr2.length){
//       return false;
//   }
//   let frequencyCounter1 = {}
//   let frequencyCounter2 = {}
//   for(let val of arr1){
//       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//   }
//   for(let val of arr2){
//       frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
//   }

//   for(let key in frequencyCounter1){
//       if(!(key ** 2 in frequencyCounter2)){
//           return false
//       }
//       if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//           return false
//       }
//   }
//   return true
// }

// same([1,2,3,2,5], [9,1,4,4,11])

function sameFrequency(num1, num2){
  const num1Length = num1.toString().length;
  const num2Length = num2.toString().length;
  const num1String = num1.toString();
  const num2String = num2.toString();

  if(num1Length !== num2Length){
      return false;
  }
  let lookup = {};

  for (let i = 0; i < num1Length; i++) {
    let letter = num1String[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < num2Length; i++) {
    let letter = num2String[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(sameFrequency(182, 138));
