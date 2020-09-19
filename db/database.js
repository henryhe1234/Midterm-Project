const { Pool, Query } = require('pg');
const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
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
};
const addBooks = (user_id,title,create_on, scheduled_date, completed_date,book) => {
  return pool.query(`
  INSERT INTO task_items (user_id,title,create_on,
    category,scheduled_date,completed_date,info)
    VALUES($1,$2,$3,'book',$4,$5,$6)
    RETURNING *;
`, [user_id,title,create_on,scheduled_date, completed_date,book])
    .then((res) => {
      return res.rows[0];
    })
}
const addMovie = (user_id,title,create_on, scheduled_date, completed_date,movie) => {
  return pool.query(`
  INSERT INTO task_items (user_id,title,create_on,
    category,scheduled_date,completed_date,info)
    VALUES($1,$2,$3,'book',$4,$5,$6)
    RETURNING *;
`, [user_id,title,create_on,scheduled_date, completed_date,movie])
    .then((res) => {
      return res.rows[0];
    })
};
const addRestaurant = (restaurant, scheduled_date, completed_date) => {
  return pool.query(`
  INSERT INTO task_items (
    info,category,scheduled_date,completed_date)
    VALUES($1,'restaurant',$2,$3)
    RETURNING *;
`, [restaurant, scheduled_date, completed_date])
    .then((res) => {
      return res.rows[0];
    })
};
const addProduct = (product, scheduled_date, completed_date) => {
  return pool.query(`
  INSERT INTO task_items (
    info,category,scheduled_date,completed_date)
    VALUES($1,'product',$2,$3)
    RETURNING *;
`, [product, scheduled_date, completed_date])
    .then((res) => {
      return res.rows[0];
    })
};




let user1 = {
  name: "Henry",
  email: "abc@abc",
  password: "1239494"
}
let product = "this is just a product";
let books = "this is just a book";
let movie = "this is just a movie";
let restaurant = "this is just a restaurant";
let create_on = "2019-12-31";
let scheduled_date = "2020-08-19";
let completed_date = "2020-03-18";
// addProduct(product,scheduled_date,completed_date);
// addRestaurant(restaurant, scheduled_date, completed_date);
// addMovie(movie,scheduled_date,completed_date);
// user_id,title,create_on, scheduled_date, completed_date,book

addMovie(1,"some title",create_on,scheduled_date,completed_date,books);

// addUser(user1);
