const query = require("../db/connect").query

const Skill = {
  findAll() {
    return query(`SELECT * from skill;`)
  },
  findEffects() {
    return query(`SELECT A.*, B.name FROM skill_effect A
    JOIN skill B
    ON A.skill_id = B.id;`)
  }
}

module.exports = Skill