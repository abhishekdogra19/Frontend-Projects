let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("sum");
function add() {
  result.textContent =
    "Sum : " + (parseInt(num1.textContent) + parseInt(num2.textContent));
}
function sub() {
  result.textContent =
    "Sum : " + (parseInt(num1.textContent) - parseInt(num2.textContent));
}
function mul() {
  result.textContent =
    "Sum : " + parseInt(num1.textContent) * parseInt(num2.textContent);
}
