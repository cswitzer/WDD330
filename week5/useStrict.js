"use strict"
x = 3.14 // causes an error because 'x' is still undeclared

add(2, 3)

function add(a, b) {
  // throws an error becuase 'c' has not been declared
  c = a + b
  return c
}

// use strict can also bind to function scope
function displayHelloWorld() {
  "use strict"
  // without "use strict" in the global scope, x = 3.14 will not throw an error
  y = 3.14
}

// undeclared objects will also throw errors
x = { p1: 10, p2: 20 }

// delete keyword is not allowed in deleting variables or functions
let number = 22
function randomFunction(p1, p2) {}
delete number
delete randomFunction

// duplicating parameter names is not allowed
function dupParam(p1, p1) {}

// writing to a read-only is not allowed
const obj = {}
Object.defineProperty(obj, "x", {value:0, writable:false})
obj.x = 3.14

// writing to get-only property is not allowed
const obj2 = {}
const obj2 = {get y() {return 0}}
obj2.y = 3.14

// deleting undeletable properties is not allowed
delete Object.prototype

// eval and arguments cannot be used as variable names

// with is not allowed
with (Math){x = cos(2)}

// this keyword in "use strict" refers to the object that called the function
function myFunction() {
    alert(this)
}

// no object invoked this function, so "this" is undefined
myFunction()