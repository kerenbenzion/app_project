const singleProductModel = require('../models/Product');
const productService = require('../services/product');
    
function getSingleProduct(req, res) {
    const result = productService.getSingleProduct(req.query.id);
    result.then(r => {
        res.json(r);
    });
}

function getProductCategory(req , res){
    const result = productService.getCategoryProducts(req.query.category, req.query.color, req.query.maxPrice);
    console.log(req.query.category)
    console.log(req.query.color)
    console.log(req.query.maxPrice)
    result.then(r => {
        res.json(r);
    });
}

module.exports = { getSingleProduct , getProductCategory };