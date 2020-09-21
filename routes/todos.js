const express = require('express');
const router  = express.Router();

const taskSort = require("../lib/taskSort");

router.get("/", (req, res) => {


  res.render("todos");
});
router.post("/", (req, res) => {


  const text = req.body["new-todo"];
  taskSort(text);
  res.redirect("/todos");
});



module.exports = router;
