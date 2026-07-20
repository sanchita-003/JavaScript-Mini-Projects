let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        name: task,
        completed: false
    });

    input.value = "";

    saveTasks();
    displayTasks();
}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        if (tasks[i].completed) {
            li.style.textDecoration = "line-through";
        }

        li.innerHTML = `
            ${tasks[i].name}

            <button onclick="completeTask(${i})">
                ${tasks[i].completed ? "Undo" : "Complete"}
            </button>

            <button onclick="editTask(${i})">
                Edit
            </button>

            <button onclick="deleteTask(${i})">
                Delete
            </button>
        `;

        list.appendChild(li);
    }

}

function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    displayTasks();

}

function editTask(index) {

    let updatedTask = prompt("Edit Task", tasks[index].name);

    if (updatedTask != null && updatedTask.trim() != "") {

        tasks[index].name = updatedTask.trim();

        saveTasks();
        displayTasks();

    }

}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();
    displayTasks();

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}