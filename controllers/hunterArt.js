const  HunterArt = require("../models/HunterArt")
const handleErrors = require("../middlewares/errorHandler")

exports.getHunterArtData = (req, res, next) => {
  HunterArt.findAll()
    .then((result) => { res.json({ arts: result.rows }) })
    .catch((err) => next(err))
}