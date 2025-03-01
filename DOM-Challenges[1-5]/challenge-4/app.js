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
  const li = document.createElement("li");
  li.classList.add("task-item");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = uniqueIdGenerator();

  input.classList.add("complete-checkbox");

  const label = document.createElement("label");
  label.textContent = taskInput.value;
  label.htmlFor = input.id;

  const button = document.createElement("button");
  button.classList.add("delete-button");
  button.style.marginLeft = "auto";
  button.textContent = "Delete";

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(button);

  // Add recent task from the top
  taskList.prepend(li);

  // Add recent task from the bottom
  /*  taskList.appendChild(li); */

  // Clear task input element
  taskInput.value = "";

  // Total Task
  let totalNumberTask = taskList.childElementCount;
  totalTasks.textContent = `Total tasks: ${totalNumberTask}`;

  // Check the checkbox of the task
  const changeOnCheckBox = document.getElementById(input.id);
  changeOnCheckBox.addEventListener("change", () => {
    if (changeOnCheckBox.checked) {
      completedTasksNumber += 1;
      completedTasks.textContent = `Total tasks: ${completedTasksNumber}`;
    } else {
      completedTasksNumber -= 1;
      completedTasks.textContent = `Total tasks: ${completedTasksNumber}`;
    }
  });
});
