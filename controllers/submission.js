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
    selectedHead: 1,
    selectedTorso: 2,
    selectedArms: 3,
    selectedWaist: 4,
    selectedFeet: 5
  }
  if (req.body.armorSet) {
    if (req.body.armorSet.selectedHead.equipment.name === "") req.body.armorSet.selectedHead.equipment.id = 1
    if (req.body.armorSet.selectedTorso.equipment.name === "") req.body.armorSet.selectedTorso.equipment.id = 2
    if (req.body.armorSet.selectedArms.equipment.name === "") req.body.armorSet.selectedArms.equipment.id = 3
    if (req.body.armorSet.selectedWaist.equipment.name === "") req.body.armorSet.selectedWaist.equipment.id = 4
    if (req.body.armorSet.selectedFeet.equipment.name === "") req.body.armorSet.selectedFeet.equipment.id = 5
  }
  const time = new Date()
  Charm.saveOrUpdateOne(req.body.armorSet.selectedCharm.equipment.slots, req.body.armorSet.selectedCharm.equipment.skill1, req.body.armorSet.selectedCharm.equipment.skill2, req.body.armorSet.selectedCharm.equipment.amount1, req.body.armorSet.selectedCharm.equipment.amount2)
    .then(result1 =>
      ArmorSet.saveOrUpdateOne(req.body.armorSet.selectedHead.equipment.id, req.body.armorSet.selectedTorso.equipment.id, req.body.armorSet.selectedArms.equipment.id, req.body.armorSet.selectedWaist.equipment.id, req.body.armorSet.selectedFeet.equipment.id, result1.rows[0].id)
    )
    .then(result2 =>
      Submission.saveOrUpdateOne(req.body.newSubmission.name, req.body.newSubmission.quest.id, questTime, req.body.armorSet.selectedWeapon.equipment.id, req.body.styleAndArts.selectedStyle, time, result2.rows[0].id)
    )
    .then((result3) => {
      res.send({
        newSubmission: {
          name: result3.rows[0].name,
          questname: req.body.newSubmission.quest.name,
          questtime: result3.rows[0].questtime,
          weaponname: req.body.armorSet.selectedWeapon.equipment.name,
          style: result3.rows[0].style,
          created: result3.rows[0].created,
          setid: result3.rows[0].setid
        }
      })
    })
    .catch((err) => next(err))
}