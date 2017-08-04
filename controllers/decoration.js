const Decoration = require("../models/Decoration")
const handleErrors = require("../middlewares/errorHandler")

exports.getDecorations = (req, res, next) => {
  Decoration.findAll()
    .then((result) => { res.json({ decorations: result.rows }) })
    .catch((err) => next(err))
}