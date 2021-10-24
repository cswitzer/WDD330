import TaskHandler from "../Modules/toDo.js"
import { saveToLocalStorage, extractFromLocalStorage } from "../Modules/ls.js"

const taskHandler = new TaskHandler()

const addTaskBtn = document.querySelector(".noborder-button-add")
const addTaskText = document.querySelector("#add-text-container input")
const allTasksBtn = document.querySelector("#all")
const activeTasksBtn = document.querySelector("#active")
const completedTasksBtn = document.querySelector("#completed")
const checkboxes = document.getElementsByClassName("checkbox")
let todoList = document.querySelector("#todo-list")

addTaskBtn.addEventListener("click", (e) => {
  taskHandler.addNewTask(addTaskText.value)

  saveToLocalStorage()
})

// add event listeners for all classes of "noborder-button-delete"
// event bubbling is used here so event listeners will be added when addTaskBtn event triggers
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("noborder-button-delete")) {
    taskHandler.removeTask(e.target.classList[1])
    // reset what is saved to localstorage
    saveToLocalStorage()
  }
})

allTasksBtn.addEventListener("click", () => {
  taskHandler.filter("all")
  Array.prototype.forEach.call(checkboxes, (checkbox) => {
    if (checkbox.checked) {
    }
  })
})

activeTasksBtn.addEventListener("click", () => {
  taskHandler.filter("active")
})

completedTasksBtn.addEventListener("click", () => {
  taskHandler.filter("completed")
})

// save all data to local storage before page refreshes
window.addEventListener("beforeunload", () => {
  saveToLocalStorage()
})

window.addEventListener("load", () => {
  extractFromLocalStorage()
  localStorage.clear() // clear local storage to prevent duplicate todo's
})
