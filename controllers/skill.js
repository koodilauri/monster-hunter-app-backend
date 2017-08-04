const Skill = require("../models/Skill")
const handleErrors = require("../middlewares/errorHandler")

exports.getSkills = (req, res, next) => {
  Skill.findAll()
    .then((result) => { res.json({ skills: result.rows }) })
    .catch((err) => next(err))
}