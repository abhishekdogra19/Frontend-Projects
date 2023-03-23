const controls = document.querySelectorAll(".controls input");
function updateValue() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  console.log(this.value + suffix);
}
controls.forEach((input) => {
  input.addEventListener("change", updateValue);
});
controls.forEach((input) => {
  input.addEventListener("mousemove", updateValue);
});
