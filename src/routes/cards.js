const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const data = require('./cards.json');

//Cards
router.get('/', (req, res) => {
  res.json(data);
});

module.exports = router;