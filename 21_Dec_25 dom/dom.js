document.getElementById("btn").onclick = function () {
  document.getElementById("text").innerText = "Text Changed!";
};

document.getElementById("toggle").onclick = function () {
  let box = document.getElementById("box");
  box.style.display = box.style.display === "none" ? "block" : "none";
};

document.getElementById("input").addEventListener("input", function () {
  document.getElementById("preview").innerText = this.value;
});

document.getElementById("colorBtn").onclick = function () {
  document.body.style.background = "#e0f2fe";
};

document.getElementById("add").onclick = function () {
  let li = document.createElement("li");
  li.innerText = "New Item";
  document.getElementById("list").appendChild(li);
};
