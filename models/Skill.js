const query = require("../db/connect").query

const Skill = {
  findAll() {
    return query(`SELECT * from skill;`)
  }
}

module.exports = Skill