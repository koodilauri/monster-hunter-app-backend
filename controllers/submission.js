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
  if (req.body.newSubmission.minutes >= 10) {
    questTime = questTime + req.body.newSubmission.minutes + ":"
  } else {
    questTime = questTime + "0" + req.body.newSubmission.minutes + ":"
  }
  if (req.body.newSubmission.seconds >= 10) {
    questTime = questTime + req.body.newSubmission.seconds
  } else {
    questTime = questTime + "0" + req.body.newSubmission.seconds
  }
  const dummyCharm = {
    slots: 0,
    skill1: 149,
    skill2: 149,
    bonus2: 0,
    bonus2: 0
  }
  const dummyArmorSet = {
    head: 1,
    torso: 2,
    arms: 3,
    waist: 4,
    feet: 5
  }
  if (req.body.armorSet) {
    if (req.body.armorSet.head.name === "") req.body.armorSet.head.id = 1
    if (req.body.armorSet.torso.name === "") req.body.armorSet.torso.id = 2
    if (req.body.armorSet.arms.name === "") req.body.armorSet.arms.id = 3
    if (req.body.armorSet.waist.name === "") req.body.armorSet.waist.id = 4
    if (req.body.armorSet.feet.name === "") req.body.armorSet.feet.id = 5
  }
  const time = new Date()
  Charm.saveOrUpdateOne(req.body.armorSet.charm.slots, req.body.armorSet.charm.skill1.id, req.body.armorSet.charm.skill2.id, req.body.armorSet.charm.amount1, req.body.armorSet.charm.amount2)
    .then(result1 =>
      ArmorSet.saveOrUpdateOne(req.body.armorSet.head.id, req.body.armorSet.torso.id, req.body.armorSet.arms.id, req.body.armorSet.waist.id, req.body.armorSet.feet.id, result1.rows[0].id)
    )
    .then(result2 =>
      Submission.saveOrUpdateOne(req.body.newSubmission.name, req.body.newSubmission.quest.id, questTime, req.body.newSubmission.weapon.id, req.body.newSubmission.style, time, result2.rows[0].id)
    )
    .then((result3) => {
      res.send({
        newSubmission: {
          name: result3.rows[0].name,
          questname: req.body.newSubmission.quest.name,
          questtime: result3.rows[0].questtime,
          weaponname: req.body.newSubmission.weapon.name,
          style: result3.rows[0].style,
          created: result3.rows[0].created,
          setid: result3.rows[0].setid
        }
      })
    })
    .catch((err) => next(err))
}