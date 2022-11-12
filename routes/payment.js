const express = require("express");
const { home } = require("nodemon/lib/utils");
const router = express.Router();
const payment = require("../controllers/payment");

router.get('/payment', payment.getpaymentpage);
router.post('/payment', payment.finishPayment)
module.exports = router;
