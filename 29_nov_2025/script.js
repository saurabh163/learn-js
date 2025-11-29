//problem 01 //

function isEmpty(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty([]));        
console.log(isEmpty([10, 20]));  

// problem 02 //

function findNumber(arr, num) {
  if (arr.includes(num)) {
    return true;
  } else {
    return false;
  }
}

console.log(findNumber([1,2,3], 2)); 
console.log(findNumber([1,2,3], 5)); 


/// problem 03 //

function isFirstEven(arr) {
  if (arr[0] % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isFirstEven([4,5,6])); 
console.log(isFirstEven([3,4,6])); 

// problem 04 //

function isBig(arr) {
  if (arr.length > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isBig([1,2,3]));             
console.log(isBig([1,2,3,4,5,6]));       


// problem 05 //

function checkSum(arr) {
  let sum = arr.reduce((a,b) => a + b, 0);

  if (sum > 20) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSum([5,5,5,5]));  
console.log(checkSum([3,4,2]));    



