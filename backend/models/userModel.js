// user validator to check password and email, add second layer of protection
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const passwordRequirements = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
}

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid")
        }
      },
    },
    password: {
      type: String,
      required: true,
      validator(value) {
        if (!validator.isStrongPassword(value, passwordRequirements)) {
          throw new Error(
            "Password requirements: min 8 chars, min 1 lower and uppercase letters, min 1 symbol and number"
          )
        }
      },
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error("Unable to login")
  }

  // if the password submitted from the login form is the same as the user's password in the database, we have a match
  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error("Unable to login")
  }

  return user
}

// methods for instances of the userSchema
userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign(
    { _id: user._id.toString() },
    "thisIsAnIncredibleKey123!!dsa"
  )

  // generate token for the user to implement signing in
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

// hash password before saving to database
userSchema.pre("save", async function (next) {
  // this refers to the instance of a user being about to be stored in the database
  const user = this

  // only run this function if the password was modified
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12)
  }

  // pre save preparations are finished
  next()
})

const User = mongoose.model("User", userSchema)
module.exports = User
