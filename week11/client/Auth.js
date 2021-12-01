import { makeRequest } from "./authHelper.js"

export default class Auth {
  constructor() {
    this.jwtToken = ""
    this.user = ""
  }

  async login(callback) {
    const password = document.getElementById("password")
    const username = document.getElementById("email")
    const postData = {
      email: username.value,
      password: password.value,
    }

    try {
      const data = await makeRequest("login", "POST", postData)
      this.jwtToken = data.accessToken

      // get the user's details
      this.user = await this.getCurrentUser(username.value)
      // hide the login form
      document.getElementById("register").classList.add("hidden")
      // clear the password
      password.value = ""
      // since we have a token let's go grab some data from the API by executing the callback if one was passed in
      if (callback) {
        callback()
      }
    } catch (e) {
      console.log(error)
    }
  }

  async getCurrentUser(email) {
    try {
      const data = makeRequest("login", "GET", null, this.jwtToken)
      console.log(data)
    } catch (e) {}
  }
}
