const Submission = require("../models/Submission")

exports.GetSubmission = (req, res, next, filter = "ALL") => {
  if (filter === "ALL") {
    Submission.findAll()
      .then((result) => { res.json({ submissions: result.rows }) })
      .catch((err) => { res.json({ error: error }) })
  } else {
    res.json({ error: "strange filter" })
  }
}

exports.PostSubmission = (req, res, next) => {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  let questTime = '00:'
  if (req.body.Min >= 10) {
    questTime = questTime + req.body.Min + ':'
  } else {
    questTime = questTime + "0" + req.body.Min + ':'
  }
  if (req.body.Sec >= 10) {
    questTime = questTime + req.body.Sec
  } else {
    questTime = questTime + "0" + req.body.Sec
  }

  req.body.questTime = questTime
  const time = new Date()
  Submission.addOne(req.body.name, req.body.quest, questTime, req.body.weapon, req.body.style, time)
    .then((result) => { res.send(req.body) })
    .catch((err) => { console.log(err); res.send(err) })
}