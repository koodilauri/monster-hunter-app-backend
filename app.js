require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
require("./db/connect").connect()
const Submission = require("./models/Submission")

const corsOptions = {
  origin: ["https://monster-hunter-app.herokuapp.com", "http://localhost:3000"],
  optionsSuccessStatus: 200
}

const port = process.env.PORT || 8081

app.get("/", (req, res, next) => {
  res.send("Hello World")
})

app.get("/submission", cors(corsOptions), (req, res, next) => {
  Submission.findAll().then( (result) => {res.json({submissions: result})}).catch( (err) => { res.json({error: error})})      
  
})

app.listen(port, (err) => {
  if (err) {
     console.log(err)
  } else {
    console.log("App is listening on port " + port)
  }
})

module.exports = app