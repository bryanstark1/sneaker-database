const Sneaker = require('../models/sneaker')

const index = (req, res) => {
  res.render('sneakers/index', {
    sneakers: Sneaker.getAll(),
    title: 'Sneakers'
  });
};

const show = (req, res) => {
  res.render('sneakers/show', {
    sneaker: Sneaker.getOne(req.params.id),
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
  res.redirect('/sneakers');
};

const edit = (req, res) => {
  const sneaker = Sneaker.getOne(req.params.id);
  res.render('sneakers/edit', {
    title: 'Edit Sneaker',
    sneaker
  });
};

const update = (req, res) => {
  Sneaker.update(req.params.id, req.body);
  res.redirect(`/sneakers/${req.params.id}`);
};

const deleteSneaker = (req, res) => {
  Sneaker.deleteOne(req.params.id);
  res.redirect('/sneakers');
};

module.exports = {
  index,
  show,
  new: newSneaker,
  create,
  edit,
  update,
  delete: deleteSneaker
};