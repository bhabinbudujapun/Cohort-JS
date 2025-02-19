let addTaskButton = document.getElementById("addTaskButton");

addTaskButton.addEventListener("click", () => {
  // Selecting task list
  let taskList = document.getElementById("taskList");

  // Creating 'li' tag/element
  let taskItem = document.createElement("li");

  // Set Class Name for each new task items
  taskItem.className = "taskItem";

  // Set input text into task item
  let inputTask = document.getElementById("inputTask");
  taskItem.textContent = inputTask.value;

  // Clearing input field
  inputTask.value = "";

  // And at last adding task item in task list

  taskList.appendChild(taskItem);
});
