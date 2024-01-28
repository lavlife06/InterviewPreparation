// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

// binarySearch([2,5,6,9,13,15,28,30], 103)

// Questions
// 1. Find the number of rotations in a circularly sorted array
function countRotations(arr, n) 
{       
      let low =0 , high = n-1;  
      while(low<=high){ 
          let mid = low + Math.floor((high-low)/2) ;  
          let prev = (mid-1 + n)%n , next = (mid+1)%n;//if first element is mid or 
        //last element is mid then simply use modulo so it never goes out of bound. 
        console.log({mid, prev, next, high, low, firstCon: arr[mid]<=arr[prev] && arr[mid]<=arr[next], secondCon: arr[mid]<=arr[high], thirdCon: arr[mid]>=arr[low]});
          if(arr[mid]<=arr[prev] && arr[mid]<=arr[next]) 
            return mid;  
          else if (arr[mid]<=arr[high]) 
            high = mid-1;  
          else if (arr[mid]>=arr[low])  
            low = mid+1;  
      } 
      return 0;  
} 
  
// Driver code 
  
let arr = [15, 18, 1, 2, 3, 6, 12]; 
let n = arr.length; 
console.log(countRotations(arr, n));

//2. Find a pair with the given sum in a circularly sorted array
// Note -- Pivot should be done via Binary Search
function pairInSortedRotated(arr, n, x)
{
     
    // Find the pivot element
    let i;
    for(i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1])
            break;
             
    // l is now index of                                          
    // smallest element          
    let l = (i + 1) % n; 
     
    // r is now index of largest 
    // element                   
    let r = i;       
    
    // Keep moving either l or 
    // r till they meet
    while (l != r)
    {
         
         // If we find a pair with sum x, we
         // return true
         if (arr[l] + arr[r] == x)
              return true;
    
         // If current pair sum is less, move 
         // to the higher sum
         if (arr[l] + arr[r] < x)
              l = (l + 1) % n;
               
         // Move to the lower sum side       
         else 
              r = (n + r - 1) % n;
    }
    return false;
}


// Questions Vymo
// 1. K sum of Pairs in an Array 
// Note -- if unique pairs then iterate over obj else iterate over array
// - Create obj = {3: 2, 2:1} 
// - Then apply formula a(arr[i]) + b = k; i.e. -> b = k - a(arr[i]);
// - Then put do obj[b] if present then pair is a,b else not
