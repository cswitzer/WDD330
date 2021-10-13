const X = "X"
const O = "O"
// X goes first
let player = X
const players = { X: "Player 1", O: "Player 2" }
const playBoard = ["", "", "", "", "", "", "", "", ""]

const elements = [...document.querySelectorAll(".block")]
elements.forEach((element) => {
  element.addEventListener("click", () => {
    addElement(element)
    checkForWinner()
    changeTurns(element)
  })
})

function addElement(element) {
  if (element.innerHTML !== "") {
    alert(`Click on an empty box`)
  } else {
    // have an array that keeps track of board
    playBoard[Number(element.id)] = player
    element.innerHTML = player
  }
}

function changeTurns(element) {
  if (element.innerHTML === "X") {
    player = O
  } else {
    player = X
  }
}

function checkForWinner() {
  checkRows()
  checkColumns()
  checkDiagonals()
}

function checkRows() {
  // across first row
  if (
    playBoard[0] === player &&
    playBoard[1] === player &&
    playBoard[2] === player
  ) {
    alert(`${players[player]} wins!`)
    clearBoard()
  }
  // second row
  else if (
    playBoard[3] === player &&
    playBoard[4] === player &&
    playBoard[5] === player
  ) {
    alert(`${players[player]} wins!`)
    clearBoard()
  }
  // third row
  else if (
    playBoard[6] === player &&
    playBoard[7] === player &&
    playBoard[8] === player
  ) {
    alert(`${players[player]} wins!`)
    clearBoard()
  }
}

function checkColumns() {
  // first column
  if (
    playBoard[0] === player &&
    playBoard[3] === player &&
    playBoard[6] == player
  ) {
    alert(`${players[player]} wins!`)
    clearBoard()
  }
  // second column
  else if (
    playBoard[1] === player &&
    playBoard[4] === player &&
    playBoard[7] == player
  ) {
    alert(`${players[player]} wins!`)
    clearBoard()
  }
  // third column
  else if (
    playBoard[2] === player &&
    playBoard[5] === player &&
    playBoard[8] == player
  ) {
    alert(`${players[player]} wins!`)
    clearBoard()
  }
}

function checkDiagonals() {
  // right diagonal
  if (
    playBoard[0] === player &&
    playBoard[4] === player &&
    playBoard[8] === player
  ) {
    alert(`${players[player]} wins!`)
    clearBoard()
  }
  // left diagonal
  else if (
    playBoard[2] === player &&
    playBoard[4] === player &&
    playBoard[6] === player
  ) {
    alert(`${players[player]} wins!`)
    clearBoard()
  }
}

function clearBoard() {
  // clear the array and innerHTML for on the view to be consistent for our next round
  for (let i = 0; i < playBoard.length; i++) {
    playBoard[i] = ""
  }

  elements.forEach((element) => (element.innerHTML = ""))

  console.log(playBoard)
}
