const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT * FROM submission`)
  },
  addOne(name, quest, questtime, weapon, style, created) {
    // const string = "INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ('"+name+"', '"+quest+"', '"+questtime+"', '"+weapon+"', '"+style+"', '"+created+"')";
    return query(`INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ($1, $2, $3, $4, $5, $6)`, [name, quest, questtime, weapon, style, created])
  },
  getQuestList(string) {
    return query(`SELECT monster, name, quest.id AS value FROM quest
    JOIN monsterInQuest
    ON quest.id = monsterInQuest.questId
    WHERE name LIKE $1`, ['%'+string+'%'])
  }
}

module.exports = Submission