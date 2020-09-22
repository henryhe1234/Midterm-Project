const { json } = require('body-parser');
const { Template } = require('ejs');
const express = require('express');
const router  = express.Router();

const taskSort = require("../lib/taskSort");

module.exports = (DataHelpers) => {

  router.get("/", (req, res) => {
    DataHelpers.getTodos((err, todos) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        const templateVars = { todos: todos };
        res.render("todos", templateVars);
      }
    });
  });


  router.post("/new", (req, res) => {
    const userId = Math.random();
    const title = req.body["new-todo"];
    const createdOn = Date.now();
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
    DataHelpers.saveTodo(newTodo, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.redirect("/todos");
      }
    });
  });
  // router.post("/:id/edit", (req, res) => {
  //   res.redirect("/todos");
  // });

  // router.post("/:id/delete", (req, res) => {
  //   res.redirect("/todos");
  // });
  return router;
};
