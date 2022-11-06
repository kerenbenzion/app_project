const express = require("express");
const router = express.Router();
const userscontroller = require("../controllers/users");

router.get('/users', userscontroller.getuserspage);
router.get('/users/getusers', userscontroller.getusers);

module.exports = router;
