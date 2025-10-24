
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
