const { resetWatchers } = require("nodemon/lib/monitor/watch");
function getpaymentpage(req, res) {
    res.render('../views/payment', {
        username: req.session.username
    });
}
function finishPayment(req, res) {
    res.render('../views/finishPayment');
}

module.exports = {
    getpaymentpage, finishPayment
}