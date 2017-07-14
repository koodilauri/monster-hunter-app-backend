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
  getQuestList() {
    return query(`SELECT quest.questgiver, stars, quest.name, quest.id AS value, count(questid) FROM submission
    FULL OUTER JOIN quest
    ON quest.id = submission.questId
    GROUP BY questgiver, stars, quest.name, value
    ORDER BY count(questid) DESC;`)
  }
}

module.exports = Submission