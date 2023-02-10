const sideBar = document.querySelector(".sidebar");
const openBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
openBtn.addEventListener("click", function () {
  console.log("Hi");
  sideBar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  console.log("Hi");
  sideBar.classList.toggle("show-sidebar");
});
