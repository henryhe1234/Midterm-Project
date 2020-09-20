const express = require('express');
const router  = express.Router();

const data = require("./fake_data/todos.json");

const taskSort = require("../lib/taskSort");

router.get("/", (req, res) => {
  const templateVars = { todo: data.task_lists };
  res.render("todos", templateVars);
});
router.post("/", (req, res) => {
  const text = req.body["new-todo"];
  console.log(text);
  res.redirect("/todos");
});





module.exports = router;
