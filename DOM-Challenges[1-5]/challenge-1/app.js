const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  // Select 'body' id and toggle the 'dark-mode' class
  const bodyElement = document.getElementById("body");
  bodyElement.classList.toggle("dark-mode");

  // Select 'bulb' id and toggle the 'off' class
  const bulbElement = document.getElementById("bulb");
  bulbElement.classList.toggle("off");

  // Select 'status' id and
  const statusElement = document.getElementById("status");
  if (statusElement.textContent === "Status: Off") {
    statusElement.textContent = "Status: On";
  } else {
    statusElement.textContent = "Status: Off";
  }
});
