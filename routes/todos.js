const express = require('express');
const router  = express.Router();
const data = require("./fake_data/todos.json");


router.get("/", (req, res) => {

  const templateVars = { todo: data.task_lists };
  console.log(templateVars);
  res.render("todos", templateVars);
});

module.exports = router;
