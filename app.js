require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
require("./db/connect").connect()
const submissionCtrl = require("./controllers/submissionCtrl")
const validate = require("./middlewares/validateBody")
const error = require("./middlewares/errorHandler")

const corsOptions = {
  origin: ["https://monster-hunter-app.herokuapp.com", "http://localhost:3000"],
  optionsSuccessStatus: 200
}
if (process.env.NODE_ENV != "production") {
  const logger = require("morgan")
  app.use(logger("dev"))
}
const port = process.env.PORT || 8081

app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.get("/", (req, res, next) => {
  res.send("hei")
})

app.get(
  "/submission",  
  validate.validateBody("submission", "get"), 
  submissionCtrl.getSubmission,
  error.handleErrors
)

app.post(
  "/submission", 
  validate.validateBody("submission", "post"), 
  submissionCtrl.postSubmission,
  error.handleErrors
)

app.get(
  "/quest", 
  validate.validateBody("quest", "get"),
  submissionCtrl.getQuestData,
  error.handleErrors
)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("App is listening on port " + port)
  }
})

module.exports = app