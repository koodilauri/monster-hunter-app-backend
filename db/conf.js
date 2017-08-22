
if (process.env.NODE_ENV === "heroku") {
  require("dotenv").config({ path: "./.env.heroku"})
} else {
  require("dotenv").config()
}

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env

module.exports = {
  url: `jdbc:postgresql://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  schemas: 'public',
  locations: 'filesystem:db/migrations',
  user: DB_USER,
  password: DB_PASSWORD,
  sqlMigrationSuffix: '.sql'
}
