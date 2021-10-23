class TaskHandler {
  todoList = document.querySelector(".todo-container #todo-list")

  addNewTask(taskText) {
    const li = document.createElement("li")
    let liCount = document.querySelectorAll("li").length + 1
    li.classList.add("c" + liCount)

    this.appendInputsDivToList(li, liCount, taskText)
    this.appendDeleteBtnDivToList(li, liCount)
  }

  appendInputsDivToList(li, liCount, taskText) {
    // the inputsDiv will hold all input fields of a todo entry and will be appended to the li element
    const inputsDiv = document.createElement("div")
    inputsDiv.classList.add("list-inputs")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")
    checkbox.id = "c" + liCount

    const label = document.createElement("label")
    label.htmlFor = "c" + liCount
    label.textContent = taskText

    inputsDiv.appendChild(checkbox)
    inputsDiv.appendChild(label)
    li.appendChild(inputsDiv)
  }

  appendDeleteBtnDivToList(li, liCount) {
    // add delete button and its wrapper div
    const deleteBtnDiv = document.createElement("div")
    deleteBtnDiv.classList.add("list-delete")

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("noborder-button-delete")
    deleteBtn.classList.add("c" + liCount)
    deleteBtn.textContent = "Delete"

    deleteBtnDiv.appendChild(deleteBtn)
    li.appendChild(deleteBtnDiv)

    this.todoList.appendChild(li)
  }

  removeTask(classCode) {
    // classname from delete buttons will correspond with classnames from li element e.g. c3 = c3
    // this is how the delete button will know which li element to remove.
    const liElement = document.querySelector("." + classCode)
    liElement.remove()

    // deletion causes liCount to potentially cause classname conflicts between two todo items
    this.handleClassNameErrors()
  }

  handleClassNameErrors() {
    // deletion causes liCount to potentially cause classname conflicts between two todo items
    let count = 1
    document.querySelectorAll("li").forEach((listElement) => {
      const deleteBtn = listElement.querySelector(".list-delete button")

      listElement.className = `c${count}`
      listElement.querySelector(".checkbox").id = `c${count}`
      listElement.querySelector("label").htmlFor = `c${count}`
      deleteBtn.classList.replace(deleteBtn.classList[1], `c${count}`)
      count += 1
    })
  }

  // TODO: action will be the parameter sent in by clicking on "all", "active", or "completed"
  filter(action) {
    const checkboxes = document.querySelectorAll(".checkbox")
  }
}

export default TaskHandler
