const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// let futureDate = new Date(2023, 2, 17, 11, 26, 00);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
console.log(futureDate);
const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

console.log(`${day} ${date} ${month} ${year}, ${hour}:${minutes}`);
if (hour > 12) {
  giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year}, ${hour}:${minutes}pm`;
} else {
  giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year}, ${hour}:${minutes}am`;
}
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const currDate = new Date().getTime();
  // console.log(currDate);
  t = futureTime - currDate;

  const oneDay = 24 * 60 * 60 * 1000;
  const onehr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / onehr);
  let minutes = Math.floor((t % onehr) / oneMin);
  let seconds = Math.floor((t % oneMin) / oneSec);

  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  items.forEach(function (items, index) {
    items.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Giveaway is closed</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
