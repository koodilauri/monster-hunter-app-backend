
require("dotenv").config()

const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")

require("./db/connect").connect()

const submissionCtrl = require("./controllers/submission")
const armorCtrl = require("./controllers/armor")
const decorationCtrl = require("./controllers/decoration")
const hunterArtCtrl = require("./controllers/hunterArt")
const questCtrl = require("./controllers/quest")
const skillCtrl = require("./controllers/skill")
const charmCtrl = require("./controllers/charm")
const weaponCtrl = require("./controllers/weapon")
const armorSetCtrl = require("./controllers/armorSet")

const validate = require("./middlewares/validateBody")
const errorHandler = require("./middlewares/errorHandler")

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

app.get("/submission", submissionCtrl.getSubmission)

app.post("/submission",
  validate.validateBody("submission", "post"),
  submissionCtrl.postSubmission)

app.get("/quest", questCtrl.getQuests)

app.get("/armor", armorCtrl.getArmors)

app.get("/weapon", weaponCtrl.getWeapons)

app.get("/hunter-art", hunterArtCtrl.getHunterArts)

app.get("/skill", skillCtrl.getSkills)

app.get("/decoration", decorationCtrl.getDecorations)

app.get("/armorset", armorSetCtrl.getArmorSets)

app.get("/charm", charmCtrl.getCharms)

app.use(errorHandler.handleErrors)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("App is listening on port " + port)
  }
})

module.exports = app