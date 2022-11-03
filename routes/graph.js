const express = require("express");
const router = express.Router();
const graphcontroller  = require("../controllers/graph");

router.get('/graph',graphcontroller.getPricesGraph);

module.exports = router;
