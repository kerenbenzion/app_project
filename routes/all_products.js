const express = require("express");
const router = express.Router();
const allproducts  = require("../controllers/all_products");

router.get('/products', allproducts.form);
router.get('/add_product',allproducts.add_product);

module.exports = router;
