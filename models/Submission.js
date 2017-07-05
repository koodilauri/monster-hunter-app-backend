const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT submission.id, submission.name, quest.name AS questname, questtime, weapon, style, created, setid FROM submission
    JOIN quest
    ON quest.id = submission.questId`)
  },
  addOne(name, questid, questtime, weapon, style, created) {
    // const string = "INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ('"+name+"', '"+quest+"', '"+questtime+"', '"+weapon+"', '"+style+"', '"+created+"')";
    return query(`INSERT INTO submission (name, questid, questtime, weapon, style, created) VALUES ($1, $2, $3, $4, $5, $6)`, [name, questid, questtime, weapon, style, created])
  },
  getQuestList(string) {
    return query(`SELECT name, quest.id AS value FROM quest
    WHERE name LIKE $1`, ['%'+string+'%'])
  }
}

module.exports = Submission