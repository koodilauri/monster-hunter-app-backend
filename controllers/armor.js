const Armor = require("../models/Armor")
const handleErrors = require("../middlewares/errorHandler")

exports.getArmors = (req, res, next) => {
  Armor.findAll()
    .then((result) => { res.json({ armor: result.rows }) })
    .catch((err) => next(err))
}