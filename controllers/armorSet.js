const ArmorSet = require("../models/ArmorSet")
const Decoration = require("../models/Decoration")
const HunterArt = require("../models/HunterArt")
const handleErrors = require("../middlewares/errorHandler")

exports.getArmorSets = async (req, res, next) => {
  try {
    const a = await ArmorSet.findAll()
    const b = await Decoration.allSetDecorations()
    res.json({
      armorSets: a.rows,
      setDecorations: b.rows
    })
  } catch (err) {
    next(err)
  }
}


  // Promise.all([ArmorSet.findAll(), Decoration.allSetDecorations()])
  //   .then(result => {
  //     res.json({
  //       armorSets: result[0].rows,
  //       setDecorations: result[1].rows
  //     })
  //   })
  //   .catch((err) => next(err))
