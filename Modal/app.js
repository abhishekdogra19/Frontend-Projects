// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalbtn = document.querySelector(".modal-btn");
const modalContainer = document.querySelector(".modal-overlay");
modalbtn.addEventListener("click", function () {
  console.log("Button Clicked");
  modalContainer.classList.add("open-modal");
});
const closeModal = document.querySelector(".close-btn");
closeModal.addEventListener("click", function () {
  console.log("Button Clicked");
  modalContainer.classList.remove("open-modal");
});
