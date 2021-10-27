// Callbacks are the best - functions passed as parameters to other functions
function waitForPhone(callback, seconds) {
  setTimeout(callback, seconds * 1000)
  console.log("The phone will ring in 2 seconds")
}

function phoneRing() {
  console.log("RIING!")
}

// waitForPhone(phoneRing, 2)

// functions passed into callback functions are only added to the stack
// after the rest of the program finishes running
waitForPhone(phoneRing, 0)

// example of callback hell, which must be avoided
// login(userName, function (error, user) {
//   if (error) {
//     throw error
//   } else {
//     getPlayerInfo(user.id, function (error, info) {
//       if (error) {
//         throw error
//       } else {
//         loadGame(info, function (error, game) {
//           if (error) {
//             throw error
//           } else {
//             // code to run game
//           }
//         })
//       }
//     })
//   }
// })

// Promises are here to save the day
const promise = new Promise((resolve, reject) => {
  const success = true
  const value = "Hello"
  if (success) {
    resolve(value)
  } else {
    reject(error)
  }
})

// dice roll where 1 is a failure
// const dicePromise = new Promise( (resolve, reject) => {
//     const n = dice.roll()
//     setTimeout(() => {
//         (n > 1) ? resolve(n) : reject(n)
//     }, n*1000)
// })

// then to catch resolved, catch to catch reject
// promise.then((result) => console.log(`${result} World`))

// Promises come into their own when multiple asynchronous tasks are required to be carried out one after the other.
// If each function that performs an asynchronous operation returns a promise, we can chain the then() methods together
// to form a sequential piece of code that’s easy to read.
// login(userName)
// .then(user => getPlayerInfo(user.id))
// .then(info => loadGame(info))
// .catch( throw error)

/*
    Async-await is the cleanest way to perform async tasks and will never cause callback hell
*/
// async function loadGame(userName) {
//     try {
//         const user = await login(userName)
//         const info = await getPlayerInfo(user.id)
//     }
//     catch (error) {
//         throw error
//     }
// }
