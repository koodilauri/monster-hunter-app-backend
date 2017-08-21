const query = require("../db/connect").query

const Decoration = {
  findAll() {
    return query(`SELECT decoration.*, skill.name AS skill_name FROM decoration
    JOIN skill
    ON skill.id = decoration.skill1_id;`)
  },
  allSetDecorations(){
    return query(`SELECT * FROM decoration_in_set`)
  }
}

module.exports = Decoration