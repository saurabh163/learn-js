
// massage show //

const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", function() {
  msg.textContent = "Hello Bro I'm lernning event handling ";
});




// box color change //

const box = document.getElementById("box");

box.addEventListener("dblclick", function() {
  box.style.backgroundColor = "yellow";
});




// mouse hover //

const text = document.getElementById("text");

text.addEventListener("mouseover", function() {
  text.textContent = "laern mouse over event";
});

text.addEventListener("mouseout", function() {
  text.textContent = "Hover on me";
});