const Sneaker = require('../models/sneaker')

const index = (req, res) => {
    res.render('sneakers/index', {
        sneakers: Sneaker.getAll()
    });
};

module.exports = {
    index
}