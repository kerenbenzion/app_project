const Product = require("../models/Product");
const productService = require('../services/product');

function getCategoryProducts(req, res) {
    const result = productService.getCategoryProducts(req.query.category, req.query.color, req.query.maxPrice);
    result.then(r => {
        if( r == null)
            res.render("404.ejs");
        else if( r.length == 0){
            res.render("all_products.ejs", { username: req.session.username });
        }
        else
            res.render("all_products.ejs", { products: r, username: req.session.username });
    });
}

module.exports = { getCategoryProducts };