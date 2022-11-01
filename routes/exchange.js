const express = require("express");
const router = express.Router();
const exchangeController  = require("../controllers/exchange");

router.get('/exchange',exchangeController.exchangeForm);
router.post('/exchange',exchangeController.exchange);

module.exports = router;
