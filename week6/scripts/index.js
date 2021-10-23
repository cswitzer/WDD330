import TaskHandler from "../Modules/toDo.js"

const taskHandler = new TaskHandler()

const addTaskBtn = document.querySelector(".noborder-button-add")
const addTaskText = document.querySelector("#add-text-container input")
let todoList = document.querySelector("#todo-list")
let rootElement = document.querySelector("body")

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
