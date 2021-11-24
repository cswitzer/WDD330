// connects to pokedex
const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("../config/db.js")
const { engine } = require("express-handlebars")

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

app.post("/register", (req, res) => {
  console.log(req.body.firstName)
})

app.get("/test", (req, res) => {
  res.json({
    message: "Hello World",
  })
})

app.listen(port, () => {
  console.log("Server successfully started on port " + port)
})
