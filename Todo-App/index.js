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

    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    // And at last adding task item in task list
    taskList.prepend(taskItem);

    // Clearing input field
    inputTask.value = "";

    let editTaskButton = document.getElementById("editTaskButton");
    editTaskButton.addEventListener("click", () => {
      console.log(editTaskButton.parentElement);
    });
  }
});

// Clear all task
let clearTaskButton = document.getElementById("clearTaskButton");

clearTaskButton.addEventListener("click", () => {
  taskList.replaceChildren();
});
