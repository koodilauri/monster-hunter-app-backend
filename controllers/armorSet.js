const ArmorSet = require("../models/ArmorSet")
const handleErrors = require("../middlewares/errorHandler")

exports.getArmorSets = (req, res, next) => {
  ArmorSet.findAll()
    .then((result) => { res.json({ armor: result.rows }) })
    .catch((err) => next(err))
}