const unique = require("uniq")
console.log("hello world")

const printUniqueData = () => {
  var data = [1, 2, 2, 3, 4, 5, 5, 5, 6]
  console.log(unique(data))
}

printUniqueData()

module.exports = printUniqueData
