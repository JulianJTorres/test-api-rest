const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const data = require('./cards.json');

//Cards
router.get('/', (req, res) => {
  if (req.query.id){
    const elem = data.filter(c => req.query.id == c.id);
    res.json(elem);
  }
  else
    res.json(data);
});

module.exports = router;