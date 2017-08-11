const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT A.id, A.name, B.name AS quest_name, A.quest_time, A.created, D.name AS weapon_name, D.class AS weapon_class, D.type, C.style, C.name AS set_name, A.set_id FROM submission A
    JOIN quest B
    ON B.id = A.quest_id
    JOIN armor_set C
    ON C.id = A.set_id
    JOIN weapon D
    ON D.id = C.weapon_id`)
  },
  saveOrUpdateOne(name, quest_id, quest_time, created, set_id) {
    // const string = "INSERT INTO submission (name, quest, quest_time, weapon, style, created) VALUES ('"+name+"', '"+quest+"', '"+quest_time+"', '"+weapon+"', '"+style+"', '"+created+"')";
    return query(`INSERT INTO submission (name, quest_id, quest_time, created, set_id) VALUES ($1, $2, $3, $4, $5)
    RETURNING id, name, quest_time, set_id, created`, [name, quest_id, quest_time, created, set_id])
  }
}

module.exports = Submission