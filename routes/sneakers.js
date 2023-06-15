var express = require('express');
var router = express.Router();
var sneakersCtrl = require('../controllers/sneakers');
const sneaker = require('../models/sneaker');

// All actual paths start with '/sneakers'

// GET /sneakers
router.get('/', sneakersCtrl.index);
// GET /sneakers/new
router.get('/new', sneakersCtrl.new);
// GET /sneakers/:id
router.get('/:id', sneakersCtrl.show);
// GET /sneakers/:id/edit
router.get('/:id/edit', sneakersCtrl.edit);
// POST /sneakers
router.post('/', sneakersCtrl.create);
// DELETE /sneakers/:id
router.delete('/:id', sneakersCtrl.delete);
// PUT /sneakers/:id
router.put('/:id', sneakersCtrl.update);

module.exports = router;
