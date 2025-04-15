document.getElementById("addTaskButton").addEventListener("click", () => {
  const inputTask = document.getElementById("inputTask");
  const taskList = document.getElementById("taskList");

  if (!inputTask.value.trim()) return;

  // Create task item container
  const taskItem = document.createElement("li");
  taskItem.className = "taskItem";

  // Task text span
  const spanField = document.createElement("span");
  spanField.className = "taskText";
  spanField.textContent = inputTask.value;
  taskItem.appendChild(spanField);

  // Buttons container
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";

  // Edit Button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  buttonsDiv.appendChild(editButton);

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  buttonsDiv.appendChild(deleteButton);

  taskItem.appendChild(buttonsDiv);
  taskList.prepend(taskItem);
  inputTask.value = "";

  // Delete functionality
  deleteButton.addEventListener("click", () => {
    taskItem.remove();
  });

  // Edit functionality
  editButton.addEventListener("click", () => {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = spanField.textContent;

    taskItem.replaceChild(inputField, spanField);
    editButton.style.display = "none";
    deleteButton.style.display = "none";

    // Update button
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    
    // Cancel button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    buttonsDiv.appendChild(updateButton);
    buttonsDiv.appendChild(cancelButton);

    // Update functionality
    updateButton.addEventListener("click", () => {
      spanField.textContent = inputField.value;
      taskItem.replaceChild(spanField, inputField);
      editButton.style.display = "inline-block";
      deleteButton.style.display = "inline-block";
      updateButton.remove();
      cancelButton.remove();
    });

    // Cancel functionality
    cancelButton.addEventListener("click", () => {
      taskItem.replaceChild(spanField, inputField);
      editButton.style.display = "inline-block";
      deleteButton.style.display = "inline-block";
      updateButton.remove();
      cancelButton.remove();
    });
  });
});

// Clear all tasks
document.getElementById("clearTaskButton").addEventListener("click", () => {
  document.getElementById("taskList").replaceChildren();
});
