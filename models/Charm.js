const query = require("../db/connect").query

const Charm = {
  findAll(){
    return query(`SELECT * FROM charm`)
  },
  saveOrUpdateOne(slots, skill1, skill2, amount1, amount2){
    return query(`INSERT INTO charm (slots, skill1_id, skill2_id, bonus1, bonus2) VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT (slots, skill1_id, skill2_id, bonus1, bonus2) DO UPDATE SET slots=EXCLUDED.slots
    RETURNING id`, [slots, skill1, skill2, amount1, amount2])
  }
}

module.exports = Charm