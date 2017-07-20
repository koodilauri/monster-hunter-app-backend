const query = require("../db/connect").query

const ArmorSet = {
  getArmorSetList() {
    return query(`SELECT armorset.*, A.name AS head, B.name AS torso, C.name AS arms, D.name AS waist, E.name AS feet FROM armorset
    JOIN armor A
    ON head_id = A.id
    JOIN armor B
    ON torso_id = B.id
    JOIN armor C
    ON arms_id = C.id
    JOIN armor D
    ON waist_id = D.id
    JOIN armor E
    ON feet_id = E.id;`)
  },
  saveOrUpdateOne(head_id, torso_id, arms_id, waist_id, feet_id, charm_id) {
    return query(`INSERT INTO armorset (head_id, torso_id, arms_id, waist_id, feet_id, charm_id) VALUES ($1, $2, $3, $4, $5, $6)
    ON CONFLICT (head_id, torso_id, arms_id, waist_id, feet_id, charm_id) DO UPDATE SET head_id=EXCLUDED.head_id
    RETURNING id`, [head_id, torso_id, arms_id, waist_id, feet_id, charm_id])
  }
}

module.exports = ArmorSet