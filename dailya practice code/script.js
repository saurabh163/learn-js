// problem  01
 
function calculateDiscount(amount) 
{
  if (amount <= 0) {
    console.log("Invalid Amount");
  } 

  else if (amount < 500) {
    console.log("No Discount");
  }

  else if (amount <= 1000) {
    let discount = amount * 0.10;
    console.log("10% Discount Applied");
  }

  else if (amount <= 5000) {
    let discount = amount * 0.20;
    console.log("20% Discount Applied");
  }

  else {
    let discount = amount * 0.30;
    console.log("30% Discount Applied");
  }
}

  // test function//
calculateDiscount(-200);  

calculateDiscount(300);  

calculateDiscount(800);  

calculateDiscount(2000);  

calculateDiscount(6000);


///// problem 02 

let age = prompt("18");


age = Number(age);

if (age >= 18) {
    console.log("You can drive.");

} else {
    console.log("You cannot drive yet.");
}



// problem 03 

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 04 


for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {
        console.log(i + " is divisible by 3");    // for loop divide 
        
    } else {
        console.log(i + " is not divisible by 3");
    }
}


// problem 05



  let studentName = "Ravi";
let Age = 17;
let mark = 55;

console.log("Checking eligibility for: " + studentName);

if (Age >= 18 && mark >= 50) {
    console.log("Student can appear for exam");

} else if (Age < 18 && mark >= 50) {  //  logical AND  oprator use for ckeck condition
    console.log("Student too young");

} else if (Age >= 18 && mark < 50) {
    console.log("Student failed");

} else {
    console.log("Student too young and failed");
}



// problem 06

let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));  // multiplication taber arry solve 
}


// problem 07

let colors = ["Red", "Green", "Blue"];

console.log("Array length is:", colors.length);  // arry lenght proparty use inthis code 



// problem 08

  let aGe = 16; 

if (aGe >= 18) {
    console.log("You are an adult");

} else {
    console.log("You are a minor");
}


// problem 09

let number = [1, 2, 3, 4, 5];

for (let i = 0; i < number.length; i++) {
    console.log(nbrs[i]);
}



// prolem 10

let Numbr = 7;

if (Numbr % 2 === 0) {  //// this line MODULOUS oprator use huwa hai 
    console.log("True");

} else {
    console.log("False");
}


// problem 11

let numbers = [4, 7, 10, 13, 16];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {           // modulous oprator use in code 
        console.log("Number " + numbers[i] + " is Even");

    } else {
        console.log("Number " + numbers[i] + " is Odd");
    }
}
