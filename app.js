const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (item) {
  const id = item.target.dataset.id;
  if (id) {
    btns.forEach(function (e) {
      e.classList.remove("active");
    });
    item.target.classList.add("active");
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
