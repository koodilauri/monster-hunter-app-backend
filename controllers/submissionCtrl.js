const Submission = require("../models/Submission")
const handleErrors = require("../middlewares/errorHandler")

exports.getSubmission = (req, res, next) => {
  Submission.findAll()
    .then((result) => { res.json({ submissions: result.rows }) })
    .catch((err) => next(err))
}

exports.postSubmission = (req, res, next) => {
  if (!req.body) return res.sendStatus(400)
  let questTime = "00:"
  if (req.body.newSubmission.min >= 10) {
    questTime = questTime + req.body.newSubmission.min + ":"
  } else {
    questTime = questTime + "0" + req.body.newSubmission.min + ":"
  }
  if (req.body.newSubmission.sec >= 10) {
    questTime = questTime + req.body.newSubmission.sec
  } else {
    questTime = questTime + "0" + req.body.newSubmission.sec
  }

  const time = new Date()
  Submission.addOne(req.body.newSubmission.name, req.body.newSubmission.questId, questTime, req.body.newSubmission.weapon, req.body.newSubmission.style, time)
    .then((result) => {
      res.send({
        newSubmission: {
          name: req.body.newSubmission.name,
          questname: req.body.newSubmission.questName,
          questtime: questTime,
          weapon: req.body.newSubmission.weapon,
          style: req.body.newSubmission.style,
          created: time,
          setid: null
        }
      })
    })
    .catch((err) => next(err))
}

exports.getQuestData = (req, res, next) => {
  Submission.getQuestList()
    .then((result) => { res.json({ items: result.rows }) })
    .catch((err) => next(err))
}

exports.getArmorData = (req, res, next) => {
  Submission.getArmorList()
    .then((result) => { res.json({ armor: result.rows }) })
    .catch((err) => next(err))
}

exports.getWeaponData = (req, res, next) => {
  Submission.getWeaponList()
    .then((result) => { res.json({ weapons: result.rows }) })
    .catch((err) => next(err))
}

exports.getSkillData = (req, res, next) => {
  Submission.getSkillList()
    .then((result) => { res.json({ skills: result.rows }) })
    .catch((err) => next(err))
}

exports.getHunterArtData = (req, res, next) => {
  Submission.getHunterArts()
    .then((result) => { res.json({ arts: result.rows }) })
    .catch((err) => next(err))
}