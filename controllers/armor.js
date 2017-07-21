const Armor = require("../models/Armor")
const handleErrors = require("../middlewares/errorHandler")

exports.getArmorData = (req, res, next) => {
  Armor.getArmorList()
    .then((result) => { res.json({ armor: result.rows }) })
    .catch((err) => next(err))
}