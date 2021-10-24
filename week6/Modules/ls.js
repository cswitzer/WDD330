import htmlEncode from "./utilities.js"

const saveToLocalStorage = () => {
  const todoList = document.querySelector("#todo-list")
  const checkboxes = todoList.getElementsByClassName("checkbox")

  // save checked status in localstorage
  Array.prototype.forEach.call(checkboxes, (checkbox) => {
    if (checkbox.checked) {
      checkbox.setAttribute("checked", "checked")
    } else if (!checkbox.checked) {
      checkbox.removeAttribute("checked")
    }
  })

  const todoListHTML = document.querySelector("#todo-list").innerHTML

  localStorage.setItem("todoList", todoListHTML)
}

const extractFromLocalStorage = () => {
  const todoList = document.querySelector("#todo-list")
  const liElements = localStorage.getItem("todoList")
  const liElementsHTML = htmlEncode(liElements)
  todoList.append(...liElementsHTML)
}

export { saveToLocalStorage, extractFromLocalStorage }
