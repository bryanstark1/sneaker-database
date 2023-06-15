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

module.exports = {
    index,
    show
};