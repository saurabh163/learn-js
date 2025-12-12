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

function dark() {
  document.body.style.background = "#111";
  document.body.style.color = "white";
}

function add() {
  let li = document.createElement("li");
  li.innerText = "New Item";
  document.getElementById("list").appendChild(li);
}

function del() {
  document.getElementById("remove").remove();
}

let btn = document.getElementById("btn");

btn.addEventListener("mouseover", function () {
  btn.style.background = "orange";
});

btn.addEventListener("mouseout", function () {
  btn.style.background = "lightgray";
});

let count = 0;

function inc() {
  count++;
  document.getElementById("out").innerText = count;
}

function dec() {
  count--;
  document.getElementById("out").innerText = count;
}

function big() {
  document.getElementById("text").style.fontSize = "30px";
}
function small() {
  document.getElementById("text").style.fontSize = "14px";
}

function toggle() {
  let b = document.getElementById("box");
  b.style.display = b.style.display === "none" ? "block" : "none";
}

function add() {
  let x = Number(document.getElementById("a").value);
  let y = Number(document.getElementById("b").value);
  document.getElementById("ans").innerText = x + y;
}

document.getElementById("inp").addEventListener("input", function () {
  document.getElementById("live").innerText = this.value;
});

let dark = false;

function toggleBG() {
  if (!dark) {
    document.body.style.background = "black";
    document.body.style.color = "white";
    dark = true;
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
    dark = false;
  }
}

document.getElementById("txt").addEventListener("input", function () {
  document.getElementById("count").innerText = this.value.length;
});
