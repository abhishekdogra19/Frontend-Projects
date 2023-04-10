const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");
function setDate() {
  const curr = new Date();
  const sec = curr.getSeconds();
  const secDeg = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDeg}deg)`;
  const min = curr.getMinutes();
  const minDeg = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  const hr = curr.getHours();
  const hrDeg = (hr / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hrDeg}deg)`;
}
setInterval(setDate, 1000);
setDate();
