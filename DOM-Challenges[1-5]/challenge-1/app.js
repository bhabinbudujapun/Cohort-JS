const toggleButton = document.getElementById("toggleButton");
const bodyElement = document.body;
const bulbElement = document.getElementById("bulb");
const statusElement = document.getElementById("status");

toggleButton.addEventListener("click", () => {
  // Toggle dark moode
  const isDarkMode = bodyElement.classList.toggle("dark-mode");

  // Toggle bulb state
  bulbElement.classList.toggle("off");

  // Update status text
  statusElement.textContent = `Status: ${isDarkMode ? "On" : "Off"}`;
});
