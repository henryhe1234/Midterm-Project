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

// INSERT INTO task_items (name, category,scheduled_date,completed_date) VALUES ('mcdonalds', 'restaurants','2018-07-20','2019-08-03');
const addBooks = (book, scheduled_date, completed_date) => {
  return pool.query(`
  INSERT INTO task_items (
    info,category,scheduled_date,completed_date)
    VALUES($1,'books',$2,$3)
    RETURNING *;
`, [book, scheduled_date, completed_date])
    .then((res) => {
      return res.rows[0];
    })
}
const addMovie = (movie, scheduled_date, completed_date) => {
  return pool.query(`
  INSERT INTO task_items (
    info,category,scheduled_date,completed_date)
    VALUES($1,'movie',$2,$3)
    RETURNING *;
`, [movie, scheduled_date, completed_date])
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
let scheduled_date = "2020-08-19";
let completed_date = "2020-03-18";
addProduct(product,scheduled_date,completed_date);
// addRestaurant(restaurant, scheduled_date, completed_date);
// addMovie(movie,scheduled_date,completed_date);
// addBooks(books,scheduled_date,completed_date);
// addUser(user1);
