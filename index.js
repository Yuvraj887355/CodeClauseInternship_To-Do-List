document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Add task function
    window.addTask = function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create new task element
            const newTask = document.createElement("li");
            newTask.innerHTML = `
                <span>${taskText}</span>
                <button onclick="removeTask(this)">Remove</button>
            `;

            // Append new task to the task list
            taskList.appendChild(newTask);

            // Clear input field
            taskInput.value = "";
        }
    };

    // Remove task function
    window.removeTask = function (button) {
        const taskItem = button.parentNode;
        taskList.removeChild(taskItem);
    };
});
