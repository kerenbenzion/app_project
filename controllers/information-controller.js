const singleProductModel = require('../models/Product');
const productService = require('../services/product');
    
function getSingleProduct(req, res) {
    const result = productService.getSingleProduct(req.query.id);
    result.then(r => {
        res.json(r);
    });
}

module.exports = { getSingleProduct };