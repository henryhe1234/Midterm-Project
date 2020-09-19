const express = require('express');
const router  = express.Router();

router.post("/todos/:id/delete", (req, res) => {
  res.redirect("todos");
});
module.exports = router;
