const SingleProduct = require('../models/single-product-model');
const mongoose = require('mongoose');

async function getSingleProduct(id){
    return returnedSingleProduct = await SingleProduct.findById(id);
}

async function getAllProducts(){
    return returnedProducts = await SingleProduct.find({});
}

module.exports = {getSingleProduct, getAllProducts};