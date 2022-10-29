const express = require("express");
const router = express.Router();

const ProductCategoryController = require("../controllers/product-category-controller");

router.get("/product-category", ProductCategoryController.getCategoryProducts);

module.exports = router;