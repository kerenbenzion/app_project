const Product = require("../models/Product");

async function getPrices() {
    const products = await Product.find({}, {"price":1});
    return products;
}


module.exports = { getPrices }
