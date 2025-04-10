const panelElement = document.querySelector(".panel");
const closeBtnElement = document.querySelector(".close-btn");
const toggleBtnElement = document.querySelector(".toggle-btn");

toggleBtnElement.addEventListener("click", () => {
  panelElement.classList.toggle("active");
  if (panelElement.classList.contains("active")) {
    panelElement.style.right = "0px";
  } else {
    panelElement.style.right = "-360px";
  }
  console.log(panelElement);
});

closeBtnElement.addEventListener("click", () => {
  panelElement.classList.remove("active");
  panelElement.style.right = "-360px";
});
