const Order = require("../models/Order");
const alert = require("alert");

async function saveOrder(products, username, total) {
    if(!username)
    {
        alert("You must be logged in to make an order")
        return null
    }
    const newOrder = new Order({
        products,
        username: username,
        date: Date.now(),
        total: total
    });

    const savedRes = await newOrder.save()
    return savedRes._id
}
module.exports = { saveOrder }