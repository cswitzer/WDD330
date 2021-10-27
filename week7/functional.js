// join conc. elements in array and converts them into a string
// Split in this case converts string into an array
function reverse(string) {
  return string.split("").reverse().join("")
}

const message = "Hello World"
console.log(reverse(message))
