const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT * FROM submission`)
  },
  addOne(name, quest, questtime, weapon, style, created) {
    const string = "INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ('"+name+"', '"+quest+"', '"+questtime+"', '"+weapon+"', '"+style+"', '"+created+"')";
    return query(string)

  }
}

module.exports = Submission