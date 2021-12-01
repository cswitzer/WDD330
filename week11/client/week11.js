import { makeRequest } from "./authHelper.js"

makeRequest("login", "POST", {
  password: "user1",
  email: "user1@email.com",
})

// function getJSON(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }
