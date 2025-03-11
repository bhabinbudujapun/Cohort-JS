// Select all the accordion buttons
const buttonElements = document.querySelectorAll(".accordion-button");

buttonElements.forEach((button) => {
  button.addEventListener("click", function () {
    // Find the corresponding arrow and content for the clicked button
    const arrowElement = this.querySelector(".arrow"); // `this` refers to the clicked button
    const contentElement = this.nextElementSibling; // The sibling <div> with the class 'accordion-content'

    // Toggle the active class for both arrow and content
    arrowElement.classList.toggle("active");
    contentElement.classList.toggle("active");
  });
});
