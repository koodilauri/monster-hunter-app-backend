const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT submission.id, submission.name, quest.name AS questname, questtime, weapon, style, created, setid FROM submission
    JOIN quest
    ON quest.id = submission.questId`)
  },
  saveOrUpdateOne(name, questid, questtime, weapon, style, created, setID) {
    // const string = "INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ('"+name+"', '"+quest+"', '"+questtime+"', '"+weapon+"', '"+style+"', '"+created+"')";
    return query(`INSERT INTO submission (name, questid, questtime, weapon, style, created, setID) VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING name, questtime, weapon, style, setID, created`, [name, questid, questtime, weapon, style, created, setID])
  }
}

module.exports = Submission