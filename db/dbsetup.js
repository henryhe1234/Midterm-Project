
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const pool = new Pool(dbParams);

pool.connect(()=>{
  console.log('connected to the database');
});

module.exports = pool;
