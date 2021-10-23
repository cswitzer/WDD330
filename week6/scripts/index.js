import TaskHandler from "../Modules/toDo.js"

const taskHandler = new TaskHandler()

const addTaskBtn = document.querySelector(".noborder-button-add")
const addTaskText = document.querySelector("#add-text-container input")
const allTasksBtn = document.querySelector("#all")
const activeTasksBtn = document.querySelector("#active")
const completedTasksBtn = document.querySelector("#completed")
let todoList = document.querySelector("#todo-list")

// adds a new task when "Add" button is clicked
addTaskBtn.addEventListener("click", (e) => {
  taskHandler.addNewTask(addTaskText.value)
})

// add event listeners for all classes of "noborder-button-delete"
// event bubbling is used here so event listeners will be added when addTaskBtn event triggers
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("noborder-button-delete")) {
    taskHandler.removeTask(e.target.classList[1])
  }
})

allTasksBtn.addEventListener("click", () => {
  taskHandler.filter("all")
})

activeTasksBtn.addEventListener("click", () => {
  taskHandler.filter("active")
})

completedTasksBtn.addEventListener("click", () => {
  taskHandler.filter("completed")
})
