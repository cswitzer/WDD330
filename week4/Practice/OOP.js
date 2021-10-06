"use strict"

// object literal
const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random() + 1)
  },
}

// constructor function that instantiates objects
const Dice = function (sides = 6) {
  this.sides = sides
  this.roll = function () {
    return Math.floor(this.sides * Math.random + 1)
  }
}

// create instance object of Dice using constructor function
const redDice = new Dice()
// console.log(redDice instanceof Dice) >> true

// two ways to create new objects
const constructedObject = new Object()
const literalObject = {}

// two ways to create array objects: use literals if you can
const constructedArray = new Array(1, 2, 3)
const literalArray = [1, 2, 3]

// ES6 introduces class-like objects: they are preferred over constructor functions
class DiceClass {
  // use strict is enforced, and no "new" operator will throw an error
  constructor(sides = 6) {
    this.sides = sides
  }

  roll() {
    return Math.floor(this.sides * Math.random + 1)
  }

  static description() {
    // a method that is called by the class, much like the Math class does
    return "A way of choosing random numbers"
  }
}

const blueDice = new DiceClass(20)
console.log(DiceClass.description()) // calling static method

// Objects can also be created from objects (that act as prototypes)
// changes made to this prototype will affect ALL objects inheriting from this prototype
const Human = {
  arms: 2,
  legs: 2,
  walk() {
    console.log("Walking")
  },
}

const lois = Object.create(Human)

console.log(lois.arms)
