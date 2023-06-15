var express = require('express');
var router = express.Router();
var sneakersCtrl = require('../controllers/sneakers');

// All actual paths start with '/sneakers'

// GET /sneakers
router.get('/', sneakersCtrl.index);
// GET /sneakers/:id


module.exports = router;
