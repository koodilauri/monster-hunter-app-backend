const pg = require('pg');
require('dotenv').config()

const v = process.env.DB_USER;

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  // port: process.env.DB_NAME,
  database: process.env.DB_NAME,
  // connectionString: process.env.DATABASE_URL,
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, //   how long a client is allowed to remain idle before being closed 
};

process.on('unhandledRejection', e => {
  console.log(config)
  console.log(e.message, e.stack)
})

const pool = new pg.Pool(config);
 
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

module.exports.query = function (text, values) {
  console.log('query:', text, values);
  return new Promise((resolve, reject) => {
    pool.query(text, values, (error, result) => {
      if (error) reject(error)
      resolve(result.rows)
    })
  })
};
 
module.exports.connect = function (callback) {
  return pool.connect(callback);
};