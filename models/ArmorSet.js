const query = require("../db/connect").query

const ArmorSet = {
  findAll() {
    return query(`SELECT armor_set.*, A.name AS head, B.name AS torso, C.name AS arms, D.name AS waist, E.name AS feet, F.slots AS charm_size, F.bonus1, F.bonus2, G.name as skill1, H.name as skill2 FROM armor_set
    JOIN armor A
    ON head_id = A.id
    JOIN armor B
    ON torso_id = B.id
    JOIN armor C
    ON arms_id = C.id
    JOIN armor D
    ON waist_id = D.id
    JOIN armor E
    ON feet_id = E.id
    JOIN charm F
    ON charm_id = F.id
    JOIN skill G
    ON F.skill1_id = G.id
    JOIN skill H
    ON F.skill2_id = H.id`)
  },
  saveOrUpdateOne(name, style, weapon_id, head_id, torso_id, arms_id, waist_id, feet_id, charm_id) {
    return query(`INSERT INTO armor_set (name, style, weapon_id, head_id, torso_id, arms_id, waist_id, feet_id, charm_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id`, [name, style, weapon_id, head_id, torso_id, arms_id, waist_id, feet_id, charm_id])
  },
  // ON CONFLICT (head_id, torso_id, arms_id, waist_id, feet_id, charm_id) DO UPDATE SET head_id=EXCLUDED.head_id

  saveDecoration(decoration_id, set_id, amount) {
    return query(`INSERT INTO decoration_in_set (decoration_id, set_id, amount) VALUES ($1, $2, $3)`,
      [decoration_id, set_id, amount])
  },
  saveArt(art1_id, art2_id, art3_id, set_id) {
    return query(`INSERT INTO art_in_set (art1_id, art2_id, art3_id, set_id) VALUES ($1, $2, $3, $4)
    RETURNING set_id`,
      [art1_id, art2_id, art3_id, set_id])
  }
}

module.exports = ArmorSet