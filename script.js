//if-else problem try

let marks = 85; 

 if (marks >= 90) 
    console.log(" Grade A ");

  else if (marks >= 75) 
    console.log(" Grade B ");

  else if (marks >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 

// re-assigment problem try

let Balance = 5000;   
let Withdraw = 3000;  

if (withdraw <= balance) {
    console.log("Transaction Successful");
    balance = balance - withdraw;  
    console.log("Remaining Balance: " + balance);
} else {
    console.log("Insufficient Balance");
}


// login system problem 

let username = "admin";   

let password = "1234";    

if (!username || !password) {
  console.log("Please enter username and password!");
} 

else if (username === "admin" && password === "1234") {
  console.log("Login Successful ");
} 

else if (username !== "admin") {
  console.log("Invalid Username ");
} 

else if (password !== "1234") {
  console.log("Invalid Password ");
}



//atm withdraw problem


let balance = 5000;

let withdraw = 2000; 

if (!withdraw) {
  console.log("Please enter valid amount....!");
} 

else if (typeof withdraw !== "number" || withdraw <= 0) {
  console.log("Invalid Amount");
} 

else if (withdraw > balance) {
  console.log("Insufficient Balance");
} 

else {
  balance = balance - withdraw;
  console.log("Transaction Successful");
  console.log("Remaining Balance");
}


// variabel revise problem


let Marks = 85;

if (marks <= 0) {
  console.log("Invalid Marks");
} 

else if (marks > 100) {
  console.log("Marks cannot be more than 100");
} 

else if (marks < 35) {
  console.log("Fail");
} 

else if (marks >= 35 && marks <= 60) {
  console.log("Pass");
} 

else if (marks >= 61 && marks <= 80) {
  console.log("First Class");
} 

else {
  console.log("Distinction");
}


// 2 variable complicate problemm 

let itemPrice = 1200;  
let quantity = 5;       

let total = itemPrice * quantity;  

if (itemPrice <= 0 || quantity <= 0) {
  console.log("Invalid Input");
} 

else if (total > 5000) {
  console.log("You got Free Delivery");
  console.log("Total Bill");
} 

else {
  console.log("Delivery charge 50rs add hoga");
  console.log("Total Bill");
}


// result cheqk problem


let mathMarks = 85;
let scienceMarks = 90;

if (mathMarks <= 0 || scienceMarks <= 0) {
  console.log("Invalid Marks");
} 

else if (mathMarks < 35 || scienceMarks < 35) {
  console.log("Fail");
} 

else if (mathMarks > 80 && scienceMarks > 80) {
  console.log("Excellent good  Performance");
} 

else {
  console.log("Pass");
}


// tiket booking problem 


let ticketPrice = 250;
let tickets = 10;

let Total = ticketPrice * tickets;

if (ticketPrice <= 0 || tickets <= 0) {
  console.log("Invalid Input");
}  

else if (total > 2000) {
  let discount = total * 0.10;
  let finalBill = total - discount;
  console.log("You got 10% Discount");
  console.log("Final Bill:");
} 

else {
  console.log("No Discount, Please Pay Full Amount");
  console.log("Total Bill:");
}

//travel fare problem 


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

// start function problem 


function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}
// function callkrna jaruri hai varna out put nai yet //

checkDriving(16); 
checkDriving(20); 


// chekar function problem 

// function dicliare//
function checkResult(marks) {
  
  if (marks <= 0) {
    console.log("Invalid Marks");
  } 

  else if (marks < 35) {
    console.log("Fail");
  } 

  else {
    console.log("Pass");
  }
}

// function calls kiya gaya// 

checkResult(0);  
checkResult(25); 
checkResult(60);  



//grade calcultor problem 


//fuction dicliiar kel//
function calculateGrade(marks) {

  if (marks <= 0) {
    console.log("Invalid Marks");
  } 

  else if (marks < 35) {
    console.log("Fail");
  } 

  else if (marks <= 50) {
    console.log("Grade: C");
  } 

  else if (marks <= 75) {
    console.log("Grade: B");
  } 

  else if (marks <= 90) {
    console.log("Grade: A");
  } 

  else if (marks <= 100) {
    console.log("Grade: A+");
  } 

  else {
    console.log("Marks cannot be more than 100");
  }
}

