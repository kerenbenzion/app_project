const express = require("express");
const router = express.Router();
const orderGraphController  = require("../controllers/order_graph");

router.get('/orderData',orderGraphController.orderDate );

module.exports = router;
