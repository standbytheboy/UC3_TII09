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

    if (!text) {
        alert("Digite uma tarefa válida!");
        tasks.focus();
        return;
    }

    tasks.value = "";
    tasks.focus();

    newCheck.type = "checkbox";
    space.append(newCheck);
    space.append(taskText);
    newTask.append(space);

    taskText.innerText = text; // chat
    list.append(newTask);

    remove.className = "btnApagar"
    remove.innerText = "Apagar";
    newTask.append(remove);

    remove.addEventListener("click", () => {
        newTask.remove();
    })


    newCheck.addEventListener("change", () => {
        taskText.classList.toggle("completed", newCheck.checked) // botão checado
    });

})

tasks.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addTask.click();
    }
});