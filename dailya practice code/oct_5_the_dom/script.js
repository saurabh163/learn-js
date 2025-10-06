// chnge text

document.getElementById("changeBtn").addEventListener("click", function() {

  document.getElementById("myPara").innerText = "Welcome to JavaScript DOM..!"; // change paragraph text when button clicke to this

});


// bg colour 

document.getElementById("bgBtn").addEventListener("click", function() {

  document.body.style.backgroundColor = "lightpink";  /// first i click a boton  after chnge the color bg
});


// alert booton 

document.getElementById("alertBtn").addEventListener("click", function() {

  alert("Hello guy's Welcome to DOM practice....");
});


// input box text show

document.getElementById("showBtn").addEventListener("click", function() {

  const name = document.getElementById("nameInput").value;  //

  document.getElementById("displayText").innerText = "Hello I'm DEV. SAURABH...!";
});


// dubbel click 

document.getElementById("text").addEventListener("dblclick", function() {
  
  document.getElementById("text").style.color = "red";
});
