const Product = require('../models/Product');
const mongoose = require('mongoose');

async function getSingleProduct(id){
    return returnedSingleProduct = await Product.findById(id);
}

async function getCategoryProducts(category){
    return returnedProducts = await Product.find({type : category});
}

module.exports = {getSingleProduct, getCategoryProducts};