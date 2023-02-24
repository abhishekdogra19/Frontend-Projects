const btn = document.querySelector(".header__btn");
const nav = document.querySelector(".header__nav");
btn.addEventListener("click", function () {
  btn.classList.toggle("clicked");
  nav.classList.toggle("nav--hide");
  console.log("Hi");
});
