/////////////////////////////////////////////////////////////// 11111

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

const twoSum = (nums, target) => {
  // Create an object to store numbers and their indices
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    // a + b = target --> b = target - a;
    if (obj.hasOwnProperty(target - nums[i])) {
      return [i, obj[target - nums[i]]];
    }

    // Store the current number and its i in the object
    obj[nums[i]] = i;
  }

  return [-1, -1];
};

/////////////////////////////////////////////////////////////// 22222

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = function (prices) {
  // Initialize variables to track minimum price and maximum profit
  let minPrice = prices[0];
  let maxProfit = 0;

  // Iterate through the prices array
  for (let i = 0; i < prices.length; i++) {
    // Update the minimum price encountered so far
    minPrice = Math.min(minPrice, prices[i]);

    // Update the maximum profit if a higher profit is found
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  // Return the maximum profit
  return maxProfit;
};

/////////////////////////////////////////////////////////////// 33333

function areThereDuplicates(...args) {
  const frequency = {};
  for (let i = 0; i < args.length; i++) {
    const ele = args[i];
    if (frequency[ele]) {
      return true;
    } else {
      frequency[ele] = (frequency[ele] || 0) + 1;
    }
  }
  return false;
}

/////////////////////////////////////////////////////////////// 44444

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]
// You must write an algorithm that runs in O(n) time and without using the division operation

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
const productExceptSelf = function (nums) {
  let postMultiplicationVal = 1;
  let preMultiplicationVal = 1;

  const result = []; // first we store postMultiplyVal for each element and then on second loop we multiply the stored value with postMultiplyVal

  nums.forEach((num, i) => {
    // Calculate the product of elements before the current element
    preMultiplicationVal *= i === 0 ? 1 : nums[i - 1];
    result.push(preMultiplicationVal);
  });

  for (let i = nums.length - 1; i >= 0; i--) {
    // Calculate the product of elements after the current element
    postMultiplicationVal *= i === nums.length - 1 ? 1 : nums[i + 1];
    result[i] *= postMultiplicationVal;
  }

  return result;
};

// Kadane’s Algorithm
// var maxSubArray = function (nums) {
//   // calculate sum and if sum is negative then reset sum to zero.
//   // asign maxsum with first element for all negative number
//   if (nums.length === 1) return nums[0];

//   let currentSum = 0;
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     console.log({ currentSumBefore: currentSum, crrNum: nums[i] });
//     currentSum = Math.max(currentSum + nums[i], nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//     console.log({ currentSumAfter: currentSum, maxSum });
//   }

//   console.log(maxSum);
//   return maxSum;
// };

// Kadane’s Algorithm
var maxSubArray = function (nums) {
  // calculate sum and if sum is smaller then the current ele then the sum is the current ele.
  // asign maxsum with first element for all negative number
  if (nums.length === 1) return nums[0];

  let currentSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    console.log({ currentSumBefore: currentSum, crrNum: nums[i] });

    const sum = currentSum + nums[i];
    currentSum = sum > nums[i] ? sum : nums[i];

    maxSum = Math.max(maxSum, currentSum);
    console.log({ currentSumAfter: currentSum, maxSum });
  }

  console.log(maxSum);
  return maxSum;
};

// maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);
// maxSubArray([-2, -1, -3]);

// Function to find the maximum product of a subarray
const maxProduct = function (nums) {
  // Initialize variables to track the maximum positive product ending at the current position
  let maxEndingHere = nums[0];

  // Initialize variables to track the minimum negative product ending at the current position
  let minEndingHere = nums[0];

  // Initialize variable to track the overall maximum product
  let maxSoFar = nums[0];

  /* Traverse through the array.
  The maximum product subarray ending at an index
  will be the maximum of the element itself,
  the product of the element and the max product ending previously,
  and the min product ending previously. */
  for (let i = 1; i < nums.length; i++) {
    let tempMax = Math.max(
      Math.max(nums[i], nums[i] * maxEndingHere),
      nums[i] * minEndingHere
    );

    minEndingHere = Math.min(
      Math.min(nums[i], nums[i] * maxEndingHere),
      nums[i] * minEndingHere
    );

    maxEndingHere = tempMax;

    // Update the overall maximum product
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  // Return the overall maximum product
  return maxSoFar;
};
