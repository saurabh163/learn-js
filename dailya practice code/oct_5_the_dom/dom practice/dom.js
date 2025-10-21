
// one click text show 

const msg = document.getElementById("msg");
const btn = document.getElementById("showBtn");

btn.addEventListener("click", function() {
  msg.style.display = "block";
});


// bg colour change //

const Btn = document.getElementById("bgBtn");

Btn.addEventListener("click", function() {
  document.body.style.backgroundColor = "pink";
});



// show result //

const result = document.getElementById("sum");
const bTn = document.getElementById("addBtn");

bTn.addEventListener("click", function() {
  result.innerText = "Result: " + (5 + 10);
});
