const express = require("express");
const router = express.Router();

const SingleProductController = require("../controllers/single-product-controller");

router.get("/single-product", SingleProductController.getSingleProduct);

module.exports = router;