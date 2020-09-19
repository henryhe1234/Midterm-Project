const express = require('express');
const router  = express.Router();

router.post("/todos/new", (req, res) => {
  res.redirect("todos");
});
module.exports = router;
