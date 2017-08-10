const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT A.id, A.name, B.name AS questname, A.questtime, A.created, D.name AS weaponname, D.class AS weaponclass, D.type, C.style, C.name AS setname, C.id AS setid FROM submission A
    JOIN quest B
    ON B.id = A.questId
    JOIN armorset C
    ON C.id = A.setId
    JOIN weapon D
    ON D.id = C.weapon_id`)
  },
  saveOrUpdateOne(name, questid, questtime, created, setID) {
    // const string = "INSERT INTO submission (name, quest, questtime, weapon, style, created) VALUES ('"+name+"', '"+quest+"', '"+questtime+"', '"+weapon+"', '"+style+"', '"+created+"')";
    return query(`INSERT INTO submission (name, questid, questtime, created, setID) VALUES ($1, $2, $3, $4, $5)
    RETURNING name, questtime, setID, created`, [name, questid, questtime, created, setID])
  }
}

module.exports = Submission