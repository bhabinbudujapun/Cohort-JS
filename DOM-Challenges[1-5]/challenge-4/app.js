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

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.classList.add("edit-button");
  editButton.textContent = "Edit";

  // Create div element for button-task
  const divButtonTask = document.createElement("div");
  divButtonTask.classList.add("button-task");
  divButtonTask.appendChild(editButton);
  divButtonTask.appendChild(deleteButton);

  li.appendChild(divInputTask);
  li.appendChild(divButtonTask);

  // Add recent task from the top
  taskList.prepend(li);

  // Add recent task from the bottom
  /*  taskList.appendChild(li); */

  // Clear task input element
  taskInput.value = "";

  // Total Task
  let totalNumberTask = taskList.childElementCount;
  totalTasks.textContent = `Total tasks: ${totalNumberTask}`;

  // Delete functionality
  deleteButton.addEventListener("click", () => {
    deleteButton.parentElement.parentElement.remove();
    totalNumberTask -= 1;
    
    totalTasks.textContent = `Total tasks: ${totalNumberTask}`;
  });

  // Edit functionality
  editButton.addEventListener("click", () => {
    console.log("edit");
  });

  // Check the checkbox of the task
  const changeOnCheckBox = document.getElementById(input.id);
  changeOnCheckBox.addEventListener("change", () => {
    if (changeOnCheckBox.checked) {
      completedTasksNumber += 1;
      completedTasks.textContent = `Completed: ${completedTasksNumber}`;
    } else {
      completedTasksNumber -= 1;
      completedTasks.textContent = `Completed: ${completedTasksNumber}`;
    }
  });
});
