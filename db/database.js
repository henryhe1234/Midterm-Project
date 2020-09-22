// require('dotenv').config();
const pool = require('./dbsetup');

const addUser = (user) => {
  return pool.query(`
  INSERT INTO users (
    name, email, password)
    VALUES (
    $1, $2, $3)
    RETURNING *;
  `, [user.name, user.email, user.password])
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
};

const addBooks = (user_id, title, create_on, scheduled_date, completed_date, book) => {
  return pool.query(`
  INSERT INTO task_items (user_id,title,create_on,
    category,scheduled_date,completed_date,info)
    VALUES($1,$2,$3,'book',$4,$5,$6)
    RETURNING *;
`, [user_id, title, create_on, scheduled_date, completed_date, book])
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
};

const addMovie = (user_id, title, create_on, scheduled_date, completed_date, movie) => {
  return pool.query(`
  INSERT INTO task_items (user_id,title,create_on,
    category,scheduled_date,completed_date,info)
    VALUES($1,$2,$3,'movie',$4,$5,$6)
    RETURNING *;
`, [user_id, title, create_on, scheduled_date, completed_date, movie])
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
};

const addRestaurant = (user_id, title, create_on, scheduled_date, completed_date, restaurant) => {
  return pool.query(`
  INSERT INTO task_items (user_id,title,create_on,
    category,scheduled_date,completed_date,info)
    VALUES($1,$2,$3,'restaurant',$4,$5,$6)
    RETURNING *;
`, [user_id, title, create_on, scheduled_date, completed_date, restaurant])
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
};

const addProduct = (user_id, title, create_on, scheduled_date, completed_date, product) => {
  return pool.query(`
  INSERT INTO task_items (user_id,title,create_on,
    category,scheduled_date,completed_date,info)
    VALUES($1,$2,$3,'product',$4,$5,$6)
    RETURNING *;
`, [user_id, title, create_on, scheduled_date, completed_date, product])
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
};

const getItemsListByUserId = (userId) => {
  return pool.query(`
  SELECT title,create_on,scheduled_date,completed_date,info
  FROM task_items
  JOIN users ON users.id = user_id
  WHERE user_id = $1 AND is_active = true
  ORDER BY scheduled_date;

  `,[userId])
    .then((res)=>{
      console.log(res.rows);
      return res.rows;
    });
};

const editScheduled_dateByUserIdAndTitle = (newScheduled_date,user_id,title)=>{
  return pool.query(`
  UPDATE task_items
  SET scheduled_date = $1
  WHERE user_id = $2 AND title = $3
  RETURNING *;
  `,[newScheduled_date,user_id,title])
    .then((res)=>{
      return res.rows[0];
    });
};

const editCompleted_dateByUserIdAndTitle = (newCompleted_date,user_id,title)=>{
  return pool.query(`
  UPDATE task_items
  SET completed_date = $1
  WHERE user_id = $2 AND title = $3
  RETURNING *;
  `,[newCompleted_date,user_id,title])
    .then((res)=>{
      return res.rows[0];
    });
};

const deleteTaskItemByUserIdAndTitle = (user_id,title)=>{
  return pool.query(`
  UPDATE task_items
  SET is_active = false
  WHERE user_id = $1 AND title = $2
  RETURNING *;
  `,[user_id,title])
    .then((res)=>{
      return res.rows[0];
    });
};

module.exports = {
  addUser,
  addBooks,
  addMovie,
  addRestaurant,
  addProduct,
  getItemsListByUserId,
  editScheduled_dateByUserIdAndTitle,
  editCompleted_dateByUserIdAndTitle,
  deleteTaskItemByUserIdAndTitle
};


