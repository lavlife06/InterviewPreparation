// const maxSubArraySum = (arr, widthCount) => {
//   let b = widthCount, largestCount = 0, currentCount = 0;
//   for (let i = 0; i < widthCount; i++) {
//     const ele = arr[i];
//     largestCount += ele;
//   }
//   currentCount = largestCount;
//   console.log({largestCount});
//   for (let i = 0; i < arr.length - widthCount; i++) {
//     const crr = arr[i];
//     console.log({largestCount, currentCount, crr, b: arr[b], crrValue: currentCount - crr + arr[b]});
//     if (currentCount - crr + arr[b] > largestCount) {
//       largestCount = currentCount - crr + arr[b];
//     }
//     currentCount += arr[b] - crr;
//     b++;
//   }

//   return largestCount;
// }

// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


//Not working
// function minSubArrayLen(arr, targetVal) {
//   let beginIndex = 0, crrIndex = 0, minGreaterVal = 0, minTargetVal = 0, currentSumVal = 0;
//   while (crrIndex <= arr.length - 1) {
//     const lengthOfSums = crrIndex - beginIndex + 1;
//     console.log({beginIndex, crrIndex, minGreaterVal, minTargetVal, currentSumVal});
//     if (currentSumVal > targetVal && ((minGreaterVal > lengthOfSums) || minGreaterVal === 0)) {
//       minGreaterVal = arr[crrIndex] > targetVal ? arr[crrIndex] : lengthOfSums;
//       crrIndex = beginIndex + 2;
//       beginIndex++;
//       currentSumVal = 0;
//     } else if (currentSumVal === targetVal && ((minTargetVal > lengthOfSums) || minTargetVal === 0)) {
//       crrIndex = beginIndex + 2;
//       beginIndex++;
//       minTargetVal = lengthOfSums;
//       currentSumVal = 0;
//     } else {
//       if (!crrIndex) {
//         currentSumVal += arr[crrIndex];
//       }
//       crrIndex++
//     }

//   }
//   console.log({minGreaterVal, minTargetVal});
//   return minTargetVal && minTargetVal !== 0 < minGreaterVal ? minTargetVal : minGreaterVal;
// }

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); //2 but not working
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));
// console.log(minSubArrayLen([4,3,3,8,1,2,3],11));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));
