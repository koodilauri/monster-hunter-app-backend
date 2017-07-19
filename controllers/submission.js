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
  Submission.addCharm(req.body.armorSet.charm.slots, req.body.armorSet.charm.skill1.id, req.body.armorSet.charm.skill2.id, req.body.armorSet.charm.amount1, req.body.armorSet.charm.amount2)
    .then(result => {
      charmID = result.rows[0].id
      console.log("charm id: ", result.rows)
      Submission.addArmorSet(req.body.armorSet.head.id, req.body.armorSet.torso.id, req.body.armorSet.arms.id, req.body.armorSet.waist.id, req.body.armorSet.feet.id, charmID)
        .then(result => {
          armorID = result.rows[0].id
          console.log("armorset id: ", result.rows)
          const time = new Date()
          Submission.addOne(req.body.newSubmission.name, req.body.newSubmission.questId, questTime, req.body.newSubmission.weapon, req.body.newSubmission.style, time, armorID)
            .then((result) => {
              res.send({
                newSubmission: {
                  name: req.body.newSubmission.name,
                  questname: req.body.newSubmission.questName,
                  questtime: questTime,
                  weapon: req.body.newSubmission.weapon,
                  style: req.body.newSubmission.style,
                  created: time,
                  setid: armorID
                }
              })
            })
            .catch((err) => next(err))
        })
    })

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