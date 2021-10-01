const heroes = document.getElementById("roster")

// childNodes returns all nodes that are children of an element: including text nodes
console.log(heroes.childNodes)

// to only display ELEMENT nodes, children will do the job
console.log(heroes.children)

// first and last child also display text nodes
console.log(heroes.firstChild) // displays text node
console.log(heroes.lastChild) // displays text node

// element variants
console.log(heroes.firstElementChild) // displays element node
console.log(heroes.lastElementChild) // displays element node

// CSS query selectors provide powerful ways to specify very precise items on a page
const ul = document.querySelector("ul#roster")
const superman = ul.querySelector("li#superman")
console.log(superman.textContent)

// nodes can also reference parent nodes
const wonderwoman = document.querySelector("ul#roster li#wonderwoman")
console.log(wonderwoman.parentNode)

// siblings are referenced as well
console.log(superman.nextElementSibling)
console.log(superman.nextSibling)
console.log(wonderwoman.previousElementSibling)

// getting and setting element attributes
console.log(wonderwoman.getAttribute("class"))
console.log(wonderwoman.getAttribute("src"))

console.log(superman.setAttribute("id", "villain"))
console.log(superman.getAttribute("id"))

// classList property lays out all classes an HTML element has (pretty awesome!)
const batman = ul.querySelector("li#bats")
console.log(batman.classList.remove("hero"))
console.log(batman.classList.add("villain"))
console.log(batman.classList)

// classList.toggle is super useful when CSS changes need to occur
batman.classList.toggle("villain")
console.log(batman.classList)

// create elements and text nodes
const flash = document.createElement("li")
const flashText = document.createTextNode("Flash")

flash.appendChild(flashText)

// write a function to make creating elements easier
const createElement = (tag, text) => {
  const el = document.createElement(tag)
  el.textContent = text
  return el
}

const aquaman = createElement("li", "Aquaman")

// add the new heroes to our ul
heroes.appendChild(flash)
heroes.appendChild(aquaman)

// we can also remove elements
heroes.removeChild(flash)

// we have a reference to flash, so we can add it back whenever
heroes.insertBefore(flash, superman)

// replacing elements
const h1 = document.getElementById("title")

const replaceElement = (element) => {
  const oldText = element.firstChild
  const newText = document.createTextNode("Justice League of America")
  element.replaceChild(newText, oldText)
}

replaceElement(h1)

// updating CSS
superman.style.border = "red 2px solid"
superman.style.backgroundColor = "blue"

// disappear and reappear
batman.style.display = "none"
batman.style.display = "block"
