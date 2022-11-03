const Product = require("../models/Product");
const Order = require("../models/Order");

async function getPrices() {
    const products = await Product.find({}, {"price":1});
    return products;
}

async function getOrderDates() {
    const products = await Order.aggregate(   [
        {
          $project: {
             _id: 0,
             formattedDate: { $dateToString: { format: "%m", date: "$date" } }
          }
        }
      ]);
    console.log(products)
    return products;
}
module.exports = { getPrices, getOrderDates }
