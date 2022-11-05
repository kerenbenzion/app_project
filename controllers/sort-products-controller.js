const singleProductModel = require('../models/Product');
const productService = require('../services/product');

function sort(req, res) {
    const result = productService.sortProductsByName();
    result.then(r => {
        res.json(r);
    });
}

module.exports = { sort };