// function use krun output bgn //
calculateGrade(-5);   
calculateGrade(20);   
calculateGrade(40);   
calculateGrade(65);   
calculateGrade(85);   
calculateGrade(95);   
calculateGrade(120);  


// function electeic bill calculetor 


//fuction dicliar karne//
function calculateBill(units) {
  let bill = 0;

  if (units <= 0) {
    console.log("Invalid Units");
  } 

  else if (units <= 100) {
    bill = units * 5;
    console.log("Your Bill");
  } 

  else if (units <= 200) {
    bill = units * 7;
    console.log("Your Bill");
  }

  else if (units <= 300) {
    bill = units * 10;
    console.log("Your Bill");
  } 

  else {
    bill = units * 12;
    console.log("Your Bill");
  }
}

// function test karne//
calculateBill(-10);  
calculateBill(80);   
calculateBill(150);  
calculateBill(250);  
calculateBill(400);  


//shoping discount calculate problem

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



// fuction number tyape check

function checkNumber(num) {

  num = Number(num);

  if (num > 0) {
    console.log("Number is positive");

  } else if (num < 0) {
    console.log("Number is negative");

  } else {
    console.log("Number is zero");
  }
}

let userInput = prompt("Enter a number:");

// Call function with input//
checkNumber(userInput);


// new age chek problem try 

let age = prompt("18");


age = Number(age);

if (age >= 18) {
    console.log("You can drive.");

} else {
    console.log("You cannot drive yet.");
}


//grade check function problem

function checkGrade(marks) {
    let grade;

    if (marks >= 90) {
        grade = "A";

    } else if (marks >= 70) {
        grade = "B";

    } else if (marks >= 50) {
        grade = "C";

    } else {
        grade = "Fail";
    }

    console.log("Your grade is: " + grade);
}

// test the function work//
let studentMarks = 65; 
checkGrade(studentMarks);


// shoping discount problem


function calculateDiscount(billAmount) {
    let discount = 0;

    if (billAmount >= 5000) {
        discount = 0.20;

    } else if (billAmount >= 2000) {
        discount = 0.10;

    } else if (billAmount >= 1000) {
        discount = 0.05;

    } else {
        discount = 0;
    }

    console.log("Original Bill");
    console.log("Discount Applied");
    console.log("Final Price");
}

// Test function  
let myBill = 3200;
calculateDiscount(myBill);

// for loop try  


for (let i = 1; i <= 10; i++) {
    console.log("Number: " + i);
}


// for loop chek even-odd num

let Num = 5;  

for (let i = 1; i <= 10; i++) {
    let result = num * i;

    if (result % 2 === 0) {
        console.log(result + " is EVEN");

    } else {
        console.log(result + " is ODD");
    }
}


// student function and forloop use 

function checkResults(marksList) {

    for (let i = 0; i < marksList.length; i++) {
        let marks = marksList[i];

        if (marks >= 90) {
            console.log("Student " + (i+1) + ": Grade A");

        } else if (marks >= 70) {
            console.log("Student " + (i+1) + ": Grade B");

        } else if (marks >= 50) {
            console.log("Student " + (i+1) + ": Grade C ");

        } else {
            console.log("Student " + (i+1) + ": Fail ");
        }
    }
}

// Test  function
let studentsMarks = [95, 82, 67, 45, 100];
checkResults(studentsMarks);


// labry books short problrm 


function borrowBooks(userLimit, booksRequested) {
    let borrowed = 0;

    for (let i = 0; i < booksRequested.length; i++) {
        let req = booksRequested[i];

        if (req <= 0) {
            console.log("Request " + (i+1) + ": Invalid request");

        } else if (borrowed + req > userLimit) {
            console.log("Request " + (i+1) + ": Request denied (limit exceeded)");
            
        } else {
            borrowed += req;
            console.log("Request " + (i+1) + ": Borrowed " + req + " books ");
            console.log("Now total borrowed: " + borrowed);
        }

        console.log("--------------------------------");
    }
}

// Test function 
let limit = 5; 
let requests = [2, 0, 3, 1, 2];
borrowBooks(limit, requests);



//exam scoring problem 


function calculateScore(answers) {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
      
        if (answers[i] === "correct") {
            score += 4;
            console.log("Q" + (i+1) + ": Correct (+4)");

        } else if (answers[i] === "wrong") {
            score -= 1;
            console.log("Q" + (i+1) + ": Wrong (-1)");

        } else {
            console.log("Q" + (i+1) + ": Invalid Answer (No marks)");
        }
        console.log("Current Score: " + score);
        console.log("-------------------------");
    }

    console.log("Final Score = " + score);

    if (score < 0) {
        console.log("Better luck next time");

    } else {
        console.log("Good job");
    }
}

