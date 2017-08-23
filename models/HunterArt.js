const query = require("../db/connect").query

const HunterArt = {
  findAll() {
    return query(`SELECT * FROM hunter_art`)
  },
  allSetArts(){
    return query(`SELECT * FROM art_in_set`)
  }
}

module.exports = HunterArt