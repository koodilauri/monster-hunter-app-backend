const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT * FROM submission`)
  },
  addOne(name, quest, questtime, weapon, style, created) {
    // const string = "INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ('"+name+"', '"+quest+"', '"+questtime+"', '"+weapon+"', '"+style+"', '"+created+"')";
    return query(`INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ($1, $2, $3, $4, $5, $6)`, [name, quest, questtime, weapon, style, created])

  }
}

module.exports = Submission