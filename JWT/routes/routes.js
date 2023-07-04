const { Router } = require('express');
const router = Router();
const { getRoute } = require('../controllers/index.controllers');


router.get('/',getRoute);


module.exports = router