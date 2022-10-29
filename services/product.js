const SingleProduct = require('../models/Product');
const mongoose = require('mongoose');

async function getSingleProduct(id){
    return returnedSingleProduct = await SingleProduct.findById(id);
}

module.exports = {getSingleProduct};