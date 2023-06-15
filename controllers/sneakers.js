const Sneaker = require('../models/sneaker')

const index = (req, res) => {
  res.render('sneakers/index', {
    sneakers: Sneaker.getAll(),
    title: 'Sneakers'
  });
};

const show = (req, res) => {
  res.render('sneakers/show', {
    sneakers: Sneaker.getOne(req.params.id),
    title: 'Sneaker Details'
  });
};

const newSneaker = (req, res) => {
  res.render('sneakers/new', {
    sneaker: Sneaker.getOne(req.params.id),
    title: 'New Sneaker'
  });
};

const create = (req, res) => {
  Sneaker.create(req.body);
  res.redirect('sneakers/');
};

module.exports = {
  index,
  show,
  new: newSneaker,
  create
};