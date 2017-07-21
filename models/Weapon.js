const query = require("../db/connect").query

const Weapon = {
  findAll() {
    return query(`SELECT * from weapon;`)
  }
}

module.exports = Weapon