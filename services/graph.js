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
    return products;
}
async function getMaxOrder() {
    const maxproducts = await Order.aggregate(   [
        {
          $group: {
             _id: { $dateToString: { format: "%m", date: "$date" } },
             count:{$count: {} }
          },
        },
        {
            $sort : { count: -1 }
        },
      ]);
    console.log(maxproducts)
    return maxproducts;
}
module.exports = { getPrices, getOrderDates, getMaxOrder }
