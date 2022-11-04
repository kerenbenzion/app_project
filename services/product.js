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

// async function searchProduct(maxPrice){
//     // returnedProducts = await Product.find({}, product => {product.name.indexOf(productName) >= 0});
//     returnedProducts = await Product.find({$price : {$gt : parseInt(maxPrice)}});
//     // returnedProducts = await Product.find().where('pr')
//     // console.log(test);
//     return returnedProducts;
//     // return returnedProducts = await Product.find({});
// }

async function sortProductsByName(){
    returnedProducts = await Product.find({}).sort([['name' , 1]]);
    // console.log(returnedProducts);
    return returnedProducts;
}

module.exports = {getSingleProduct, getCategoryProducts, sortProductsByName};