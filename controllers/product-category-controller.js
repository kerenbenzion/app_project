const Product = require("../models/Product");
const productService = require('../services/product');

function getCategoryProducts(req, res) {
    const result = productService.getCategoryProducts(req.query.category);
    result.then(r => {
        res.render("all_products.ejs",{products : r});
    });
}

module.exports = { getCategoryProducts };