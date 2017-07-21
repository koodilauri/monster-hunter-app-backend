const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT submission.id, submission.name, quest.name AS questname, questtime, weapon.name AS weaponname, weapon.class AS weaponclass, weapon.type, style, created, setid FROM submission
    JOIN quest
    ON quest.id = submission.questId
    JOIN weapon
    ON weapon.id = submission.weaponId`)
  },
  saveOrUpdateOne(name, questid, questtime, weaponId, style, created, setID) {
    // const string = "INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ('"+name+"', '"+quest+"', '"+questtime+"', '"+weapon+"', '"+style+"', '"+created+"')";
    return query(`INSERT INTO submission (name, questid, questtime, weaponId, style, created, setID) VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING name, questtime, weaponId, style, setID, created`, [name, questid, questtime, weaponId, style, created, setID])
  }
}

module.exports = Submission