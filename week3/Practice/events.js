// current way to add event listeners
const button = document.querySelector("#button")
const textDiv = document.querySelector("#textdiv")
button.addEventListener("click", () => (textDiv.innerHTML = "<h2>Goodbye</h2>"))
textDiv.addEventListener("mouseover", () => console.log("You hovered over me!"))

// get event coordinates using event object
document.body.addEventListener("click", (e) => {
  console.log(
    `screen: (${e.screenX},${e.screenY}), page: (${e.pageX},${e.pageY}), client: (${e.screenX},${e.screenY})`
  )
})

addEventListener("keyup", (event) =>
  console.log(`You stopped pressing the key on ${new Date()}`)
)

addEventListener("keypress", (event) =>
  console.log(`You pressed the ${event.key} character`)
)

// don't forget about touch events for smartphone and tablet users
addEventListener("touchend", () => console.log("Touch stopped"))
// touchmove, touchenter, touchleave, and touchcancel

// EVENT PROPAGATION
const ulElement = document.getElementById("list")
const liElement = document.querySelector("#list li")

// clicking on liElement contained in ulElement fires of both event listeners
// because clicking on liElement means you are also clicking on the ulElement as well
// This is EVENT BUBBLING
ulElement.addEventListener("click", (e) => console.log("clicked on ul"))
liElement.addEventListener("click", (e) => console.log("clicked on li"))

// EVENT CAPTURING is the same but in reverse; events propogate downwards
// just adjust event listeners third parameter
// ulElement.addEventListener("click", (e) => console.log("clicked on ul"), true)
// liElement.addEventListener("click", (e) => console.log("clicked on li"), true)

// event propagation can be stopped
// liElement.addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked on li")
//     e.stopPropagation()
//   },
//   false
// )
