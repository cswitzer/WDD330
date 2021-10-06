/*
    Prototypal inheritance
    Prototype properties are shared by all instances of classes
*/
class Turtle {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }

  sayHi() {
    return `Hi, dude, my name is ${this.name}`
  }

  attack() {
    return `Feel the power of my ${this.weapon}`
  }
}

const leo = new Turtle("Leonardo", "Twin Katana")
console.log(leo.sayHi())
console.log(leo.attack())

// all classes have a prototype, and all instances of the turtle class can access these prototypes
console.log(Turtle.prototype)

// example prototype property that can be accessed by all instances of Turtle
Turtle.prototype.dodge = function () {
  return `${this.name} is dodging!`
}

console.log(leo.dodge())

// retrieve prototype of object
leo.constructor.prototype
// or
Object.getPrototypeOf(leo)
// or
leo.__proto__

// All objects inherit from the class and the class's prototype
// hasOwnProperty() determines if the property belongs to the class or the prototype
console.log(leo.hasOwnProperty("name"))
console.log(leo.hasOwnProperty("dodge"))

// prototypes can be overwritten
leo.dodge = function () {
  return `${this.name} performed a barrel roll!`
}

console.log(leo.dodge())

// it appears that JavaScript does not offer private, public, or protected attributes. This is easily addressed through scope
class Dog {
  constructor(name, color) {
    this.name = name
    // impossible to access publicly because "this.color" is not specified, but _color
    let _color = color
    this.setColor = (color) => {
      if (typeof color === "string") {
        return (_color = color)
      } else {
        throw new Error("Color must be a string")
      }
    }
    this.getColor = () => _color
  }
}

const piper = new Dog("Piper", "Brown")
console.log(piper.getColor(piper.setColor("Light Brown")))

// every object prototype has its own prototype (prototype chain)
// e.g. Turtle Proto -> Object Proto
// KEY: when an object calls a method, JavaScript checks each prototype in the chain to look for that method
console.log(Object.getPrototypeOf(Object.getPrototypeOf(leo)))

// Other than prototypal inheritance, JavaScript also support class inheritance using extends
class NinjaTurtle extends Turtle {
  constructor(name, weapon) {
    super(name, weapon)
    this.master = "Splinter"
  }
}

const raph = new NinjaTurtle("Raphael", "Nunchaku")
console.log(raph.master)

// Monkey-patching can be useful for built-in JavaScript objects
String.prototype.trim =
  String.prototype.trim ||
  function () {
    return this.replace(/^\s+|\s+$/, "")
  }

// this function above checks to see if the current browser supports the string function. If not,
// the prototype of the string is set to a function to support this function in older browsers
" hello ".trim()

// Another way to add functionality to JavaScript built-in classes is through class inheritance
class myArray extends Array {
  constructor(...args) {
    super(...args)
  }
  delete(i) {
    return this.splice(i, 1)
  }
}

// literals are still preferred
const list = new myArray(1, 2, 3)
list.delete(2)
console.log(list)
