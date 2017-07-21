const Quest = require("../models/Quest")
const handleErrors = require("../middlewares/errorHandler")

exports.getQuestData = (req, res, next) => {
  Quest.getQuestList()
    .then((result) => { res.json({ items: result.rows }) })
    .catch((err) => next(err))
}