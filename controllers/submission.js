const Submission = require("../models/Submission")
const ArmorSet = require("../models/ArmorSet")
const Charm = require("../models/Charm")
const handleErrors = require("../middlewares/errorHandler")

exports.getSubmission = (req, res, next) => {
  Submission.findAll()
    .then((result) => { res.json({ submissions: result.rows }) })
    .catch((err) => next(err))
}

const parseTime = (min, sec) => {
  let questTime = "00:"

  if (min >= 10) questTime += min + ":"
  else questTime += "0" + min + ":"

  if (sec >= 10) questTime += sec
  else questTime += "0" + sec

  return questTime
}

const parseArts = arts => {
  let art_ids = [1, 1, 1]
  arts.map((art, id) => {
    if (art.id > 0) art_ids[id] = art.id
  })
  return art_ids
}

const parseDecorations = armorSet => {
  let parsedDecorations = { decos: [], part: [] }
  Object.keys(armorSet).map(part => {
    if (armorSet[part].decorations) {
      if (armorSet[part].decorations[0] !== undefined) {
        const decorations = {
          decoration1: armorSet[part].decorations[0] || { id: 1 },
          decoration2: armorSet[part].decorations[1] || { id: 1 },
          decoration3: armorSet[part].decorations[2] || { id: 1 }
        }
        parsedDecorations.decos = parsedDecorations.decos.concat(decorations)
        parsedDecorations.part = parsedDecorations.part.concat(part)
      }

      // armorSet[part].decorations.map(deco => {
      //   const index = parsedDecorations.decos.indexOf(deco.id)//check if decoration is already in parsedDecorations
      //   if (index === -1) {
      //     if (deco.id > 1) {
      //       parsedDecorations.decos = parsedDecorations.decos.concat(deco.id)
      //       parsedDecorations.amount = parsedDecorations.amount.concat(1)
      //     }
      //   }
      //   else {
      //     parsedDecorations.amount[index]++//if a decoration is already in the list, increment its amount by 1
      //   }
      // })

    }
  })
  return parsedDecorations
}

exports.postSubmission = (req, res, next) => {
  const questTime = parseTime(req.body.newSubmission.minutes, req.body.newSubmission.seconds)
  const arts = parseArts(req.body.styleAndArts.selectedHunterArts)
  const decorations = parseDecorations(req.body.armorSet)
  console.log("all the decos ", decorations.decos, decorations.part)
  const time = new Date()
  Charm.saveOrUpdateOne(
    req.body.armorSet.selectedCharm.equipment.slots,
    req.body.armorSet.selectedCharm.equipment.skill1,
    req.body.armorSet.selectedCharm.equipment.skill2,
    req.body.armorSet.selectedCharm.equipment.amount1,
    req.body.armorSet.selectedCharm.equipment.amount2
  )
    .then(result1 =>
      ArmorSet.saveOrUpdateOne(
        req.body.armorSet.setName,
        req.body.styleAndArts.selectedStyle,
        req.body.armorSet.selectedWeapon.equipment.id,
        req.body.armorSet.selectedHead.equipment.id,
        req.body.armorSet.selectedTorso.equipment.id,
        req.body.armorSet.selectedArms.equipment.id,
        req.body.armorSet.selectedWaist.equipment.id,
        req.body.armorSet.selectedFeet.equipment.id,
        result1.rows[0].id,
        arts[0],
        arts[1],
        arts[2]
      )
    )
    .then(result2 => {
      if (decorations.decos.length > 0)
        decorations.decos.map((decos, id) => {
          ArmorSet.saveDecoration(
            decos.decoration1.id,
            decos.decoration2.id,
            decos.decoration3.id,
            result2.rows[0].id,
            decorations.part[id]
          )
        })
        return result2
    })
    .then(result3 =>
      Submission.saveOrUpdateOne(
        req.body.newSubmission.name,
        req.body.newSubmission.quest.id,
        questTime,
        time,
        result3.rows[0].id
      )
    )
    .then((result4) => {
      res.send({
        newSubmission: {
          id: result4.rows.id,
          name: result4.rows[0].name,
          quest_name: req.body.newSubmission.quest.name,
          quest_time: result4.rows[0].quest_time,
          weapon_name: req.body.armorSet.selectedWeapon.equipment.name,
          weapon_class: req.body.armorSet.selectedWeapon.equipment.class,
          set_name: req.body.armorSet.setName,
          type: req.body.armorSet.armorType,
          style: req.body.styleAndArts.selectedStyle,
          created: result4.rows[0].created,
          set_id: result4.rows[0].set_id
        }
      })
    })
    .catch((err) => next(err))
}