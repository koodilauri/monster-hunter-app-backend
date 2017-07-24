const Submission = require("../models/Submission")
const ArmorSet = require("../models/ArmorSet")
const Charm = require("../models/Charm")
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
  if (req.body.armorSet.head.name === "") req.body.armorSet.head.id = 1
  if (req.body.armorSet.torso.name === "") req.body.armorSet.torso.id = 2
  if (req.body.armorSet.arms.name === "") req.body.armorSet.arms.id = 3
  if (req.body.armorSet.waist.name === "") req.body.armorSet.waist.id = 4
  if (req.body.armorSet.feet.name === "") req.body.armorSet.feet.id = 5
  const time = new Date()
  Charm.saveOrUpdateOne(req.body.armorSet.charm.slots, req.body.armorSet.charm.skill1.id, req.body.armorSet.charm.skill2.id, req.body.armorSet.charm.amount1, req.body.armorSet.charm.amount2)
    .then(result1 =>
      ArmorSet.saveOrUpdateOne(req.body.armorSet.head.id, req.body.armorSet.torso.id, req.body.armorSet.arms.id, req.body.armorSet.waist.id, req.body.armorSet.feet.id, result1.rows[0].id)
    )
    .then(result2 =>
      Submission.saveOrUpdateOne(req.body.newSubmission.name, req.body.selectedQuest.id, questTime, req.body.selectedWeapon.id, req.body.newSubmission.style, time, result2.rows[0].id)
    )
    .then((result3) => {
      res.send({
        newSubmission: {
          name: result3.rows[0].name,
          questname: req.body.selectedQuest.name,
          questtime: result3.rows[0].questtime,
          weaponname: req.body.selectedWeapon.name,
          style: result3.rows[0].style,
          created: result3.rows[0].created,
          setid: result3.rows[0].setid
        }
      })
    })
    .catch((err) => next(err))
}