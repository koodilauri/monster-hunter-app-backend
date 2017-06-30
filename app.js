require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
require("./db/connect").connect()
const Submission = require("./models/Submission")
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
  Submission.findAll().then((result) => { res.json({ submissions: result.rows }) }).catch((err) => { res.json({ error: error }) })
})

app.post("/submission", (req, res, next) => {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  let questTime = '00:' + req.body.Min + ':' + req.body.Sec;
  req.body.questTime = questTime;
  console.log(questTime)
  const time = new Date()
  Submission.addOne(req.body.name, req.body.quest, questTime, req.body.weapon, req.body.style, time).then((result) => { res.send(req.body) }).catch((err) => { console.log(err); res.send(err) })
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("App is listening on port " + port)
  }
})

module.exports = app