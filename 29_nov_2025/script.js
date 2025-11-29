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
