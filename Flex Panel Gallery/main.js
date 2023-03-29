const panels = document.querySelectorAll(".panel");
function toggleOpen() {
  this.classList.toggle("open");
}
function toggleOpenActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((currentPanel) => {
  currentPanel.addEventListener("click", toggleOpen);
});
panels.forEach((currentPanel) => {
  currentPanel.addEventListener("transitionend", toggleOpenActive);
});
