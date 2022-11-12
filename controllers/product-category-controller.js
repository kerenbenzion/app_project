const Product = require("../models/Product");
const productService = require('../services/product');

function getCategoryProducts(req, res) {
    const result = productService.getCategoryProducts(req.query.category, req.query.color, req.query.maxPrice);
    result.then(r => {
        if(r.length == 0)
        //when there will be full ajax in product category -- this will not be needed
            res.render("homepage.ejs");
        else
            res.render("all_products.ejs", { products: r, username: req.session.username });
    });
}

module.exports = { getCategoryProducts };