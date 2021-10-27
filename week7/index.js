// functions are first class objects which have properties and methods
function sayHello() {
  return `Hello, my name is ${this.name}`
}

// call() function sets 'this' inside function
const clark = { name: "Clark" }
const bruce = { name: "Bruce" }

sayHello.call(clark)
sayHello.call(bruce)

// the apply method does the same thing as call, but accepts an array
function square(number) {
  return number * number
}

square.call(null, 4)
square.apply(null, [4])

// functions can have their own properties
square.description = "Squares a number"

/*
    Memoization
*/
function squareMemo(x) {
  square.cache = square.cache || {}

  // saves time from repeated operations, but takes up more space
  if (!square.cache[x]) {
    square.cache[x] = x * x
  }

  return square.cache[x]
}

/*
    Immediately Invoked Function Expressions (IIFE)
*/
;(function () {
  const temp = "World"
  console.log(`Hello ${temp}`)
})()

// IIFE is useful for initialization code there will be no need for again
// assigned it to a variable so code formatter doesn't dock it behind IIFE above
const dummy = (function () {
  const name = "Peter Parker"
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const date = new Date(),
    today = days[date.getDay()]
  console.log(`Welcome back ${name}. Today is ${today}`)
})()

/* 
    Functions can redefine themselves
*/
function party() {
  console.log("I am partying")
  party = function () {
    // every call after to party() will print "The party is done"
    console.log("The party is done")
  }
}

// This is called the Lazy Definition Pattern and is often used when some initialization code is required the first time it’s invoked.
// This means the initialization can be done the first time it’s called, then the function can be redefined to what you want it to be for
// every subsequent invocation.

// Init-time branching - initialize function so it doesn't waste time or space on unecessary checks
function ride() {
  if (window.unicorn) {
    ride = function () {
      // some code that uses the brand new and sparkly unicorn methods
      return "Riding on a unicorn is the best!"
    }
  } else {
    ride = function () {
      // some code that uses the older pony methods
      return "Riding on a pony is still pretty good"
    }
  }
  return ride()
}

/*
    Recursion: hooray
*/
function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
