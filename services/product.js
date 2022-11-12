const Product = require('../models/Product');
const mongoose = require('mongoose');

async function getSingleProduct(id) {
    return returnedSingleProduct = await Product.findById(id);
}

async function getCategoryProducts(category, color, maxPrice) {
    //validation
    const categories = ['all', 'rings', 'bracelets', 'necklaces', 'earrings'];
    const colors = ['all', 'gold', 'silver'];
    const validMaxPrice = maxPrice == 'all' || (!isNaN(maxPrice) && maxPrice > 0);

    if (!categories.includes(category) || !colors.includes(color) || !validMaxPrice) {
        return;
    }


    //get the relevent products
    if (maxPrice != "all" && maxPrice !== undefined) {
        if (color == "all" || color === undefined) {
            if (category == "all" || category === undefined)
                return returnedProducts = await Product.find({ price: { $lte: maxPrice } });

            return returnedProducts = await Product.find({ type: category, price: { $lte: maxPrice } });
        }
        else {
            if (category == "all" || category === undefined)
                return returnedProducts = await Product.find({ color: color, price: { $lte: maxPrice } });

            return returnedProducts = await Product.find({ type: category, color: color, price: { $lte: maxPrice } });
        }
    }

    else {

        if (color == "all" || color === undefined) {
            if (category == "all" || category === undefined){
                return returnedProducts = await Product.find({});
            }
            return returnedProducts = await Product.find({ type: category });
        }
        else {
            if (category == "all" || category === undefined){
                return returnedProducts = await Product.find({ color: color });
            }
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