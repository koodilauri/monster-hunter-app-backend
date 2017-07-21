const query = require("../db/connect").query

const Decoration = {
  findAll() {
    return query(`SELECT decoration.*, skill.name AS skillname FROM decoration
    JOIN skill
    ON skill.id = decoration.skill1id;`)
  }
}

module.exports = Decoration