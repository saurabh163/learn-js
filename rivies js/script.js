
// problem 01 //

let nUm = -5;

if (num > 0) {
  console.log("Number is Positive");
} else {
  console.log("Number is Negative");
}


// problem 2 //

let age = 16;

if (age >= 18) {
  console.log("You are an Adult");
} else {
  console.log("You are a Minor");
}



 // problem 03 //

 let num = 11;

if (num % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}




// problem 04 //

let a = 10;
let b = 25;

if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}



// problem 05 //

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome Back!");
} else {
  console.log("Please Login");
}




///  problem 06 //

let marks = 33;

if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}




 /// problem 07 //


 let total = 600;

if (total > 500) {
  console.log("You got 10% discount!");
} else {
  console.log("No discount available");
}



//problem 08 //


let Num = 0;

if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Number is Zero");
}


// problem 09 //


let correctPassword = "12345";
let userInput = "12345";

if (userInput === correctPassword) {
  console.log("Login Successful ");
} else {
  console.log("Incorrect Password ");
}


// problem 10 //

let year = 2024;

if (year % 4 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}



// problem 11 //


let Marks = 72;

if (marks >= 90) {
  console.log("Grade: A");

} else if (marks >= 75) {
  console.log("Grade: B");

} else if (marks >= 50) {
  console.log("Grade: C");

} else {
  console.log("Fail");
}



// problem 12 // 

let Age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can vote ");
} else {
  console.log("You cannot vote ");
}


// problem 13 //

let chintuHomework = false;

if (chintuHomework) {
  console.log("Good job Chintu ");

} else {
  console.log("Chintu go do your homework ");
}


// problem 14//

let babluMarks = 80;

if (babluMarks >= 60) {
  console.log("Bablu gets samosa treat ");

} else {
  console.log("No samosa for Bablu ");
}


// problem 15 //

let gudduAge = 13;
let hasPermissionSlip = true;

if (gudduAge >= 12 && hasPermissionSlip) {
  console.log("Guddu can go to picnic ");
} else {
  console.log("Stay home Guddu ");
}


// problem 16 //

let pappuBattery = 15;

if (pappuBattery < 20) {
  console.log("Pappu, charge your phone ");

} else {
  console.log("Battery is fine ");
}


// problem 17 //

let montyAge = 15;
let withParents = false;

if (montyAge >= 18 || withParents) {
  console.log("Monty can watch movie ");

} else {
  console.log("Monty not allowed ");
}


//  problem 18 //

let buntyWifi = false;
let buntyMobileData = true;

if (buntyWifi || buntyMobileData) {
  console.log("Bunty is online ");

} else {
  console.log("Bunty is offline ");
}


// problem 19 //

let pinkyMoney = 40;
let iceCreamPrice = 35;

if (pinkyMoney >= iceCreamPrice) {
  console.log("Pinky bought ice-cream ");

} else {
  console.log("Pinky needs more money ");
}



// problem 20 //

let lalluRuns = 25;
let lalluCatch = true;

if (lalluRuns > 20 && lalluCatch) {
  console.log("Lallu selected in cricket team ");

} else {
  console.log("Try again next time Lallu ");
}


// problem 21 //

let ovenTemp = 180;
let cakeTime = 30;

if (ovenTemp >= 180 && cakeTime >= 30) {
  console.log("Cake is ready ");

} else {
  console.log("Wait thoda aur Dolly ");
}


// problem 22 //

let rajuBattery = 100;
let chargingPlugged = false;

if (rajuBattery < 30 && !chargingPlugged) {
  console.log("Raju plug in your charger ");
  
} else {
  console.log("All good Raju ");
}



// problem 23 //

let numbRs = [10, 20, 30, 40, 50];

for (let i = numbRs.length - 1; i >= 0; i--) {
    console.log(numbRs[i]);
}


// problem 24 //

function validateEmail() {
  let email = document.getElementById("email").value;
  if (!email.includes("@")) {
    document.getElementById("msg").innerText = "Invalid email!";
    return false;
  } else {
    document.getElementById("msg").innerText = "Valid email!";
    return true;
  }
}



// problem 25 //

function checkMatch() {
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;

  if (p1 !== p2) {
    document.getElementById("msg").innerText = "Passwords do not match";
    return false;
  }
  document.getElementById("msg").innerText = "Passwords match ";
  return true;
}


// problem 26 //

function allCheck() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  if (n === "" || e === "" || p === "") {
    document.getElementById("alert").innerText = "All fields are required!";
    return false;
  }
  document.getElementById("alert").innerText = "Form submitted successfully!";
  return true;
}



// problem 27  //

function togglePass() {
  let p = document.getElementById("pass");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}



// problem 28  //

function showAlert() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  if (u === "" || p === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}



// problem 29 //

function highlightEmpty() {
  let n = document.getElementById("n");
  let e = document.getElementById("e");
  let valid = true;

  if (n.value === "") {
    n.style.border = "2px solid red";
    valid = false;
  } else {
    n.style.border = "2px solid green";
  }

  if (e.value === "") {
    e.style.border = "2px solid red";
    valid = false;
  } else {
    e.style.border = "2px solid green";
  }

  return valid;
}