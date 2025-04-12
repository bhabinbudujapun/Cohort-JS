const panelElement = document.querySelector(".panel");
const closeBtnElement = document.querySelector(".close-btn");
const toggleBtnElement = document.querySelector(".toggle-btn");

toggleBtnElement.addEventListener("click", () => {
  panelElement.classList.toggle("active");
});

closeBtnElement.addEventListener("click", () => {
  panelElement.classList.remove("active");
});
