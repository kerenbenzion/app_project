const singleProductModel = require('../models/Product');
const productService = require('../services/product');

function sortByName(req, res) {
    const result = productService.sortProductsByName();
    result.then(r => {
        res.json(r);
    });
}

function sortByPrice(req, res) {
    const result = productService.sortProductsByPrice();
    result.then(r => {
        res.json(r);
    });
}

function sortByPriceDesc(req, res) {
    const result = productService.sortProductsByPriceDesc();
    result.then(r => {
        res.json(r);
    });
}

module.exports = { sortByName, sortByPrice, sortByPriceDesc };