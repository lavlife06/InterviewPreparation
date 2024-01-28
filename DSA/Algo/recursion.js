const factorial = (num) => {
  if (num === 1) return 1;
  return num*factorial(num - 1);
}

console.log(factorial(5));

function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])
                                      
                                                              
                                                                           
                          
          