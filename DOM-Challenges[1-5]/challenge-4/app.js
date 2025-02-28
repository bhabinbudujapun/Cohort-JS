const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

addButton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.classList.add("task-item");

  const input = document.createElement("input");
  input.classList.add("complete-checkbox");

  const span = document.createElement("span");
  span.textContent = taskInput.value;

  const button = document.createElement("button");
  button.classList.add("delete-button");
  button.style.marginLeft = "auto";
  button.textContent = "Delete";

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  taskList.appendChild(li);

  taskInput.value = "";
});
