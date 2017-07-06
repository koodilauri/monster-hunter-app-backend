require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
require("./db/connect").connect()
const submissionCtrl = require("./controllers/submissionCtrl")

const corsOptions = {
  origin: ["https://monster-hunter-app.herokuapp.com", "http://localhost:3000"],
  optionsSuccessStatus: 200
}
if (process.env.NODE_ENV != "production") {
  const logger = require("morgan");
  app.use(logger("dev"));
}
const port = process.env.PORT || 8081

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(cors(corsOptions))

app.get("/", (req, res, next) => {
  res.send("hei")
})

app.get("/submission", (req, res, next) => {
  submissionCtrl.getSubmission(req, res, next)
})

app.post("/submission", (req, res, next) => {
  submissionCtrl.postSubmission(req, res, next)
})

app.get("/questlist", (req, res, next) => {
  console.log(req.query.q)
  submissionCtrl.getQuestData(req, res, next)
})


app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("App is listening on port " + port)
  }
})

module.exports = app