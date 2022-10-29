const express = require("express");
const router = express.Router();
const init = require("../controllers/initdb");

router.get('/initdb', init.initdb);

module.exports = router;
