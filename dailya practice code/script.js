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



// problem 12

let colour = 500;

if (colour >= 60) {
    console.log("Grade A");

} else if (colour >= 75) {
    console.log("Grade B");

} else if (colour >= 50) {
    console.log("Grade C");

} else if (colour >= 33) {
    console.log("Grade D");

} else {
    console.log("Fail");
}


//problem 13

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < nums.length; i++) {

    if (nums[i] % 2 === 0) {
        evenNumbers.push(nums[i]); // .push new element add krne ke liye use hota hai 


    } else {
        oddNumbers.push(nums[i]);
    }
}

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);



///  problem 14

let Number = [12, 45, 67, 23, 89, 5, 34];

let largest = Number[0];  // assume first element is the large number

for (let i = 1; i < Number.length; i++) {  /// i use a Comparison operator 

    if (Number[i] > largest) {
        largest = Number[i];
    }
}

console.log("Largest number is:", largest);


/// problem 15

let N = 12;

if (N % 4 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}


// problem 16 


for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}



// problem 17

let Num = 18;

for (let i = 1; i <= 10; i++) {
    console.log(Num + " x " + i + " = " + (Num * i));
}


///  problem 18

let Numbers = [45, 12, 78, 34, 89, 23, 67];

let max = Numbers[0]; // Assume first element is biggest
let min = Numbers[0]; // Assume first element is smallest

for(let i = 1; i < Numbers.length; i++){
    if(Numbers[i] > max){
        max = Numbers[i];
    }
    if(Numbers[i] < min){
        min = Numbers[i];
    }
}

alert("Maximum number is: " + max + "\nMinimum number is: " + min);



//  problem 19


let umar = 25;

if (umar <= 0) {
    console.log("Invalid Age");

} else if (umar < 7) {
    console.log("Free Ticket");

} else if (umar >= 7 && umar < 18) {
    console.log("Child Ticket 42 Rs");

} else if (umar >= 20 && umar < 60) {
    console.log("Adult Ticket 245 Rs");

} else {
    console.log("Senior Citizen Ticket 50 Rs");
}



// problem  20


let frUits = ["Apple", "mosambi", "Mango"];

for (let i = 0; i < frUits.length; i++) {
    console.log(frUits[i]);
}


// problem 21


for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
    if(numbers[i] < min){
        min = numbers[i];
    }
}



// // problem 22

let markS = 85; 

 if (markS >= 90) 
    console.log(" Grade A ");

  else if (markS >= 75) 
    console.log(" Grade B ");

  else if (markS >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 



  // problem 22

let numBer = [1, 2, 3, 4, 5];

for (let i = 0; i < numBer.length; i++) {
    console.log(nbrs[i]);
}


//   // problem 22


for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


//   // problem 23

let Colors = ["Red", "Green", "Blue"];

console.log("Array length is:", Colors.length);



// problem 24

let AGe = 16;
let hasID = true;

if (AGe >= 18 && hasID === true) {
    console.log("You can enter");

} else {
    console.log("Access Denied");
}



// problem 25

let NUm = 7;

for (let i = 1; i <= 10; i++) {
    console.log(NUm + " x " + i + " = " + (NUm * i));
}



// problem 26

let a = 39;
let b = 25;
let operation = "add";

if (operation === "add") {
    console.log("Result is:", a + b);

} else if (operation === "sub") {
    console.log("Result is:", a - b);

} else {
    console.log("Invalid Operation");
}


// problem 27 

let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// problem 28

let cities = ["Delhi", "Mumbai", "Kolkata", "Nagpur"];

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}


// problem 29

let Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let EvenNumbers = [];
let OddNumbers = [];

for (let i = 0; i < Nums.length; i++) {

    if (Nums[i] % 2 === 0) {
        EvenNumbers.push(Nums[i]); 


    } else {
        OddNumbers.push(Nums[i]);
    }
}

console.log("Even numbers:", EvenNumbers);
console.log("Odd numbers:", OddNumbers);


// problem 30 

let value = -9;

if (value > 0) {
    console.log("value is Positive");

} else if (value < 0) {
    console.log("value is Negative");

} else {
    console.log("value is Zero");
}


// problem 31  ////  this problem a arry length proprty 

let Fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First fruit:", fruits[0]); 

console.log("Last fruit:", fruits[fruits.length - 1]); 

console.log("Middle fruit:", fruits[2]);


// problem 32 /// arry lenghth problem 

let students = ["Aman", "Saurabh", "Riya", "Kunal", "Priya"];

console.log("Total students:", students.length); 

console.log("First student:", students[0]); 

console.log("Last student:", students[students.length - 1]); 




// problem 33  


function sumArray(numbers) {
    let sum = 0; //this variable store a sum of number 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // they sad all number add in sum
    }

    return sum; // they sad final result ki sum
}

// use function call
let Result = sumArray([6, 5, 7, 8]);
console.log("Sum of array is:", result);



// problem 34  //// print even number with use of arry 


