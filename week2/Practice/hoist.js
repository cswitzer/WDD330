// example 1:
hoist()

function hoist() {
  console.log("Hoist me!")
}

// example 2:
function displayHelloWorld() {
  // displays undefined before assignment is made due to hoisting
  // in Java or C++, this would result in an error
  console.log(name)

  var name = "Chase"

  console.log(name)
}

// example 3:

/* 
 Essentially, expressions can't be called before declarations because they are not hoisted
 like regular function declarations
*/

helloExpression() // throws error

helloDeclaration() // returns 'hello

var helloExpression = function () {
  console.log("hello")
}

function helloDeclaration() {
  console.log("hello")
}

helloExpression()
