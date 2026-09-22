const express = require('express')
const path = require('path')
require("dotenv").config()

const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static((path.join(__dirname, "./public"))))

app.get("/", (_req, res) => {
  res.render("home")
})

app.get("/lapwing", (_req, res) => {
  res.render("lapwing")
})
app.post("/lapwing", (req, res) => {
  const inputFlag = req.body["lapwing-flag"];
  console.log(inputFlag)
  if (inputFlag == process.env.lapwing_flag) res.send("Correct!")
  else res.send("Incorrect!")

})

app.listen(3002, () => {
  console.log("Pizza!")
})

