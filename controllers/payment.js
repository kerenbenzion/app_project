const { resetWatchers } = require("nodemon/lib/monitor/watch");
function getpaymentpage(req, res) {
    res.render('../views/payment');
}

module.exports = {
    getpaymentpage,
}