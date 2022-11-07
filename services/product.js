const Product = require('../models/Product');
const mongoose = require('mongoose');

async function getSingleProduct(id){
    return returnedSingleProduct = await Product.findById(id);
}

async function getCategoryProducts(category, color, maxPrice){
    maxPrice = parseInt(maxPrice);

    console.log(maxPrice.type)

    if(color == "all"){
        returnedProducts = await Product.find({type : category , price : { $lte : maxPrice}})
        console.log(returnedProducts);
        return returnedProducts = await Product.find({type : category , price : { $lte : maxPrice}});
    }
    else{
        return returnedProducts = await Product.find({type : category, color : color , price : { $lte : maxPrice}});
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
    return returnedProducts;
}

async function sortProductsByPrice(){
    returnedProducts = await Product.find({}).sort([['price' , 1]]);
    return returnedProducts;
}

async function sortProductsByPriceDesc(){
    returnedProducts = await Product.find({}).sort([['price' , -1]]);
    return returnedProducts;
}
module.exports = {getSingleProduct, getCategoryProducts, sortProductsByName, sortProductsByPrice, sortProductsByPriceDesc};