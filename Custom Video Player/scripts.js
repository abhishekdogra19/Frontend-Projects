const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
/*Build our functions */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
  console.log(icon);
}

function updateRange() {
  video[this.name] = this.value;
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
  console.log(video.currentTime);
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
ranges.forEach((range) => {
  range.addEventListener("change", updateRange);
});
ranges.forEach((range) => {
  range.addEventListener("mousemove", updateRange);
});
skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => {
  mouseDown && scrub(e);
});

let mouseDown = false;
progress.addEventListener("mousedown", () => {
  mouseDown = true;
});
progress.addEventListener("mouseup", () => {
  mouseDown = false;
});
progress.addEventListener("mouseout", () => {
  mouseDown = false;
});
