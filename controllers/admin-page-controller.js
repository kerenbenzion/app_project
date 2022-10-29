const singleProductModel = require('../models/single-product-model');
const productService = require('../services/product');
    
function getProducts(req, res) {
        const result = productService.getAllProducts();
        result.then(r => {
            res.render("admin-page.ejs",{products : r});
    });
}

// const getProducts = (req, res) => {
//     res.render("admin-page.ejs",{products : productService.getAllProducts()})
// }

const search = (req, res) => {
    res.render("admin-page.ejs",{products : productService.search()})
}
    


module.exports = { getProducts };