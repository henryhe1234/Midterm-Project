const express = require('express');
const router  = express.Router();

router.post("/todos/new", (req, res) => {
  const body = req.body["new-todo"];
  console.log(body);
  res.redirect("/todos");
});
module.exports = router;
