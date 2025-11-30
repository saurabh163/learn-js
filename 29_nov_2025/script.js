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


// problem 06 //

function hasHello(arr) {
  if (arr.includes("hello")) {
    return true;
  } else {
    return false;
  }
}

console.log(hasHello(["hi","hello"])); 
console.log(hasHello(["hi","bye"]));   

// problem 07 //

function checkLast(arr) {
  let last = arr[arr.length - 1];

  if (last > 50) {
    return true;
  } else {
    return false;
  }
}

console.log(checkLast([10,20,60])); 
console.log(checkLast([10,20,30])); 

// problem 08 //

function allPositive(arr) {
  for (let num of arr) {
    if (num < 0) {
      return false;
    }
  }
  return true;
}

console.log(allPositive([1,2,3]));     
console.log(allPositive([1,-1,3]));    

// problem 09 //

function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}

checkDriving(16); 
checkDriving(20); 


// prolem 10 //

let distance = 120;  
let ratePerKm = 6;     

let totalFare = distance * ratePerKm;  

if (distance <= 0 || ratePerKm <= 0) {
  console.log("Invalid Input");
} 

else if (totalFare > 500) {
  let discount = totalFare * 0.10;       
  let finalFare = totalFare - discount;  
  console.log("You got 10% Off");
  console.log("Final Fare:");
} 

else {
  console.log("No Discount, Please Pay Full Amount");
  console.log("Total Fare");
}


// problem 11 //

 for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 12 //

let value = [10, 20, 30, 40, 50];

for (let i = value.length - 1; i >= 0; i--) {
    console.log(value[i]);
}


// problem 13 //

let fruit = ["Apple", "Bnana", "Mango"];

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}


// problem 14 //

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}

/// problem 15 //

let num = 9;

if (num % 2 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}

// problem 16 //

let subjects = ["Math", "Science", "English"];
let favSubject = "Science";

if (subjects.includes(favSubject)) {
    console.log(favSubject + " is one of your favorite subjects!");
} else {
    console.log(favSubject + " is not in your subject list.");
}


// problem 17 //

let isLogged = false;

if (isLogged) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in to continue.");
}

// problem 18 //

let temperature = 32;

if (temperature > 30) {
    console.log("It's a hot day");
} else {
    console.log("The weather is cool");
}