let NuMber = [5, 12, 7, 8, 3, 10]; 

for (let i = 0; i < Number.length; i++) { // how many total munber in the arr 

    if (Number[i] % 2 === 0) { // check number with modulas oprator
        console.log("Even number:", Number[i]);
    }
}



// problem 35 ../// arry proble 



let NumberS = [10, 20, 30, 40, 50]; // i create a one arry

for (let i = 0; i < NumberS.length; i++) { //  how many numberin arry (total lenghth )
    console.log("Numbers at index", i, "is:", NumberS[i]);
}



// problem 36  ///// if else 

let Score = parseInt(prompt("Enter your marks"));

if (Score > 100 || Score < 0) {
    console.log("Invalid Marks");

  } else if (Score >= 90) {
    console.log("Grade A");

} else if (Score >= 75) {
    console.log("Grade B");

} else if (Score >= 50) {
    console.log("Grade C");

} else if (Score >= 33) {
    console.log("Grade D");

} else {
    console.log("Fail");
}




// problem 37 //  // student grde pass chek problem if else




  let StudentName = "Ravi";
  let score = 89;   

     console.log("Student: " + StudentName);
     console.log("score: " + score);

if (score >= 90) {
     console.log("Grade: A");
     console.log("Status: Pass");

} else if (score >= 75) {
     console.log("Grade: B");
     console.log("Status: Pass");

} else if (score >= 50) {
     console.log("Grade: C");
     console.log("Status: Pass");

} else if (score >= 35) {
     console.log("Grade: D");
     console.log("Status: Pass");

} else {
     console.log("Grade: None");
     console.log("Status: Fail");
}



// problem 38 .// 

let Mark = [50, 75, 45, 87, 45];

console.log("Students Result:");

for (let i = 0; i < Mark.length; i++) {

    if (Mark[i] >= 40) {
        console.log("Student " + (i+1) + ": Pass (Mark = " + Mark[i] + ")");
        
    } else {
        console.log("Student " + (i+1) + ": Fail (Mark = " + Mark[i] + ")");
    }
}




// problem 39 //arr se even number print problem

let numbeRs = [1,2,3,4,5,6,7,8,9,10];

console.log("Even numbers in the array:");

for (let i = 0; i < numbeRs.length; i++) {

    if (numbeRs[i] % 2 === 0) {   
        console.log(numbeRs[i]);
    }
}




// problem 40 // // student exam de sakte ki nai chek with if-else

  let Studentname = "Ravi";
let AgE = 17;
let MArk = 55;

console.log("Checking eligibility for: " + Studentname);

if (AgE >= 18 && MArk >= 50) {
    console.log("Student can appear for exam");

} else if (AgE < 18 && MArk >= 50) {
    console.log("Student too young");

} else if (AgE >= 18 && MArk < 50) {
    console.log("Student failed");

} else {
    console.log("Student too young and failed");
}


//  problem 41  //// forloop divide 

for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {
        console.log(i + " is divisible by 3");
        
    } else {
        console.log(i + " is not divisible by 3");
    }
}




// problem 42 //// forloop even odd number 

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 43 ///// arr   use krun possitive nigetive number print karana 

let arr = [2, -5, 0, 8, -1];

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {
        console.log(arr[i] + " is Positive");

    } else if (arr[i] < 0) {
        console.log(arr[i] + " is Negative");
        
    } else {
        console.log(arr[i] + " is Zero");
    }
}



/// problem 42 ///// factrial of a number with for loop 

let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i; // iska mtlb ki aane wali value ko multiply i se krna //
}

console.log("Factorial =", fact);




// problem 43 ///for loop sum problem 

let Sum = 0;

for (let i = 1; i <= 10; i++) {
  Sum += i; // iska mtlb ki sum hone ke bad sum + i ki value //
}

console.log("Sum =", sum);



//problem 44 //// even number print with for loop

for (let i = 1; i <= 20; i++) {

  if (i % 2 === 0) {
    console.log(i);
  }
}



// problem 45 ////  for loop reverse number print

for (let i = 10; i >= 1; i--) {
  console.log(i);
}





// problem 46 //// multiplya krke tabel print krna 

for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}




/// problem 47 ///   bada number print krna 

let x = 15;
let y = 25;

 if (x > y) {
    console.log("Largest =", x);
} else {
    console.log("Largest =", y);
}




/// problem 48 /// function arry 

function findLargestNumber(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    console.log("The largest number is: " + largest);
}

// Test arr function 
findLargestNumber([12, 45, 7, 89, 23, 56]);




/// problem 49 ///big maltipication problem

function bigMultiplicationTable(num) {
  
    for (let i = 1; i <= 20; i++) {
        console.log(num + " × " + i + " = " + (num * i));
    }
}

bigMultiplicationTable(7);






/// problem 50   /// // revers counting 

function reverscounting(){
  for(let i = 10; i >= 1; i--){
    console.log(i);
  }
}

reverscounting();