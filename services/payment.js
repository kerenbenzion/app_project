const Order = require("../models/Order");
async function saveOrder(products, username) {
    const newOrder = new Order({
        products,
        username: username,
        date: Date.now()
    });

    const savedRes = await newOrder.save()
    return savedRes._id
}
module.exports = { saveOrder }