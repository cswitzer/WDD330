const express = require("express")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.post("/what", function (req, res) {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
