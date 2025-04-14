let addTaskButton = document.getElementById("addTaskButton");

// Selecting task list
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  // Check for valid input like, blank input is not added to task list
  if (inputTask.value.length) {
    // Creating 'div' element
    let div = document.createElement("div");
    div.className = 'buttons'

    // Creating 'li' tag/element
    let taskItem = document.createElement("li");
    taskItem.className = "taskItem"; // Set Class Name

    // Create Span Element
    const spanField = document.createElement("span");
    spanField.className = "taskText";
    let inputTask = document.getElementById("inputTask"); // Selecting input Field
    spanField.textContent = inputTask.value; // Set user input value
    taskItem.appendChild(spanField);

    // Create Edit Button
    let editButton = document.createElement("button");
    editButton.id = "editTaskButton";
    editButton.innerText = "Edit"; // Set Button text
    div.appendChild(editButton);
    taskItem.appendChild(div);

    // Create Delete Button
    let deleteButton = document.createElement("button");
    deleteButton.id = "deleteTaskButton";
    deleteButton.innerText = "Delete"; // Set Button text
    div.appendChild(deleteButton);
    taskItem.appendChild(div);

    // Pre-Append task items
    taskList.prepend(taskItem);

    // Clearing input field
    inputTask.value = "";

    // Clear All Task At Once
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    // Edit Funcationality
    let editTaskButton = document.getElementById("editTaskButton");
    editTaskButton.addEventListener("click", () => {
      // Create input field
      let inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = taskItem.childNodes[0].textContent;

      // Store the original text content
      let originalText = taskItem.childNodes[0].textContent;

      // Replace text with input field
      taskItem.replaceChild(inputField, taskItem.childNodes[0]);

      // Hide edit and delete button
      editButton.style.display = "none";
      deleteButton.style.display = "none";

      // Create Update Button
      let updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.id = "updateButton";

      // Create Cancel Button
      let cancelButton = document.createElement("button");
      cancelButton.textContent = "Cancel";
      cancelButton.id = "cancelButton";

      // Add New Buttons
      taskItem.appendChild(updateButton);
      taskItem.appendChild(cancelButton);

      // Update Functionality
      updateButton.addEventListener("click", () => {
        // Restore the original task text
        spanField.textContent = inputField.value;

        // Replce the input field with the updated tast text span
        inputField.replaceWith(spanField);

        editButton.style.display = "inline-block";
        deleteButton.style.display = "inline-block";

        cancelButton.remove();
        updateButton.remove();
      });

      // Cancle Functionality
      cancelButton.addEventListener("click", () => {
        // Restore the original task text
        spanField.textContent = inputField.value;

        // Replce the input field with the original tast text span
        inputField.replaceWith(spanField);

        editButton.style.display = "inline-block";
        deleteButton.style.display = "inline-block";

        cancelButton.remove();
        updateButton.remove();
      });
    });
  }
});

// Clear all task
let clearTaskButton = document.getElementById("clearTaskButton");

clearTaskButton.addEventListener("click", () => {
  taskList.replaceChildren();
});
