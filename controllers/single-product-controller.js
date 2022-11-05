const singleProductModel = require('../models/Product');
const productService = require('../services/product');
    
function getSingleProduct(req, res) {
    // const result = productService.getSingleProduct(req.query.id);
    // result.then(r => {
    //     res.render("single-product.ejs",{});
    //     // res.render("single-product.ejs",{singleProduct : r});
    // });
    res.render("single-product.ejs",{});
}

module.exports = { getSingleProduct };