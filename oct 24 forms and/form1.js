
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
