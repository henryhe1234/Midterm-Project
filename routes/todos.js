const express = require('express');
const router  = express.Router();

const taskSort = require("../lib/taskSort");
const fakeTodos = require("./fake_data/in_memory_db");
router.get("/", (req, res) => {
  const templateVars = fakeTodos;
  res.render("todos", templateVars);
});

//not sure we need a post Here
router.post("/", (req, res) => {


  const text = req.body["new-todo"];
  taskSort(text);
  res.redirect("/todos");
});

//this creates all the needed info for the frontend
router.post("/new", (req, res) => {
  const userId = Math.random();
  const title = req.body["new-todo"];
  const createdOn = new Date();
  const category = taskSort(title);
  const scheduledDate = new Date();
  const info = "some info on " + title;
  const newTodo = {
    userId: userId,
    title: title,
    createdOn: createdOn,
    category: category,
    scheduledDate: scheduledDate,
    info: info
  };
  fakeTodos.todos.push(newTodo);
  res.redirect("/todos");
});

router.post("/:id/edit", (req, res) => {
  res.redirect("/todos");
});

router.post("/:id/delete", (req, res) => {
  res.redirect("/todos");
});
module.exports = router;
