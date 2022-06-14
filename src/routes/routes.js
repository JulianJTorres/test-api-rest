const { Router } = require('express');
const router = Router();

//Raiz
router.get('/', (req, res) => {
    res.json({});
})

module.exports = router;