// Select the parent element
const colorButtonsDiv = document.querySelector(".color-buttons");

// Select the main-heading
const h1 = document.getElementById("mainHeading");

// Add a click event listener to the parent div
colorButtonsDiv.addEventListener("click", (event) => {
  // Check if a button was clicked
  if (event.target.tagName === "BUTTON") {
    // Get the id of clicked button
    const clickedButtonRef = document.getElementById(event.target.id);

    // Extract the Style of element
    const style = window.getComputedStyle(clickedButtonRef);

    // Add a button background-color into main-heading
    h1.style.color = style.backgroundColor;
  }
});
