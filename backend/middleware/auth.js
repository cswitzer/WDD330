const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

// authenticates if the user is logged in
const auth = async (req, res, next) => {
  console.log(req.user)
  try {
    // get the user's token that is stored in the authorization header upon login
    const token = req.cookies["auth-token"]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded._id, "tokens.token": token })

    if (!user) {
      throw new Error()
    }

    // we already requested the token and user. We don't want to make our routers do that again...
    req.token = token
    req.user = user

    next()
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." })
  }
}

module.exports = auth
