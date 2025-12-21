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

