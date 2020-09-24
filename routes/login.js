const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  req.session.id = req.params.id;
  res.redirect('/');
});

router.post('/', (req, res) => {
  req.session.id = req.body.username;
  res.redirect('/');
})

module.exports = router;
