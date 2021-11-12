const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging")
  })

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging")
  })
})

// add eventlistener for each container to process something dragging over it
containers.forEach((container) => {
  container.addEventListener("dragover", () => {
    const draggable = document.querySelector(".dragging")
    // switch draggable grid-item-# classes to mimic switching places
    const draggableGridNum = draggable.classList[0]
    const containerGridNum = container.classList[0]

    // swap the grid-item-# classes here
    draggable.classList.replace(draggableGridNum, containerGridNum)
    container.classList.replace(containerGridNum, draggableGridNum)
  })
})
