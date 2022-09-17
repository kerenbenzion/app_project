const express = require("express");
const router = express.Router();
const allproducts  = require("../controllers/all_products");

router.get('/products', allproducts.form);
router.post('/add_product',allproducts.add_product);
router.get('/get_products',allproducts.get_products);
router.get('/getByname/:name',allproducts.getByname);
router.get('/deletebyname/:name',allproducts.deletebyname);
router.put('/updatebyname/:name',allproducts.updatebyname);

module.exports = router;
