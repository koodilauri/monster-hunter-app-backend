const ArmorSet = require("../models/ArmorSet")
const handleErrors = require("../middlewares/errorHandler")

exports.getArmorSetData = (req, res, next) => {
  ArmorSet.getArmorSetList()
    .then((result) => { res.json({ armor: result.rows }) })
    .catch((err) => next(err))
}