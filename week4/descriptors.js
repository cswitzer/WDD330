class Dice {
  constructor(sides = 6) {
    Object.defineProperty(this, "sides", {
      get() {
        return `This dice has ${sides} sides`
      },
      set(value) {
        if (value > 0) {
          sides = value
          return sides
        } else {
          throw new Error("The number of sides must be positive")
        }
      },
    })

    this.roll = function () {
      return Math.floor(sides * Math.random() + 1)
    }
  }
}

// use descriptors to set getters and setters for class attributes
const yellowDice = new Dice()

// setter will check for errors
yellowDice.sides = 0
yellowDice.sides = 10
