const Product = require('../models/Product');
const mongoose = require('mongoose');

async function getSingleProduct(id) {
    return returnedSingleProduct = await Product.findById(id);
}

async function getCategoryProducts(category, color, maxPrice) {
    if (maxPrice != "all" && maxPrice !== undefined) {

        if (color == "all" || color === undefined) {
            returnedProducts = await Product.find({ type: category, price: { $lte: maxPrice } })
            console.log(returnedProducts);
            return returnedProducts = await Product.find({ type: category, price: { $lte: maxPrice } });
        }
        else {
            return returnedProducts = await Product.find({ type: category, color: color, price: { $lte: maxPrice } });
        }
    }

    else {
        if (color == "all" || color === undefined) {
            if(category = "all" || category === undefined)
                return returnedProducts = await Product.find({});
                
            returnedProducts = await Product.find({ type: category })
            console.log(returnedProducts);
            return returnedProducts = await Product.find({ type: category });
        }
        else {
            return returnedProducts = await Product.find({ type: category, color: color });
        }
    }
}

async function sortProductsByName() {
    returnedProducts = await Product.find({}).sort([['name', 1]]);
    return returnedProducts;
}

async function sortProductsByPrice() {
    returnedProducts = await Product.find({}).sort([['price', 1]]);
    return returnedProducts;
}

async function sortProductsByPriceDesc() {
    returnedProducts = await Product.find({}).sort([['price', -1]]);
    return returnedProducts;
}
module.exports = { getSingleProduct, getCategoryProducts, sortProductsByName, sortProductsByPrice, sortProductsByPriceDesc };