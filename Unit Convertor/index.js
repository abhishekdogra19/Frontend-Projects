const lengthpEL = document.getElementById("length-pEl");
const volumepEL = document.getElementById("volume-pEl");
const masspEL = document.getElementById("mass-pEl");
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
convertBtn.addEventListener("click", function () {
  const num = inputEl.value;
  lengthpEL.textContent = `${num} meters = ${(num * 3.28084).toFixed(
    2
  )} feet | ${num} feet = ${(num * 0.3048).toFixed(2)} meters`;
  volumepEL.textContent = `${num} liters = ${(num * 0.264172).toFixed(
    2
  )} gallons | ${num} gallons = ${(num * 3.78541).toFixed(2)} liters`;
  masspEL.textContent = `${num} kilos = ${(num * 2.20462).toFixed(
    2
  )} pounds | ${num} pounds = ${(num * 0.453592).toFixed(2)} kilos`;
});
