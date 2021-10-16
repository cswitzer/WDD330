let userInput
let squareRootValue
const result = document.getElementById("result")

document.getElementById("submitNumber").addEventListener("click", () => {
  userInput = document.getElementById("userInput").value
  checkValue(Number(userInput))
  result.innerHTML = squareRootValue
})

function squareRoot(number) {
  "use strict"
  if (number < 0) {
    throw new RangeError("You can't find the square root of negative numbers")
  }

  return Math.sqrt(number)
}

function checkValue(userInput) {
  if (isNaN(userInput)) squareRootValue = `${userInput} is not a number`
  else squareRootValue = squareRoot(userInput)
}
