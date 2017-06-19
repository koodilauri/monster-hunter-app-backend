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

const port = process.env.PORT || 8081

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors(corsOptions))

app.get("/", (req, res, next) => {
  res.send("hei")
})

app.get("/submission", cors(corsOptions), (req, res, next) => {
  Submission.findAll().then( (result) => {res.json({submissions: result.rows})}).catch( (err) => { res.json({error: error})})      
})

app.post("/submission", jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  const time = new Date()  
  Submission.addOne(req.body.name, req.body.quest,  '00:'+req.body.questTime, req.body.weapon, req.body.style, time).then( (result) => {res.sendStatus(200)}).catch( (err) => { console.log(err); res.send(err)})
}) 

app.listen(port, (err) => {
  if (err) {
     console.log(err)
  } else {
    console.log("App is listening on port " + port)
  }
})

module.exports = app