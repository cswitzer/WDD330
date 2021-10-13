function squareRoot(number) {
  "use strict"
  if (number < 0) {
    throw new RangeError("You can't find the square root of negative numbers")
  }

  return Math.sqrt(number)
}

// when exception handling is useful
function imaginarySquareRoot(number) {
  "use strict"
  let answer
  try {
    // squareRoot throws an error if numbers is not greater than 0
    answer = String(squareRoot(number))
  } catch (error) {
    // code in the catch block will only run if the squareRoot functions throws an error
    answer = squareRoot(-number) + "i"
  } finally {
    // finally will always run at the end, no matter what
    return `+ or - ${answer}`
  }
}

module.exports = squareRoot
