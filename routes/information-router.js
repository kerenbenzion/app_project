const express = require("express");
const router = express.Router();

const InformationController = require("../controllers/information-controller");

router.get("/info/single-product", InformationController.getSingleProduct);

module.exports = router;