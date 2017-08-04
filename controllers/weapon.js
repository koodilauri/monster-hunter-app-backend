const Weapon = require("../models/Weapon")
const handleErrors = require("../middlewares/errorHandler")

exports.getWeapons = (req, res, next) => {
  Weapon.findAll()
    .then((result) => { res.json({ weapons: result.rows }) })
    .catch((err) => next(err))
}