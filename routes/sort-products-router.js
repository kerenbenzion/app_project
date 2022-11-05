const express = require("express");
const router = express.Router();

const SortProductController = require("../controllers/sort-products-controller");

router.get("/sortByName", SortProductController.sort);

module.exports = router;