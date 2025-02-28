const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

document.addEventListener("input", () => {
  nameDisplay.textContent = nameInput.value;
  jobDisplay.textContent = jobInput.value;
  ageDisplay.textContent = ageInput.value;
  bioDisplay.textContent = bioInput.value;
});
