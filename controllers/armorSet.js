const ArmorSet = require("../models/ArmorSet")
const Decoration = require("../models/Decoration")
const HunterArt = require("../models/HunterArt")
const handleErrors = require("../middlewares/errorHandler")

exports.getArmorSets = async (req, res, next) => {
  const armorSets = await ArmorSet.findAll().catch(err => next(err))
  const setDecorations = await Decoration.allSetDecorations().catch(err => next(err))
  res.json({
    armorSets: armorSets.rows,
    setDecorations: setDecorations.rows
  })

}
  // Promise.all([ArmorSet.findAll(), Decoration.allSetDecorations()])
  //   .then(result => {
  //     res.json({
  //       armorSets: result[0].rows,
  //       setDecorations: result[1].rows
  //     })
  //   })
  //   .catch((err) => next(err))
