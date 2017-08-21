const ArmorSet = require("../models/ArmorSet")
const Decoration = require("../models/Decoration")
const HunterArt = require("../models/HunterArt")
const handleErrors = require("../middlewares/errorHandler")

exports.getArmorSets = (req, res, next) => {
  ArmorSet.findAll()
    .then((result1) => {
      Decoration.allSetDecorations()
        .then(result2 => {
          res.json({ armorSets: result1.rows, setDecorations: result2.rows })
        }
        )
    })
    .catch((err) => next(err))
}