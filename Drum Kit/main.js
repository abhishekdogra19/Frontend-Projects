function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //it will set the current time of sound to 0
  key.classList.add("playing");
  audio.play();
}
// function removeTransition(key) {
//   if (key.propertyName !== "transform") return;
//   console.log(key);
//   console.log(key.target.classList.remove("playing"));
// }
// const keys = document.querySelectorAll(".key");
// keys.forEach(function (key) {
//   key.addEventListener("transitionend", removeTransition);
// });
window.addEventListener("keydown", playSound);
window.addEventListener("keyup", function (e) {
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
});
