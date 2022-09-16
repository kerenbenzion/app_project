const express = require("express");
const router = express.Router();
const allproducts  = require("../controllers/all_products");

router.get('/products', allproducts.form);


module.exports = router;
