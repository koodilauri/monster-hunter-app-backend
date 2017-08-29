const Skill = require("../models/Skill")
const handleErrors = require("../middlewares/errorHandler")

exports.getSkills = async (req, res, next) => {
  const skills = await Skill.findAll().catch((err) => next(err))
  const effects = await Skill.findEffects().catch((err) => next(err))
  res.json({
    skills: skills.rows,
    effects: effects.rows
  })

}