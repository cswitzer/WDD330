const validator = require("validator")
const registerForm = document.querySelector("#regForm")

registerForm.addEventListener("submit", (e) => {
  let isEmail = validateEmail(registerForm["email"].value)
  let isStrongPassword = validatePassword(registerForm["password"].value)

  if (isEmail && isStrongPassword) {
    registerForm.submit()
  } else {
    alert("Password is not good")
    e.preventDefault()
  }
})

function validateEmail(email) {
  return validator.isEmail(email)
}

function validatePassword(password) {
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
}

// async function getDitto() {
//   await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => {
//       console.log("didn't work")
//     })
// }

// async function test() {
//   const response = await fetch("http://127.0.0.1:3000/test")
//   const { message } = await response.json()
//   console.log(message)
// }
