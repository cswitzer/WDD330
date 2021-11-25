// connects to pokedex
const path = require("path")
const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const { engine } = require("express-handlebars")

const connectDB = require("../config/db.js")
const User = require("../models/userModel.js")

dotenv.config()

connectDB()

const app = express()
const port = process.env.PORT || 3000

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"], // can only allow users to make get and post request
  })
)

app.use(express.json())
app.use(express.urlencoded())

const publicDirPath = path.join(__dirname, "../../pokedex/public") // static js and css files
const viewsPath = path.join(__dirname, "../templates/views") // res.render() looks in view folder by default
const partialsPath = path.join(__dirname, "../templates/partials")

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    partialsDir: `${partialsPath}`,
  })
)
app.set("view engine", "hbs")
app.set("views", viewsPath)

// where to find static html, js, and css files
app.use(express.static(publicDirPath))

app.get("", (req, res) => {
  res.render("index")
})

app.get("/details", (req, res) => {
  res.render("details")
})

app.get("/register", (req, res) => {
  res.render("register")
})

// use bcrypt to hash the password
app.post("/register", async (req, res) => {
  const user = new User({
    ...req.body,
  })

  try {
    await user.save()
    res.status(201).render("details")
  } catch (e) {
    res.status(400).send(e)
  }
})

app.listen(port, () => {
  console.log("Server successfully started on port " + port)
})
