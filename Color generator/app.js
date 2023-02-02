const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const bgColor = document.querySelector(".color");

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

btn.addEventListener("click", function () {
  const color = colors[randomNumber(colors)];
  document.body.style.backgroundColor = color;
  bgColor.textContent = color;
});
