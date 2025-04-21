const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

function uniqueIdGenerator() {
  return Date.now();
}

// Completed Tasks
let completedTasksNumber = 0;

// Total number of Tasks
let totalNumberTask = 0;

addButton.addEventListener("click", () => {
  // Check for empty and whitespace value
  if (!taskInput.value.trim().length) return;

  const li = document.createElement("li");
  li.classList.add("task-item");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = uniqueIdGenerator();

  input.classList.add("complete-checkbox");

  const label = document.createElement("label");
  label.textContent = taskInput.value;
  label.htmlFor = input.id;

  // Create div element for input-task
  const divInputTask = document.createElement("div");
  divInputTask.classList.add("input-task");
  divInputTask.appendChild(input);
  divInputTask.appendChild(label);

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.classList.add("edit-button");
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";

  // Create div element for button-task
  const divButtonTask = document.createElement("div");
  divButtonTask.classList.add("button-task");
  divButtonTask.appendChild(editButton);
  divButtonTask.appendChild(deleteButton);

  li.appendChild(divInputTask);
  li.appendChild(divButtonTask);

  // Add recent task from the top
  taskList.prepend(li);

  // Functionality edit task
  editButton.addEventListener("click", () => {
    // Create input element with type text and replace label
    const inputFiled = document.createElement("input");
    inputFiled.type = "text";
    inputFiled.value = label.textContent;
    divInputTask.replaceChild(inputFiled, label);

    // Create Update button
    const updateButton = document.createElement("button");
    updateButton.type = "button";
    updateButton.classList.add("edit-button");
    updateButton.textContent = "Update";

    // Create Cancel button
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.classList.add("delete-button");
    cancelButton.textContent = "Cancel";

    // Hide Edit and Delete buttons
    editButton.style.display = "none";
    deleteButton.style.display = "none";

    divButtonTask.appendChild(updateButton);
    divButtonTask.appendChild(cancelButton);

    // Update Functionality
    updateButton.addEventListener("click", () => {
      // replace input lable into input filed
      label.textContent = inputFiled.value;
      divInputTask.replaceChild(label, inputFiled);

      // display edit and delete buttons
      editButton.style.display = "inline-block";
      deleteButton.style.display = "inline-block";

      // remove update and cancel button
      updateButton.remove();
      cancelButton.remove();
    });

    // Cancel Functionality
    cancelButton.addEventListener("click", () => {
      // replace input field into label
      divInputTask.replaceChild(label, inputFiled);

      // display edit and delete buttons
      editButton.style.display = "inline-block";
      deleteButton.style.display = "inline-block";

      // remove update and cancel buttons
      updateButton.remove();
      cancelButton.remove();
    });
  });

  // Total Task
  totalNumberTask = taskList.childElementCount;
  totalTasks.textContent = `Total tasks: ${totalNumberTask}`;

  // Functionality delete task
  deleteButton.addEventListener("click", () => {
    if (changeOnCheckBox.checked) {
      completedTasksNumber -= 1;
      completedTasks.textContent = `Completed: ${completedTasksNumber}`;
    }
    const liElement = deleteButton.parentElement.parentElement;
    totalNumberTask -= 1;
    totalTasks.textContent = `Total tasks: ${totalNumberTask}`;
    liElement.remove();
  });

  // ** UNCOMMENT ACCORDING TO YOUR REQUIREMENT ***
  // Add recent task from the bottom
  /*  taskList.appendChild(li); */

  // Clear task input element
  taskInput.value = "";

  // Check the checkbox of the task
  const changeOnCheckBox = document.getElementById(input.id);
  changeOnCheckBox.addEventListener("change", () => {
    if (changeOnCheckBox.checked) {
      completedTasksNumber += 1;
    } else {
      completedTasksNumber -= 1;
    }
    completedTasks.textContent = `Completed: ${completedTasksNumber}`;
  });
});
