// closures: A closure is a reference to a variable that was created inside the scope of another function,
// but is then kept alive and used in another part of the program
function outer() {
  const outside = "Outside!"
  function inner() {
    const inside = "Inside!"
    console.log(outside)
    console.log(inside)
  }
  return inner
}

// notice that "Outside!" still printed even though
// only the inner function was returned! The inner function
// remembers the variables of the outer function
const closure = outer()
closure()

// Practical example
function toF() {
  const a = 1.8
  const b = 32
  return (c) => c * a + b
}

// still remembers a and b even though only inner function was returned
const toFahrenheit = toF()
toFahrenheit(30)
