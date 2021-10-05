// reference the form
const mainForm = document.forms["search"]

// reference elements in the form
// const [input, button] = mainForm.elements

// get element controls independently
const input = mainForm["searchInput"]
const button = mainForm["submitButton"]

// input.addEventListener("focus", () => alert("focused"), false)
// input.addEventListener("blur", () => alert("blurred"), false)
// input.addEventListener("change", (e) => alert(`${e.target.value}`), false)

// have javascript intercept form after submission before sending data to server
const search = (event) => {
  // alert(`You searched for ${input.value}`)
  if (input.value === "Chase") alert("That is the greatest name ever!")
  else alert('Please type "Chase"')
  event.preventDefault() // form launches to backend without this
}

mainForm.addEventListener("submit", search, false)
