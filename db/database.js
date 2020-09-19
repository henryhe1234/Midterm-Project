const { Pool, Query } = require('pg');
const pool = new Pool({
  user:'labber',
  password:'labber',
  host:'localhost',
  database:'midterm'
});

// DB_HOST=localhost
// DB_USER=labber
// DB_PASS=labber
// DB_NAME=midterm
const addUser = (user) => {
  return pool.query(`
  INSERT INTO users (
    name, email, password)
    VALUES (
    $1, $2, $3)
    RETURNING *;
  `, [user.name, user.email, user.password])
    .then((res) => {
      return res.rows[0];
    })
}

let user1 = {
name:"Henry",
email:"abc@abc",
password:"1239494"
}

addUser(user1);
