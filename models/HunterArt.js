const query = require("../db/connect").query

const HunterArt = {
  findAll() {
    return query(`SELECT * FROM hunter_art`)
  }
}

module.exports = HunterArt