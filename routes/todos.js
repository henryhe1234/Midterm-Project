const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("hello");
    db.query(`SELECT * FROM todos;`)
      .then(data => {
        const todos = data.rows;
        res.json({ todos });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
