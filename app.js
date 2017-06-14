const express = require("express")
var cors = require('cors')
const app = express()
require("./db/connect").connect()
const query = require("./db/connect").query
const Submission = require("./models/Submission")
require('dotenv').config()

var corsOptions = {
  origin: ["https://monster-hunter-app.herokuapp.com", "http://localhost:3000"],
  optionsSuccessStatus: 200
}

const port = process.env.PORT || 8081

app.get("/", (req, res, next) => {
  res.send("Hello World")
})

app.get("/submission", cors(corsOptions), (req, res, next) => {
  Submission.findAll().then( (result) => {res.json({submissions: result})}).catch( (err) => { res.send("errror")})      
  
})

app.listen(port, (err) => {
  if (err) {
     console.log(err)
  } else {
    console.log("App is listening on port " + port)
  }
})

module.exports = app