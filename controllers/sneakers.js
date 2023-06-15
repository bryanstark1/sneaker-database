const Sneaker = require('../models/sneaker')

const index = (req, res) => {
    res.render('sneakers/index', {
        sneakers: Sneaker.getAll()
    });
};

const show = (req, res) => {
    res.render('sneakers/show', {
        sneakers: Sneaker.getOne(req.params.id)
    });
};

module.exports = {
    index,
    show
};