const Product = require('../models/Product');
const mongoose = require('mongoose');

async function getSingleProduct(id){
    return returnedSingleProduct = await Product.findById(id);
}

async function getCategoryProducts(category, color){
    if(color == "all"){
        return returnedProducts = await Product.find({type : category});
    }
    else{
        return returnedProducts = await Product.find({type : category, color : color});
    }
}

module.exports = {getSingleProduct, getCategoryProducts};