const query = require("../db/connect").query

const Armor = {
  findAll() {
    return query(`SELECT A.*, S1.name AS skill1_name, S2.name AS skill2_name, S3.name AS skill3_name FROM armor A
    LEFT JOIN skill S1
    ON S1.id = A.skill1
    LEFT JOIN skill S2
    ON S2.id = A.skill2
    LEFT JOIN skill S3
    ON S3.id = A.skill3;`)
  }
}

module.exports = Armor