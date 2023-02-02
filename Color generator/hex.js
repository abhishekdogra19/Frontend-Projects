const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const bgColor = document.querySelector(".color");

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

btn.addEventListener("click", function () {
  let colorL = "#";
  for (let i = 0; i < 6; i++) {
    colorL += hex[randomNumber(hex)];
  }
  document.body.style.backgroundColor = colorL;
  bgColor.textContent = colorL;
});
