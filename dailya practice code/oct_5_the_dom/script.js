// chnge text

document.getElementById("changeBtn").addEventListener("click", function() {

  document.getElementById("myPara").innerText = "Welcome to JavaScript DOM..!"; // change paragraph text when button clicke to this

});


// bg colour 

document.getElementById("bgBtn").addEventListener("click", function() {

  document.body.style.backgroundColor = "gray";  /// first i click a boton  after chnge the color bg
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


// change img

const img = document.getElementById("myImg");

img.addEventListener("mouseover", function() {
  img.src = "mygf.jpg";
});

img.addEventListener("mouseout", function() {
  img.src = "myprofile.jpg";
});



// change pargraph

document.getElementById("addBtn").addEventListener("click", function() {
  const para = document.createElement("p");
  para.innerText = "my gf is ur crush ....😂😂😂😂";
  document.getElementById("container").appendChild(para);
});
