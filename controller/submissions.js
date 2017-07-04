const Submission = require("../models/Submission")

exports.getSubmission = (req, res, next, filter = "ALL") => {
  if (filter === "ALL") {
    Submission.findAll()
      .then((result) => { res.json({ submissions: result.rows }) })
      .catch((err) => { res.json({ error: error }) })
  } else {
    res.json({ error: "strange filter" })
  }
}

exports.postSubmission = (req, res, next) => {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  let questTime = '00:'
  if (req.body.newSubmission.Min >= 10) {
    questTime = questTime + req.body.newSubmission.Min + ':'
  } else {
    questTime = questTime + "0" + req.body.newSubmission.Min + ':'
  }
  if (req.body.newSubmission.Sec >= 10) {
    questTime = questTime + req.body.newSubmission.Sec
  } else {
    questTime = questTime + "0" + req.body.newSubmission.Sec
  }

  req.body.newSubmission.questTime = questTime
  const time = new Date()
  Submission.addOne(req.body.newSubmission.name, req.body.newSubmission.quest, questTime, req.body.newSubmission.weapon, req.body.newSubmission.style, time)
    .then((result) => { res.send(req.body) })
    .catch((err) => { console.log(err); res.send(err) })
}