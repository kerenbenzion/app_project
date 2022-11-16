const { resetWatchers } = require("nodemon/lib/monitor/watch");
const paymentService = require("../services/payment")

function getpaymentpage(req, res) {
    res.render('../views/payment', {
        username: req.session.username
    });
}

async function finishPayment(req, res) {
    const { products, username, total } = req.body
    let splited_products = []
    console.log(products)
    if (products.includes(',')) {
        console.log("hello")
        splited_products = products.split(',')
    }
    else {
        splited_products = [products]
    }
    let products_arr = []
    for (var i = 0; i < splited_products.length; i++) {
        products_arr.push(splited_products[i])
    }
    const result = await paymentService.saveOrder(products_arr, username, total)

    if (result != null) {
        req.session.username = username
        res.render('../views/finishPayment', { orderNumber: result });
    }
    else
        res.redirect('/login')
}

module.exports = {
    getpaymentpage, finishPayment
}