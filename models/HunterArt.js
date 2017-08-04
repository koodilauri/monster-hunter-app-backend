const query = require("../db/connect").query

const HunterArt = {
  findAll() {
    return query(`SELECT * from hunter_art`)
  }
}

module.exports = HunterArt