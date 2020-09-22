
const { Pool, Query } = require('pg');
const dbParams = require('../lib/db.js');
// console.log(dbParams);
// const pool = new Pool(dbParams);
// const pool = new Pool({
//   user: 'labber',
//   password: 'labber',
//   host: 'localhost',
//   database: 'midterm'
// });
const pool = new Pool(dbParams);

pool.connect(()=>{
  console.log('connected to the database');
});

module.exports = pool;
