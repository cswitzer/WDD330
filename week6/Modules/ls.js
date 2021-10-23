import htmlEncode from "./utilities.js"

const saveToLocalStorage = () => {
  const todoList = document.querySelector("#todo-list")
  const todoListHTML = document.querySelector("#todo-list").innerHTML
  // saved checked state of each checkbox
  localStorage.setItem("todoList", todoListHTML)
}

const extractFromLocalStorage = () => {
  const todoList = document.querySelector("#todo-list")
  const liElements = localStorage.getItem("todoList")
  const liElementsHTML = htmlEncode(liElements)
  todoList.append(...liElementsHTML)
}

export { saveToLocalStorage, extractFromLocalStorage }
