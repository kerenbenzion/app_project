const express = require("express");
const router = express.Router();

const InformationController = require("../controllers/information-controller");

router.get("/info/single-product", InformationController.getSingleProduct);
router.get("/info/product-category", InformationController.getProductCategory);

module.exports = router;