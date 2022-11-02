const express = require("express");
const router = express.Router();
const pricecontroller  = require("../controllers/prices");

router.get('/prices',pricecontroller.price );

module.exports = router;
