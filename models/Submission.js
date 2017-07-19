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
  },
  getArmorList() {
    return query(`SELECT A.*, S1.name AS skill1name, S2.name AS skill2name, S3.name AS skill3name FROM armor A
    LEFT JOIN skill S1
    ON S1.id = A.skill1
    LEFT JOIN skill S2
    ON S2.id = A.skill2
    LEFT JOIN skill S3
    ON S3.id = A.skill3;`)
  },
  getHunterArts() {
    return query(`SELECT * from hunter_art;`)
  },
  getDecorations() {
    return query(`SELECT decoration.*, skill.name AS skillname FROM decoration
    JOIN skill
    ON skill.id = decoration.skill1id;`)
  },
  getWeaponList() {
    return query(`SELECT * from weapon;`)
  },
  getSkillList() {
    return query(`SELECT * from skill;`)
  },
  getArmorsetList() {
    return query(`SELECT A.name AS head, B.name AS torso, C.name AS arms, D.name AS waist, E.name AS feet FROM armorset
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
  }
}

module.exports = Submission