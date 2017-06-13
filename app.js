const express = require("express")
var cors = require('cors')
const app = express()

var corsOptions = {
  origin: 'https://monster-hunter-app.herokuapp.com/',
  optionsSuccessStatus: 200
}

const port = process.env.PORT || 8081

app.get("/", (req, res, next) => {
  res.send("Hello World")
})

app.get("/submissions", cors(corsOptions), (req, res, next) => {
  res.json({
    submissions: [
      { "name": 'tobi',  "time":"05:11:00", "type":1},
      { "name":"lauri", "time":"07:46:00","type":2}
    ]})
})

app.listen(port, (err) => {
  if (err) {
     console.log(err)
  } else {
    console.log("App is listening on port " + port)
  }
})