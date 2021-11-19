// connects to pokedex
const path = require("path")
const express = require("express")
const { engine } = require("express-handlebars")

const app = express()
const port = process.env.PORT || 3000

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

app.get("/about", (req, res) => {
  res.render("about")
})

app.get("/register", (req, res) => {
  res.render("register")
})

app.listen(port, () => {
  console.log("Server successfully started on port " + port)
})
