const query = require("../db/connect").query

const Quest = {
  getQuestList() {
    return query(`SELECT quest.questgiver, stars, quest.name, quest.id AS value, count(questid) FROM submission
    FULL OUTER JOIN quest
    ON quest.id = submission.questId
    GROUP BY questgiver, stars, quest.name, value
    ORDER BY count(questid) DESC;`)
  }
}

module.exports = Quest