const  Charm = require("../models/Charm")
const handleErrors = require("../middlewares/errorHandler")

exports.getCharmData = (req, res, next) => {
  Charm.findAll()
    .then((result) => { res.json({ charms: result.rows }) })
    .catch((err) => next(err))
}