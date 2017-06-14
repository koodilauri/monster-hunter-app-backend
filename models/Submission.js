const query = require("../db/connect").query

const Submission = {
  findAll() {
    return query(`SELECT * FROM submission`)
  }
}

module.exports = Submission