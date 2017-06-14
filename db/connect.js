const pg = require('pg');

const config = {
  user: 'mh_db_user',
  password: '1qaz2wsx',
  host: 'localhost',
  port: process.env.DB_NAME,
  database: 'mh_db',
  // connectionString: process.env.DATABASE_URL,
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, //   how long a client is allowed to remain idle before being closed 
};

process.on('unhandledRejection', e => {
  console.log(">", process.env.DB_USER, "<")
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