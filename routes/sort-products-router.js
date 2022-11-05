const express = require("express");
const router = express.Router();

const SortProductController = require("../controllers/sort-products-controller");

router.get("/sortByName", SortProductController.sortByName);
router.get("/sortByPrice", SortProductController.sortByPrice);
router.get("/sortByPriceDesc", SortProductController.sortByPriceDesc);


module.exports = router;