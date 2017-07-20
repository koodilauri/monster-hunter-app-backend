const Submission = require("../models/Submission")
const handleErrors = require("../middlewares/errorHandler")

exports.getSubmission = (req, res, next) => {
  Submission.findAll()
    .then((result) => { res.json({ submissions: result.rows }) })
    .catch((err) => next(err))
}

exports.postSubmission = (req, res, next) => {
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
  Submission.addCharm(req.body.armorSet.charm.slots, req.body.armorSet.charm.skill1.id, req.body.armorSet.charm.skill2.id, req.body.armorSet.charm.amount1, req.body.armorSet.charm.amount2)
    .then(result1 =>
      Submission.addArmorSet(req.body.armorSet.head.id, req.body.armorSet.torso.id, req.body.armorSet.arms.id, req.body.armorSet.waist.id, req.body.armorSet.feet.id, result1.rows[0].id)
    )
    .then(result2 =>
      Submission.addOne(req.body.newSubmission.name, req.body.newSubmission.questId, questTime, req.body.newSubmission.weapon, req.body.newSubmission.style, time, result2.rows[0].id)
    )
    .then((result3) => {
      res.send({
        newSubmission: {
          name: result3.rows[0].name,
          questname: req.body.newSubmission.questName,
          questtime: result3.rows[0].questtime,
          weapon: result3.rows[0].weapon,
          style: result3.rows[0].style,
          created: result3.rows[0].created,
          setid: result3.rows[0].setID
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

exports.getDecorationData = (req, res, next) => {
  Submission.getDecorations()
    .then((result) => { res.json({ decorations: result.rows }) })
    .catch((err) => next(err))
}