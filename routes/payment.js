const express = require("express");
const { home } = require("nodemon/lib/utils");
const router = express.Router();
const homepage = require("../controllers/homepage");

router.get('/', homepage.gethomepage);

module.exports = router;