// Test function
let studentAnswers = ["correct", "wrong", "correct", "wrong", "wrong", "correct"];
calculateScore(studentAnswers);



//grocery bill

function generateBill(items) {
    let grandTotal = 0;

    console.log("------ Grocery Bill ------");

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let total = item.quantity * item.price;
        grandTotal += total;

        console.log(
            item.name + " - " + item.quantity + " × ₹" + item.price + " = ₹" + total
        );
    }

    console.log("--------------------------");
    console.log("Grand Total = ₹" + grandTotal);

    // Apply discount
    let discount = 0;
    if (grandTotal > 1000) {
        discount = grandTotal * 0.1;
        console.log("10% Discount Applied = ₹" + discount);

    } else if (grandTotal >= 500) {
        discount = grandTotal * 0.05;
        console.log("5% Discount Applied = ₹" + discount);

    } else {
        console.log("No Discount Applied");
    }

    let finalAmount = grandTotal - discount;
    console.log("Final Payable Amount = ₹" + finalAmount);
}

// Test function

let cart = [
    { name: "Rice", quantity: 2, price: 60 },
    { name: "Oil", quantity: 1, price: 150 },
    { name: "Milk", quantity: 5, price: 40 },
    { name: "Sugar", quantity: 3, price: 50 }
];

generateBill(cart);


// posotive negative num problem

function checkNumbers(nums) {

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (n > 0) {
            console.log(n + " is Positive");

        } else if (n < 0) {
            console.log(n + " is Negative");
            
        } else {
            console.log(n + " is Zero");
        }
    }
}

checkNumbers([5, -2, 0, 10, -7]);


// voting elagibility problem

function checkVoting(ages) {

    for (let i = 0; i < ages.length; i++) {
        let age = ages[i];

        if (age >= 18) {
            console.log("Person " + (i+1) + ": Eligible to Vote");

        } else {
            console.log("Person " + (i+1) + ": Not Eligible");
        }
    }
}

checkVoting([12, 18, 25, 16, 40]);


// Multiplication revise

function multiplicationTable(num) {

    for (let i = 1; i <= 10; i++) {
        console.log(num + " × " + i + " = " + (num * i));
    }
}

multiplicationTable(5); 



//  some of number loop problem


function sumOfNumbers(N) {
    let sum = 0;

    for (let i = 1; i <= N; i++) {
        sum += i;  
    }

    console.log("Sum of numbers from 1 to " + N + " = " + sum);
}

sumOfNumbers(10);  


// even odd number problem 

function countEvenOdd(N) {
    let evenCount = 0; 
    let oddCount = 0;  

    for (let i = 1; i <= N; i++) {

        if (i % 2 === 0) {
            console.log(i + " is Even");
            evenCount++;
            
        } else {
            console.log(i + " is Odd");
            oddCount++;
        }
    }

    console.log("Total Even Numbers");
    console.log("Total Odd Numbers");
}

countEvenOdd(10); 

// revers count problem

function reverscounting(){
  for(let i = 10; i >= 1; i--){
    console.log(i);
  }
}

reverscounting();

// big maltipication problem

function bigMultiplicationTable(num) {
  
    for (let i = 1; i <= 20; i++) {
        console.log(num + " × " + i + " = " + (num * i));
    }
}

bigMultiplicationTable(7);



// array problem

function findLargestNumber(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    console.log("The largest number is: " + largest);
}

// Test arr
findLargestNumber([12, 45, 7, 89, 23, 56]);



// 10 revies problem ivariable if-else for loop

//problem 1 variable kause krke sum krna

 let a = 10;
 let b = 20;
 let sum = a + b;
   console.log("Sum =", sum);

// problem 2 even odd number chek krna 

  let num = 7;

    if (num % 2 === 0) {
      console.log("Even");

}   else {
      console.log("Odd");
}

// problem 3 bada number print krna 

let x = 15;
let y = 25;

 if (x > y) {
    console.log("Largest =", x);
} else {
    console.log("Largest =", y);
}

// problem 4 for loop se number print 

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// problem 5 multiplya krke tabel print kkrna 

for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}





