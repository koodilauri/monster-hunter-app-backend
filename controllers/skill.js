const Skill = require("../models/Skill")
const handleErrors = require("../middlewares/errorHandler")

exports.getSkills = (req, res, next) => {
  Skill.findAll()
    .then((result) => {
      Skill.findEffects()
        .then((result2) => {
          res.json({ skills: result.rows, effects: result2.rows })
        })
    })
    .catch((err) => next(err))
}