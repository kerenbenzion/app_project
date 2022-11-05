const express = require("express");
const router = express.Router();
const userscontroller = require("../controllers/users");

router.get('/users', userscontroller.getusers);

module.exports = router;
