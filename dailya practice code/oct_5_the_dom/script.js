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

document.getElementById("texts").addEventListener("dblclick", function() {

  document.getElementById("texts").style.color = "red";
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

document.getElementById("addBtns").addEventListener("click", function() {
  const para = document.createElement("p");
  para.innerText = "my gf is ur crush ....😂😂😂😂";
  document.getElementById("container").appendChild(para);
});


// font size increase decrease

const text = document.getElementById("text");
let fontSize = 16;

document.getElementById("increase").addEventListener("click", function() {
  fontSize += 2;
  text.style.fontSize = fontSize + "px";
});

document.getElementById("decrease").addEventListener("click", function() {
  fontSize -= 2;
  text.style.fontSize = fontSize + "px";
});



// add more fruit

document.getElementById("addBtn").addEventListener("click", function() {

  const fruitName = prompt("Enter fruit name:");

  if (fruitName) {
    const li = document.createElement("li");

    li.innerText = fruitName;

    document.getElementById("fruitList").appendChild(li);
  }
});


/// random emoji  

const emojiDisplay = document.getElementById("emojiDisplay");

emojiBtn.addEventListener("click", function() {
  const emojis = ["😀","😂","😍","😎","🤩"];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  
  emojiDisplay.innerText = emojis[randomIndex];

  const randomSize = Math.floor(Math.random() * 50) + 50;   // Font size random change krne ke liy
  emojiDisplay.style.fontSize = randomSize + "px";
});


/// dubbel click bg colour change 


const dblBtn = document.getElementById("dblBtn");

dblBtn.addEventListener("dblclick", function() {
  const colors = ["pink", "lightgreen", "orange", "purple", "yellow"];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  document.body.style.backgroundColor = randomColor;
});

// keybord booton 

const keyDisplay = document.getElementById("keyDisplay");

document.addEventListener("keydown", function(event) {
  keyDisplay.innerText = "You pressed: " + event.key;
  
});

// bg color chnge 

document.body.style.backgroundColor = "yellow";

