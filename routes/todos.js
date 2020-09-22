// const { json } = require('body-parser');
// const { Template } = require('ejs');
const express = require('express');
const router = express.Router();
const { addBooks, addMovie, addProduct, addRestaurant, addUser, getItemsListByUserId, editScheduled_dateByUserIdAndTitle, editCompleted_dateByUserIdAndTitle, deleteTaskItemByUserIdAndTitle } = require("../db/database");
const taskSort = require("../lib/taskSort");
const db = require('../db/dbsetup')

router.get("/", (req, res) => {

  let user_id = req.session.id;
  getItemsListByUserId(user_id)
    .then((todos) => {
      console.log(todos);
      const templateVars = { todos: todos };
      res.render('todos', templateVars);
    })
});

router.get("/list", (req, res) => {
  let query = `SELECT * FROM task_items`;
  console.log(query);
  db.query(query)
    .then(data => {
      const widgets = data.rows;
      res.json({ widgets });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post("/", function (req, res) {
  console.log("REQ:\n", req.body["new-todo"])
  if (!req.body["new-todo"]) {
    res.status(400).json({ error: 'invalid request: no data in POST body' });
    return;
  }
  taskSort(req.body["new-todo"], req.session.id)
  //console.log(req.body)
  res.redirect("/")
});

// router.post("/:id/delete", (req, res) => {
//   res.redirect("/todos");
// });
module.exports = router;

