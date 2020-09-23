const express = require('express');
const router = express.Router();
const {addUser} = require('../db/database')

router.post('/', (req, res) => {
  let {name,email,password} = req.body;
  let useerobject = {name,email,password};
  addUser(useerobject)
  .then((response)=>{
    req.session.id = response.id;
    res.redirect('/todos');
  })
});

module.exports = router;
