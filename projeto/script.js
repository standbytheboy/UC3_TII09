let addTask = document.getElementById("addTask");
let list = document.getElementById("list");

addTask.addEventListener("click", () => {
    let tasks = document.getElementById("tasks")
    let text = tasks.value;
    let space = document.createElement("div");
    let newTask = document.createElement("li");
    let newCheck = document.createElement("input");
    let taskText = document.createElement("span"); // chat
    let remove = document.createElement("button");

    space.append(newTask);
    newCheck.type = "checkbox";
    newTask.append(newCheck);

    taskText.innerText = text; // chat
    newTask.append(taskText); // chat
    list.append(newTask);

    remove.className = "btnApagar"
    remove.innerText = "Apagar";
    newTask.append(remove);

    remove.addEventListener("click", () => {
        newTask.remove();
    })


    newCheck.addEventListener("change", () => {
        newTask.classList.toggle("completed", newCheck.checked) // botão checado
    });
})