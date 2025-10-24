
// check field empty //

function checkEmpty() {
  let name = document.getElementById("username").value;
  if (name === "") {
    document.getElementById("message").innerText = "Please enter your name!";
    return false; // form will not submit 

  } else {
    document.getElementById("message").innerText = "Form submitted!";
    return true;
  }
}




// check mail 


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



//  password length //
 
function validatePassword() {
  let password = document.getElementById("pass").value;
  if (password.length < 6) {
    document.getElementById("output").innerText = "Password too short!";
    return false;
  }
  document.getElementById("output").innerText = "Password accepted!";
  return true;
}



// conform password match //

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


// number input validation //

function checkNumber() {
  let value = document.getElementById("num").value;
  if (isNaN(value)) {
    document.getElementById("result").innerText = "Only numbers allowed ";
    return false;
  } else {
    document.getElementById("result").innerText = "Valid number ";
    return true;
  }
}
