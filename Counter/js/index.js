let num = document.getElementById("counter-num");
let count = 0;
function increment() {
  count += 1;
  num.textContent = count;
}
function decrement() {
  if (count !== 0) {
    count -= 1;
    num.textContent = count;
  }
}
let data = "";
let dataEntry = document.getElementById("dataEntry");
function save() {
  if (data === "") {
    data = data + count;
  } else if (data === "----NIL----") {
    data = "";
    data = data + count;
  } else {
    data = data + " - " + count;
  }
  dataEntry.textContent = data + "  ";
}
function reset() {
  count = 0;
  num.textContent = count;
}
function cleaar() {
  data = "----NIL----";
  dataEntry.textContent = data;
}
