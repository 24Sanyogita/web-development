document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add a new task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        // Delete a task
        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });
    });

    // Press Enter to add a task
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
