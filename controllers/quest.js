const Quest = require("../models/Quest")
const handleErrors = require("../middlewares/errorHandler")

exports.getQuests = (req, res, next) => {
  Quest.findAll()
    .then((result) => { res.json({ items: result.rows }) })
    .catch((err) => next(err))
}