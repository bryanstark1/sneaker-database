var express = require('express');
var router = express.Router();
var sneakersCtrl = require('../controllers/sneakers');

// All actual paths start with '/sneakers'

// GET /sneakers
router.get('/', sneakersCtrl.index);
// GET /sneakers/new
router.get('/new', sneakersCtrl.new);
// GET /sneakers/:id
router.get('/:id', sneakersCtrl.show);
// POST /sneakers
router.post('/', sneakersCtrl.create);

module.exports = router;
