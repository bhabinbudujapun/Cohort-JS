let addTaskButton = document.getElementById("addTaskButton");

// Selecting task list
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  // Check for valid input like, blank input is not added to task list
  if (inputTask.value.length) {
    // Creating 'li' tag/element
    let taskItem = document.createElement("li");

    // Set Class Name for each new task items
    taskItem.className = "taskItem";

    // Set input text into task item
    let inputTask = document.getElementById("inputTask");
    taskItem.textContent = inputTask.value;

    // Create Edit Button
    let editButton = document.createElement("button");
    editButton.id = "editTaskButton";
    editButton.innerText = "Edit"; // Set Button text
    taskItem.appendChild(editButton);

    // Create Delete Button
    let deleteButton = document.createElement("button");
    deleteButton.id = "deleteTaskButton";
    deleteButton.innerText = "Delete"; // Set Button text
    taskItem.appendChild(deleteButton);

    // Clear All Task At Once
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    // Pre-Append task items
    taskList.prepend(taskItem);

    // Clearing input field
    inputTask.value = "";

    // Edit Funcationality
    let editTaskButton = document.getElementById("editTaskButton");
    editTaskButton.addEventListener("click", () => {
      // Create input field
      let inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = taskItem.childNodes[0].textContent;
      console.log(taskItem.childNodes[0].textContent);

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
        taskItem.textContent = inputField.value;

        taskItem.replaceChild(taskItem.childNodes[0], inputField);

        editButton.style.display = "inline-block";
        deleteButton.style.display = "inline-block";

        cancelButton.remove();
        updateButton.remove();
      });

      // Cancle Functionality
      cancelButton.addEventListener("click", () => {
        taskItem.replaceChild(taskItem.childNodes[0], inputField);

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
