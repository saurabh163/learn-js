function changeText() {
  document.getElementById("title").innerText = "Heading Updated!";
}

function changeBG() {
  document.body.style.background = "lightblue";
}

function showText() {
  document.getElementById("demo").style.display = "block";
}

let num = 0;
function plus() {
  num++;
  document.getElementById("count").innerText = num;
}

function show() {
  let value = document.getElementById("user").value;
  document.getElementById("result").innerText = "Hello " + value;
}
