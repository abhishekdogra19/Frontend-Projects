// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggler = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggler.addEventListener("click", function () {
  const linkContainerHeight = linkContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (linkContainerHeight === 0) {
    linkContainer.style.height = `${linksHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
  // console.log(linkContainerHeight, linksHeight);
});
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topBtn = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight >= 500) {
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (links) {
  links.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const navHeight = navbar.getBoundingClientRect().height;
    const navFixed = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!navFixed) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkContainer.style.height = 0;
  });
});
