const singleProductModel = require('../models/single-product-model');
const productService = require('../services/product');
    
    function getSingleProduct(req, res) {
        const result = productService.getSingleProduct(req.query.id);
        result.then(r => {
            res.render("single-product.ejs",{singleProduct : r});
    });
}

module.exports = { getSingleProduct };