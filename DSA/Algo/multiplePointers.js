// sorted array, first pair of zero
const sumZero = (arr) => {
  let left = 0, right = arr.length - 1;
  while(left < right) {
    console.log({left, right, leftVal: arr[left], rightVal: arr[right]});
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return true;
    }
    else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }
  return false;
}

// console.log(sumZero([-3, -2, -1, 0, 4]));

function averagePair(arr, targetVal){
  // add whatever parameters you deem necessary - good luck!
  let left = 0, right = arr.length - 1;
  while(left < right) {
    console.log({left, right, leftVal: arr[left], rightVal: arr[right]});
    let avg = (arr[left] + arr[right])/2;
    if (avg === targetVal) {
      return true;
    }
    else if (avg > targetVal) {
      right--;
    } else if (avg < targetVal) {
      left++;
    }
  }
  return false;  
}

// console.log(averagePair([-1,0,3,4,5,6], 4.1));

function isSubsequence(sequence, str) {
  let foundCharCount = 0; currentIndexOfSequence = 0;

  for (let i = 0; i < str.length; i++) {
    const ele = str[i];
    if (sequence[currentIndexOfSequence] === ele) {
      foundCharCount++;
      currentIndexOfSequence++;
    }
  }

  return foundCharCount === sequence.length;
}

console.log(isSubsequence('abc', 'afdbfd'));